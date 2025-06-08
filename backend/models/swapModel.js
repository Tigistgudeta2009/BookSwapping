const mongoose = require('mongoose');

const swapSchema = new mongoose.Schema({
  requester: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  requestedBook: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: true
  },
  offeredBook: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected', 'completed'],
    default: 'pending'
  },
  message: {
    type: String
  }
}, {
  timestamps: true
});

const Swap = mongoose.model('Swap', swapSchema);
module.exports = Swap;
