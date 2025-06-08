import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
import './HowItWorks.css';

const HowItWorks = () => {
  const { t } = useTranslation();

  return (
    <div className="how-it-works-container">
      <div className="hero-section">
        <h1>{t('howItWorks.title')}</h1>
        <p>{t('howItWorks.subtitle')}</p>
      </div>

      <div className="steps-section">
        <div className="step-card">
          <div className="step-number">1</div>
          <h2>{t('howItWorks.steps.createAccount.title')}</h2>
          <p>{t('howItWorks.steps.createAccount.description')}</p>
          <Link to="/register" className="action-button">
            {t('howItWorks.steps.createAccount.button')}
          </Link>
        </div>

        <div className="step-card">
          <div className="step-number">2</div>
          <h2>{t('howItWorks.steps.listBooks.title')}</h2>
          <p>{t('howItWorks.steps.listBooks.description')}</p>
          <Link to="/profile" className="action-button">
            {t('howItWorks.steps.listBooks.button')}
          </Link>
        </div>

        <div className="step-card">
          <div className="step-number">3</div>
          <h2>{t('howItWorks.steps.browseBooks.title')}</h2>
          <p>{t('howItWorks.steps.browseBooks.description')}</p>
          <Link to="/browse" className="action-button">
            {t('howItWorks.steps.browseBooks.button')}
          </Link>
        </div>

        <div className="step-card">
          <div className="step-number">4</div>
          <h2>{t('howItWorks.steps.requestSwap.title')}</h2>
          <p>{t('howItWorks.steps.requestSwap.description')}</p>
        </div>

        <div className="step-card">
          <div className="step-number">5</div>
          <h2>{t('howItWorks.steps.arrangeExchange.title')}</h2>
          <p>{t('howItWorks.steps.arrangeExchange.description')}</p>
        </div>
      </div>

      <div className="tips-section">
        <h2>{t('howItWorks.tips.title')}</h2>
        <div className="tips-grid">
          {t('howItWorks.tips.items', { returnObjects: true }).map((tip, index) => (
            <div key={index} className="tip-card">
              <h3>{tip.title}</h3>
              <p>{tip.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="faq-section">
        <h2>{t('howItWorks.faq.title')}</h2>
        <div className="faq-grid">
          {t('howItWorks.faq.items', { returnObjects: true }).map((faq, index) => (
            <div key={index} className="faq-card">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="get-started-section">
        <h2>{t('howItWorks.cta.title')}</h2>
        <p>{t('howItWorks.cta.description')}</p>
        <Link to="/register" className="cta-button">
          {t('howItWorks.cta.button')}
        </Link>
      </div>
    </div>
  );
};

export default HowItWorks;
