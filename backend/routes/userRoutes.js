const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');
const {
  getUserProfile,
  updateUserProfile,
  getUserBooks,
  getUserSwapHistory,
  getPendingSwaps
} = require('../controllers/userController');

// Get user profile
router.get('/profile', protect, getUserProfile);

// Update user profile
router.put('/profile', protect, upload.single('profilePicture'), updateUserProfile);

// Get user's books
router.get('/books', protect, getUserBooks);

// Get user's swap history
router.get('/swaps/history', protect, getUserSwapHistory);

// Get user's pending swaps
router.get('/swaps/pending', protect, getPendingSwaps);

module.exports = router;
