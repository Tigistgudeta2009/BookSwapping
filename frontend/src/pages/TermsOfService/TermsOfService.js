import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import './TermsOfService.css';

const TermsOfService = () => {
  const { t } = useTranslation();

  const termsData = [
    {
      title: t('termsOfService.account.title'),
      content: t('termsOfService.account.description')
    },
    {
      title: t('termsOfService.bookSwapping.title'),
      content: t('termsOfService.bookSwapping.description')
    },
    {
      title: t('termsOfService.userResponsibilities.title'),
      content: t('termsOfService.userResponsibilities.description')
    },
    {
      title: t('termsOfService.intellectualProperty.title'),
      content: t('termsOfService.intellectualProperty.description')
    },
    {
      title: t('termsOfService.limitation.title'),
      content: t('termsOfService.limitation.description')
    }
  ];

  return (
    <div className="terms-of-service-container">
      <h1>{t('termsOfService.title')}</h1>
      <p className="terms-intro">{t('termsOfService.lastUpdated')}</p>

      <div className="terms-sections">
        {termsData.map((section, index) => (
          <div key={index} className="terms-section">
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </div>
        ))}
      </div>

      <div className="terms-contact">
        <h2>{t('termsOfService.questions.title')}</h2>
        <p>{t('termsOfService.questions.description')}</p>
        <a href="mailto:legal@tebebbookswap.com" className="contact-email">
          {t('termsOfService.questions.email')}
        </a>
      </div>
    </div>
  );
};

export default TermsOfService;
