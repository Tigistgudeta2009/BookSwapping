import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from '../../hooks/useTranslation';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">{t('common.logo')}</Link>
      </div>
      <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/">{t('common.home')}</Link>
        <Link to="/browse">{t('common.browse')}</Link>
        <Link to="/about">{t('common.about')}</Link>
        <Link to="/how-it-works">{t('common.howItWorks')}</Link>
        <Link to="/contact">{t('common.contact')}</Link>
        {user ? (
          <div className="account-dropdown">
            <button className="account-button">
              Account
            </button>
            <div className="dropdown-menu">
              <Link to="/profile">{t('common.profile')}</Link>
              <button onClick={handleLogout}>
                {t('common.logout')}
              </button>
            </div>
          </div>
        ) : (
          <>
            <Link to="/login">{t('common.login')}</Link>
            <Link to="/register">{t('common.register')}</Link>
          </>
        )}
        <select 
          value={language} 
          onChange={(e) => setLanguage(e.target.value)}
          className="language-selector"
        >
          <option value="english">English</option>
          <option value="amharic">አማርኛ</option>
        </select>
      </nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        <span className="menu-icon"></span>
      </button>
    </header>
  );
};

export default Header;
