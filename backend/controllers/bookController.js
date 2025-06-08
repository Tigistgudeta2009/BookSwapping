const Book = require('../models/bookModel');

exports.createBook = async (req, res) => {
  try {
    const book = new Book({
      ...req.body,
      owner: req.user._id,
      image: req.file ? req.file.path : ''
    });
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const { genre, condition, search } = req.query;
    let query = { isAvailable: true };

    if (genre) query.genre = genre;
    if (condition) query.condition = condition;
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { author: { $regex: search, $options: 'i' } }
      ];
    }

    const books = await Book.find(query)
      .populate('owner', 'name email')
      .sort({ createdAt: -1 });
    
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id)
      .populate('owner', 'name email');
    
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findOne({ _id: req.params.id, owner: req.user._id });
    
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    Object.assign(book, req.body);
    if (req.file) {
      book.image = req.file.path;
    }

    await book.save();
    res.json(book);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findOneAndDelete({ 
      _id: req.params.id, 
      owner: req.user._id 
    });
    
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    
    res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUserBooks = async (req, res) => {
  try {
    const books = await Book.find({ owner: req.user._id })
      .sort({ createdAt: -1 });
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
