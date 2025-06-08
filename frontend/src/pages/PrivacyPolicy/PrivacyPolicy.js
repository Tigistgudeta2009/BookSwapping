import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  const sections = t('privacyPolicy.sections', { returnObjects: true });

  return (
    <div className="privacy-policy-container">
      <h1>{t('privacyPolicy.title')}</h1>
      <p className="privacy-intro">{t('privacyPolicy.lastUpdated')}</p>

      <div className="privacy-sections">
        {sections.map((section, index) => (
          <div key={index} className="privacy-section">
            <h2>{section.title}</h2>
            <p>{section.description}</p>
          </div>
        ))}
      </div>

      <div className="privacy-contact">
        <h2>{t('privacyPolicy.contactInfo.title')}</h2>
        <a href={`mailto:${t('privacyPolicy.contactInfo.email')}`} className="contact-email">
          {t('privacyPolicy.contactInfo.email')}
        </a>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
