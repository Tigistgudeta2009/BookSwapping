import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import './TermsAndConditions.css';

const TermsAndConditions = () => {
  const { t } = useTranslation();

  const termsData = [
    {
      title: t('termsAndConditions.account.title'),
      content: t('termsAndConditions.account.description')
    },
    {
      title: t('termsAndConditions.bookSwapping.title'),
      content: t('termsAndConditions.bookSwapping.description')
    },
    {
      title: t('termsAndConditions.userResponsibilities.title'),
      content: t('termsAndConditions.userResponsibilities.description')
    },
    {
      title: t('termsAndConditions.intellectualProperty.title'),
      content: t('termsAndConditions.intellectualProperty.description')
    },
    {
      title: t('termsAndConditions.limitation.title'),
      content: t('termsAndConditions.limitation.description')
    }
  ];

  return (
    <div className="terms-and-conditions-container">
      <h1>{t('termsAndConditions.title')}</h1>
      <p className="terms-intro">{t('termsAndConditions.lastUpdated')}</p>

      <div className="terms-sections">
        {termsData.map((section, index) => (
          <div key={index} className="terms-section">
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </div>
        ))}
      </div>

      <div className="terms-contact">
        <h2>{t('termsAndConditions.questions.title')}</h2>
        <p>{t('termsAndConditions.questions.description')}</p>
        <a href={`mailto:${t('termsAndConditions.questions.email')}`} className="contact-email">
          {t('termsAndConditions.questions.email')}
        </a>
      </div>
    </div>
  );
};

export default TermsAndConditions;
