import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
import './Browse.css';

const Browse = () => {
  const { t } = useTranslation();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState({
    search: '',
    genre: '',
    condition: ''
  });

  const genres = [
    'Fiction', 'Non-Fiction', 'Science Fiction', 'Mystery', 
    'Romance', 'Biography', 'History', 'Science', 'Technology',
    'Self-Help', 'Children', 'Poetry', 'Religion', 'Philosophy'
  ];

  const conditions = ['New', 'Like New', 'Very Good', 'Good', 'Acceptable'];

  React.useEffect(() => {
    fetchBooks();
  }, [filters]);

  const fetchBooks = async () => {
    try {
      const params = new URLSearchParams();
      if (filters.search) params.append('search', filters.search);
      if (filters.genre) params.append('genre', filters.genre);
      if (filters.condition) params.append('condition', filters.condition);

      const response = await axios.get(`http://localhost:5000/api/books?${params}`);
      setBooks(response.data);
      setError('');
    } catch (err) {
      setError(t('browse.error'));
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchBooks();
  };

  if (loading) return <div className="loading">{t('common.loading')}</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="browse-container">
      <div className="browse-header">
        <h1>{t('browse.title')}</h1>
        <p>{t('browse.findYourNextGreatRead')}</p>
      </div>

      <div className="filters-section">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            name="search"
            value={filters.search}
            onChange={handleFilterChange}
            placeholder={t('browse.searchPlaceholder')}
            className="search-input"
          />
          <select
            name="genre"
            value={filters.genre}
            onChange={handleFilterChange}
            className="filter-select"
          >
            <option value="">{t('browse.genre')}</option>
            {genres.map(genre => (
              <option key={genre} value={genre}>{genre}</option>
            ))}
          </select>
          <select
            name="condition"
            value={filters.condition}
            onChange={handleFilterChange}
            className="filter-select"
          >
            <option value="">{t('browse.condition')}</option>
            {conditions.map(condition => (
              <option key={condition} value={condition}>{condition}</option>
            ))}
          </select>
          <button type="submit" className="search-button">{t('browse.search')}</button>
        </form>
      </div>

      {books.length === 0 ? (
        <div className="no-books">
          <p>{t('browse.noResults')}</p>
        </div>
      ) : (
        <div className="books-grid">
          {books.map(book => (
            <div key={book._id} className="book-card">
              <div className="book-image-wrapper">
                <div className="book-image">
                  <img src={`http://localhost:5000/${book.image}`} alt={book.title} />
                </div>
                <div className="book-status">
                  <span className="status-badge">{book.status}</span>
                </div>
              </div>
              <div className="book-info">
                <h3 className="book-title">{book.title}</h3>
                <div className="book-details">
                  <p className="book-author">
                    <span className="label">{t('book.author')}:</span> {book.author}
                  </p>
                  <p className="book-condition">
                    <span className="label">{t('book.condition')}:</span> {book.condition}
                  </p>
                  <p className="book-owner">
                    <span className="label">{t('book.owner')}:</span> {book.owner.name}
                  </p>
                </div>
                <Link to={`/books/${book._id}`} className="view-details">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Browse;
