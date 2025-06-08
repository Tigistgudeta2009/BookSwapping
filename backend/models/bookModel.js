const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  author: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  condition: {
    type: String,
    required: true,
    enum: ['New', 'Like New', 'Very Good', 'Good', 'Acceptable']
  },
  image: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  isAvailable: {
    type: Boolean,
    default: true
  },
  language: {
    type: String,
    required: true
  },
  publishedYear: {
    type: Number
  }
}, {
  timestamps: true
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
