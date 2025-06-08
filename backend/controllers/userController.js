const User = require('../models/userModel');
const Book = require('../models/bookModel');
const Swap = require('../models/swapModel');

// Get user profile
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update user profile
exports.updateUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.language = req.body.language || user.language;
      
      if (req.body.password) {
        user.password = req.body.password;
      }

      if (req.file) {
        user.profilePicture = req.file.path;
      }

      const updatedUser = await user.save();

      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        language: updatedUser.language,
        profilePicture: updatedUser.profilePicture
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get user's books
exports.getUserBooks = async (req, res) => {
  try {
    const books = await Book.find({ owner: req.user._id });
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get user's swap history
exports.getUserSwapHistory = async (req, res) => {
  try {
    const swaps = await Swap.find({
      $or: [
        { requester: req.user._id },
        { owner: req.user._id }
      ]
    })
    .populate('requestedBook')
    .populate('offeredBook')
    .populate('requester', 'name email')
    .populate('owner', 'name email')
    .sort({ createdAt: -1 });

    res.json(swaps);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get user's pending swap requests
exports.getPendingSwaps = async (req, res) => {
  try {
    const pendingSwaps = await Swap.find({
      $or: [
        { requester: req.user._id, status: 'pending' },
        { owner: req.user._id, status: 'pending' }
      ]
    })
    .populate('requestedBook')
    .populate('offeredBook')
    .populate('requester', 'name email')
    .populate('owner', 'name email')
    .sort({ createdAt: -1 });

    res.json(pendingSwaps);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
