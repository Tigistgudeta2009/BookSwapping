import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faLeaf, faUsers } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

const Home = () => {
  const { t } = useTranslation();
  
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>{t('home.hero.title')}</h1>
          <p>{t('home.hero.subtitle')}</p>
          <div className="hero-buttons">
            <Link to="/register" className="btn btn-primary">{t('home.hero.signUp')}</Link>
            <Link to="/browse" className="btn btn-secondary">{t('home.hero.browseBooks')}</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="features-container">
          <h2 className="section-title">{t('home.features.title')}</h2>
          <div className="features-grid">
            <div className="feature-card">
              <FontAwesomeIcon icon={faWallet} className="feature-icon" />
              <h3>{t('home.features.saveMoney.title')}</h3>
              <p>{t('home.features.saveMoney.description')}</p>
            </div>
            <div className="feature-card">
              <FontAwesomeIcon icon={faLeaf} className="feature-icon" />
              <h3>{t('home.features.ecoFriendly.title')}</h3>
              <p>{t('home.features.ecoFriendly.description')}</p>
            </div>
            <div className="feature-card">
              <FontAwesomeIcon icon={faUsers} className="feature-icon" />
              <h3>{t('home.features.community.title')}</h3>
              <p>{t('home.features.community.description')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="features-container">
          <h2 className="section-title">{t('home.howItWorks.title')}</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>{t('home.howItWorks.steps.register.title')}</h3>
              <p>{t('home.howItWorks.steps.register.description')}</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>{t('home.howItWorks.steps.listBooks.title')}</h3>
              <p>{t('home.howItWorks.steps.listBooks.description')}</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>{t('home.howItWorks.steps.findMatch.title')}</h3>
              <p>{t('home.howItWorks.steps.findMatch.description')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
