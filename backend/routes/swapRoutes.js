const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  createSwapRequest,
  getUserSwaps,
  respondToSwap,
  getSwapHistory
} = require('../controllers/swapController');

router.post('/', protect, createSwapRequest);
router.get('/', protect, getUserSwaps);
router.get('/history', protect, getSwapHistory);
router.put('/:id/respond', protect, respondToSwap);

module.exports = router;
