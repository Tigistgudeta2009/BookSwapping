const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { 
  createBook, 
  getAllBooks, 
  getBookById, 
  updateBook, 
  deleteBook,
  getUserBooks
} = require('../controllers/bookController');
const multer = require('multer');
const path = require('path');

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  fileFilter: function(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error('Please upload an image file'));
    }
    cb(null, true);
  }
});

router.post('/', protect, upload.single('image'), createBook);
router.get('/', getAllBooks);
router.get('/user', protect, getUserBooks);
router.get('/:id', getBookById);
router.put('/:id', protect, upload.single('image'), updateBook);
router.delete('/:id', protect, deleteBook);

module.exports = router;
