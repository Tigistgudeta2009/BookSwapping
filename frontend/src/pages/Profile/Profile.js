import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import { useTranslation } from '../../hooks/useTranslation';
import AddBookModal from '../../components/AddBookModal/AddBookModal';
import UpdateBookModal from '../../components/UpdateBookModal/UpdateBookModal';
import SwapRequestCard from '../../components/SwapRequestCard/SwapRequestCard';
import './Profile.css';

const Profile = () => {
  const { user } = useAuth();
  const { t } = useTranslation();
  const [userBooks, setUserBooks] = useState([]);
  const [swapRequests, setSwapRequests] = useState([]);
  const [activeTab, setActiveTab] = useState('books');
  const [showAddBookModal, setShowAddBookModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const [booksResponse, swapsResponse] = await Promise.all([
        axios.get('http://localhost:5000/api/books/user'),
        axios.get('http://localhost:5000/api/swaps')
      ]);
      setUserBooks(booksResponse.data);
      setSwapRequests(swapsResponse.data);
      setError('');
    } catch (err) {
      setError(t('profile.error.fetchData'));
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteBook = async (bookId) => {
    try {
      await axios.delete(`http://localhost:5000/api/books/${bookId}`);
      setUserBooks(books => books.filter(book => book._id !== bookId));
    } catch (err) {
      setError(t('profile.error.deleteBook'));
    }
  };

  const handleBookAdded = (newBook) => {
    setUserBooks(prev => [...prev, newBook]);
    setShowAddBookModal(false);
  };

  const handleSwapResponse = async (swapId, status) => {
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      };

      await axios.put(
        `http://localhost:5000/api/swaps/${swapId}/respond`,
        { status },
        config
      );

      setSwapRequests(requests =>
        requests.map(req =>
          req._id === swapId ? { ...req, status } : req
        )
      );

      await fetchUserData();
      setError('');
    } catch (err) {
      console.error('Swap response error:', err.response?.data?.message || err.message);
      setError(t('profile.error.updateSwap'));
    }
  };

  const handleUpdateBook = (book) => {
    setSelectedBook(book);
  };

  const handleBookUpdated = (updatedBook) => {
    setUserBooks(books =>
      books.map(book =>
        book._id === updatedBook._id ? updatedBook : book
      )
    );
    setSelectedBook(null);
  };

  if (loading) return <div className="loading">{t('common.loading')}</div>;

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="user-info">
          <h1>{t('profile.welcome')}, {user.name}!</h1>
          <p>{t('profile.email')}: {user.email}</p>
        </div>
        <button
          className="add-book-button"
          onClick={() => setShowAddBookModal(true)}
        >
          {t('profile.addNewBook')}
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="profile-tabs">
        <button
          className={`tab-button ${activeTab === 'books' ? 'active' : ''}`}
          onClick={() => setActiveTab('books')}
        >
          {t('profile.myBooks')}
        </button>
        <button
          className={`tab-button ${activeTab === 'swaps' ? 'active' : ''}`}
          onClick={() => setActiveTab('swaps')}
        >
          {t('profile.swapRequests')}
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'books' && (
          <div className="books-grid">
            {userBooks.length > 0 ? (
              userBooks.map(book => (
                <div key={book._id} className="book-card">
                  <div className="book-image">
                    <img src={`http://localhost:5000/${book.image}`} alt={book.title} />
                  </div>
                  <div className="book-info">
                    <h3>{book.title}</h3>
                    <p className="author">{t('book.author')}: {book.author}</p>
                    <p className="condition">{t('book.condition')}: {book.condition}</p>
                    <div className="book-actions">
                      <button
                        className="update-button"
                        onClick={() => handleUpdateBook(book)}
                      >
                        {t('common.update')}
                      </button>
                      <button
                        className="delete-button"
                        onClick={() => handleDeleteBook(book._id)}
                      >
                        {t('common.delete')}
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-books">
                <p>{t('profile.noBooks')}</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'swaps' && (
          <div className="swaps-grid">
            {swapRequests.length > 0 ? (
              swapRequests.map(swap => (
                <SwapRequestCard
                  key={swap._id}
                  swap={swap}
                  onRespond={handleSwapResponse}
                />
              ))
            ) : (
              <div className="no-swaps">
                <p>{t('profile.noRequests')}</p>
              </div>
            )}
          </div>
        )}
      </div>

      {showAddBookModal && (
        <AddBookModal
          onClose={() => setShowAddBookModal(false)}
          onBookAdded={handleBookAdded}
        />
      )}

      {selectedBook && (
        <UpdateBookModal
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
          onBookUpdated={handleBookUpdated}
        />
      )}
    </div>
  );
};

export default Profile;
