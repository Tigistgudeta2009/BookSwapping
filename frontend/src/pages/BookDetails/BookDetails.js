import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import { useTranslation } from '../../hooks/useTranslation';
import './BookDetails.css';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { t } = useTranslation();
  const [book, setBook] = useState(null);
  const [userBooks, setUserBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [swapStatus, setSwapStatus] = useState('');

  React.useEffect(() => {
    fetchBookDetails();
    if (user) {
      fetchUserBooks();
    }
  }, [id, user]);

  const fetchBookDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/books/${id}`);
      setBook(response.data);
    } catch (err) {
      setError('Failed to fetch book details');
    } finally {
      setLoading(false);
    }
  };

  const fetchUserBooks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/books/user');
      setUserBooks(response.data);
    } catch (err) {
      console.error('Failed to fetch user books:', err);
    }
  };

  const handleSwapRequest = async (e) => {
    e.preventDefault();
    if (!user) {
      navigate('/login');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/swaps', {
        requestedBookId: id,
        offeredBookId: selectedBook,
        message: 'I would like to swap books with you!'
      });
      setSwapStatus('success');
    } catch (err) {
      setSwapStatus('error');
      setError(err.response?.data?.message || t('bookDetails.swapError'));
    }
  };

  if (loading) {
    return <div className="loading">{t('bookDetails.loading')}</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!book) {
    return <div className="error-message">{t('bookDetails.notFound')}</div>;
  }

  return (
    <div className="book-details-container">
      <div className="book-details">
        <div className="book-image">
          <img src={`http://localhost:5000/${book.image}`} alt={book.title} />
        </div>
        <div className="book-info">
          <h1>{book.title}</h1>
          <p className="author">{t('bookDetails.by')} {book.author}</p>
          <div className="book-meta">
            <span className="genre">{t('bookDetails.genre')}: {book.genre}</span>
            <span className="condition">{t('bookDetails.condition')}: {book.condition}</span>
            <span className="language">{t('bookDetails.language')}: {book.language}</span>
          </div>
          <div className="description">
            <h2>{t('bookDetails.description')}</h2>
            <p>{book.description}</p>
          </div>
          <div className="owner-info">
            <h2>{t('bookDetails.bookOwner')}</h2>
            <p>{book.owner.name}</p>
          </div>

          {user && user._id !== book.owner._id && book.isAvailable && (
            <div className="swap-section">
              <h2>{t('bookDetails.requestSwap')}</h2>
              <form onSubmit={handleSwapRequest}>
                <div className="form-group">
                  <label htmlFor="offeredBook">{t('bookDetails.selectBook')}:</label>
                  <select
                    id="offeredBook"
                    value={selectedBook}
                    onChange={(e) => setSelectedBook(e.target.value)}
                    required
                  >
                    <option value="">{t('bookDetails.selectBook')}</option>
                    {userBooks.map(book => (
                      <option key={book._id} value={book._id}>
                        {book.title}
                      </option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="swap-button">{t('bookDetails.requestSwap')}</button>
              </form>
              {swapStatus === 'success' && (
                <div className="success-message">
                  {t('bookDetails.swapSuccess')}
                </div>
              )}
              {swapStatus === 'error' && (
                <div className="error-message">{error}</div>
              )}
            </div>
          )}
          {!user && (
            <p className="login-message">{t('bookDetails.loginToSwap')}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
