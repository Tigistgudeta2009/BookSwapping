import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

// Debug: Log icons to console
console.log('Facebook Icon:', faFacebook);
console.log('Twitter Icon:', faTwitter);
console.log('Instagram Icon:', faInstagram);
console.log('LinkedIn Icon:', faLinkedin);

const Footer = () => {
  const { t } = useTranslation();
  const [email, setEmail] = React.useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Tebeb BookSwap</h3>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder={t('footer.emailPlaceholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleSubscribe}>{t('footer.subscribe')}</button>
          </div>
        </div>

        <div className="footer-section">
          <h3>{t('footer.quickLinks')}</h3>
          <ul>
            <li><Link to="/">{t('common.home')}</Link></li>
            <li><Link to="/browse">{t('common.browse')}</Link></li>
            <li><Link to="/about">{t('common.about')}</Link></li>
            <li><Link to="/how-it-works">{t('common.howItWorks')}</Link></li>
            <li><Link to="/contact">{t('common.contact')}</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>{t('footer.community')}</h3>
          <ul>
            <li><Link to="/book-swap-forum">{t('footer.bookSwapForum')}</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>{t('footer.support')}</h3>
          <ul>
            <li><Link to="/faq">{t('footer.faqNew')}</Link></li>
            <li><Link to="/help-center">{t('footer.help')}</Link></li>
            <li><Link to="/terms-and-conditions">{t('footer.terms')}</Link></li>
            <li><Link to="/privacy-policy">{t('footer.privacy')}</Link></li>
          </ul>
          <div className="social-links">
            <a href="https://facebook.com/tebebbookswap" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="social-icon facebook-icon" />
            </a>
            <a href="https://twitter.com/tebebbookswap" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="social-icon twitter-icon" />
            </a>
            <a href="https://instagram.com/tebebbookswap" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="social-icon instagram-icon" />
            </a>
            <a href="https://linkedin.com/company/tebebbookswap" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="social-icon linkedin-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>{t('footer.copyright')}</p>
      </div>
    </footer>
  );
};

export default Footer;
