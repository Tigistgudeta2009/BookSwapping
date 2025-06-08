import React, { useState } from 'react';
import axios from 'axios';
import { useTranslation } from '../../hooks/useTranslation';
import './AddBookModal.css';

const AddBookModal = ({ onClose, onBookAdded }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    genre: '',
    condition: '',
    language: '',
    image: null
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const genres = [
    'Fiction', 'Non-Fiction', 'Science Fiction', 'Mystery', 
    'Romance', 'Biography', 'History', 'Science', 'Technology',
    'Self-Help', 'Children', 'Poetry', 'Religion', 'Philosophy'
  ];

  const conditions = ['New', 'Like New', 'Very Good', 'Good', 'Acceptable'];
  const languages = ['English', 'Amharic'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    setFormData(prev => ({
      ...prev,
      image: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        if (formData[key]) {
          formDataToSend.append(key, formData[key]);
        }
      });

      const response = await axios.post('http://localhost:5000/api/books', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      onBookAdded(response.data);
    } catch (err) {
      setError(t('addBook.error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{t('addBook.title')}</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">{t('addBook.bookTitle')}:</label>
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
            <label htmlFor="author">{t('addBook.author')}:</label>
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
            <label htmlFor="description">{t('addBook.description')}:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="genre">{t('addBook.genre')}:</label>
            <select
              id="genre"
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              required
            >
              <option value="">{t('common.select')}</option>
              {genres.map(genre => (
                <option key={genre} value={genre}>{genre}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="condition">{t('addBook.condition')}:</label>
            <select
              id="condition"
              name="condition"
              value={formData.condition}
              onChange={handleChange}
              required
            >
              <option value="">{t('common.select')}</option>
              {conditions.map(condition => (
                <option key={condition} value={condition}>{condition}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="language">{t('addBook.language')}:</label>
            <select
              id="language"
              name="language"
              value={formData.language}
              onChange={handleChange}
              required
            >
              <option value="">{t('common.select')}</option>
              {languages.map(language => (
                <option key={language} value={language}>{language}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="image">{t('addBook.image')}:</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
              accept="image/*"
              required
            />
          </div>

          <div className="modal-actions">
            <button type="button" onClick={onClose} className="cancel-button">
              {t('common.cancel')}
            </button>
            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? t('common.loading') : t('addBook.addBook')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBookModal;
