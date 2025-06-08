import React, { useState } from 'react';
import axios from 'axios';
import { useTranslation } from '../../hooks/useTranslation';
import './UpdateBookModal.css';

const UpdateBookModal = ({ book, onClose, onBookUpdated }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    title: book.title,
    author: book.author,
    condition: book.condition,
    genre: book.genre,
    description: book.description,
    image: null
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const conditions = ['New', 'Like New', 'Very Good', 'Good', 'Acceptable'];
  const genres = [
    'Fiction', 'Non-Fiction', 'Science Fiction', 'Mystery', 
    'Romance', 'Biography', 'History', 'Science', 'Technology',
    'Self-Help', 'Children', 'Poetry', 'Religion', 'Philosophy'
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData(prev => ({
        ...prev,
        image: files[0]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        if (formData[key] !== null) {
          formDataToSend.append(key, formData[key]);
        }
      });

      const response = await axios.put(
        `http://localhost:5000/api/books/${book._id}`,
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );

      onBookUpdated(response.data);
      onClose();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update book');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{t('book.updateBook')}</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">{t('book.title')}</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="author">{t('book.author')}</label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="condition">{t('book.condition')}</label>
            <select
              id="condition"
              name="condition"
              value={formData.condition}
              onChange={handleChange}
              required
            >
              {conditions.map(condition => (
                <option key={condition} value={condition}>
                  {condition}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="genre">{t('book.genre')}</label>
            <select
              id="genre"
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              required
            >
              {genres.map(genre => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="description">{t('book.description')}</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="image">{t('book.newImage')}</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleChange}
              accept="image/*"
            />
          </div>

          <div className="modal-actions">
            <button type="button" onClick={onClose} className="cancel-button">
              {t('common.cancel')}
            </button>
            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? t('common.updating') : t('common.update')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBookModal;
