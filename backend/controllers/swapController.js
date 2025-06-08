const Swap = require('../models/swapModel');
const Book = require('../models/bookModel');

exports.createSwapRequest = async (req, res) => {
  try {
    const { requestedBookId, offeredBookId, message } = req.body;

    // Verify books exist and are available
    const [requestedBook, offeredBook] = await Promise.all([
      Book.findById(requestedBookId),
      Book.findById(offeredBookId)
    ]);

    if (!requestedBook || !offeredBook) {
      return res.status(404).json({ message: 'One or both books not found' });
    }

    if (!requestedBook.isAvailable || !offeredBook.isAvailable) {
      return res.status(400).json({ message: 'One or both books are not available for swap' });
    }

    // Create swap request
    const swap = new Swap({
      requester: req.user._id,
      owner: requestedBook.owner,
      requestedBook: requestedBookId,
      offeredBook: offeredBookId,
      message
    });

    await swap.save();

    res.status(201).json(swap);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getUserSwaps = async (req, res) => {
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

exports.respondToSwap = async (req, res) => {
  try {
    const { status } = req.body;
    const swap = await Swap.findOne({
      _id: req.params.id,
      owner: req.user._id,
      status: 'pending'
    });

    if (!swap) {
      return res.status(404).json({ message: 'Swap request not found' });
    }

    swap.status = status;
    await swap.save();

    if (status === 'approved') {
      // Update book availability
      await Promise.all([
        Book.findByIdAndUpdate(swap.requestedBook, { isAvailable: false }),
        Book.findByIdAndUpdate(swap.offeredBook, { isAvailable: false })
      ]);
    }

    res.json(swap);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getSwapHistory = async (req, res) => {
  try {
    const swaps = await Swap.find({
      $or: [
        { requester: req.user._id },
        { owner: req.user._id }
      ],
      status: { $in: ['approved', 'completed'] }
    })
    .populate('requestedBook')
    .populate('offeredBook')
    .populate('requester', 'name email')
    .populate('owner', 'name email')
    .sort({ updatedAt: -1 });

    res.json(swaps);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
