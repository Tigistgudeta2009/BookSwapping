import React, { useState } from 'react';
import axios from 'axios';
import { useTranslation } from '../../hooks/useTranslation';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });

    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      setStatus({
        type: 'success',
        message: t('contact.success')
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.response?.data?.message || t('contact.error')
      });
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>{t('contact.title')}</h1>
        <p>{t('contact.subtitle')}</p>

        {status.message && (
          <div className={`status-message ${status.type}`}>
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">{t('contact.form.name')}:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder={t('contact.form.namePlaceholder')}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">{t('contact.form.email')}:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder={t('contact.form.emailPlaceholder')}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">{t('contact.form.message')}:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder={t('contact.form.messagePlaceholder')}
              rows="5"
            />
          </div>

          <button type="submit" className="submit-button">
            {t('contact.form.submit')}
          </button>
        </form>

        <div className="contact-info">
          <h2>{t('contact.info.title')}</h2>
          <div className="contact-methods">
            <div className="contact-method">
              <h3>{t('contact.info.email.title')}</h3>
              <p>support@tebebbookswap.com</p>
            </div>
            <div className="contact-method">
              <h3>{t('contact.info.phone.title')}</h3>
              <p>+251 11 234 5678</p>
            </div>
            <div className="contact-method">
              <h3>{t('contact.info.address.title')}</h3>
              <p>Addis Ababa, Ethiopia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
