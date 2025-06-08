# BookSwap Backend

This is the backend server for the BookSwap application, built with Node.js, Express, and MongoDB.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a .env file in the root directory with the following variables:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/bookswap
JWT_SECRET=your_jwt_secret_key_here
NODE_ENV=development
```

3. Make sure MongoDB is running on your system

4. Start the server:
```bash
# Development mode
npm run dev

# Production mode
npm start
```

## API Endpoints

### Authentication
- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login user
- PUT /api/auth/profile - Update user profile

### Books
- GET /api/books - Get all books
- POST /api/books - Create a new book
- GET /api/books/:id - Get book by ID
- PUT /api/books/:id - Update book
- DELETE /api/books/:id - Delete book
- GET /api/books/user - Get user's books

### Swaps
- POST /api/swaps - Create a swap request
- GET /api/swaps - Get user's swaps
- GET /api/swaps/history - Get swap history
- PUT /api/swaps/:id/respond - Respond to swap request

### Users
- GET /api/users/profile - Get user profile
- PUT /api/users/profile - Update user profile
- GET /api/users/books - Get user's books
- GET /api/users/swaps/history - Get user's swap history
- GET /api/users/swaps/pending - Get pending swap requests

## File Structure

```
backend/
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   ├── bookController.js
│   ├── swapController.js
│   └── userController.js
├── middleware/
│   ├── authMiddleware.js
│   ├── errorMiddleware.js
│   └── uploadMiddleware.js
├── models/
│   ├── bookModel.js
│   ├── swapModel.js
│   └── userModel.js
├── routes/
│   ├── authRoutes.js
│   ├── bookRoutes.js
│   ├── swapRoutes.js
│   └── userRoutes.js
├── uploads/
├── .env
├── package.json
└── server.js
```
