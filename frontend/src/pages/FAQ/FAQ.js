import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import './FAQ.css';

const FAQ = () => {
  const { t } = useTranslation();

  const faqData = [
    {
      question: t('faq.howDoesBookSwapWork.question'),
      answer: t('faq.howDoesBookSwapWork.answer')
    },
    {
      question: t('faq.isFree.question'),
      answer: t('faq.isFree.answer')
    },
    {
      question: t('faq.howToStartSwapping.question'),
      answer: t('faq.howToStartSwapping.answer')
    },
    {
      question: t('faq.safetyMeasures.question'),
      answer: t('faq.safetyMeasures.answer')
    },
    {
      question: t('faq.whatBooksCanISwap.question'),
      answer: t('faq.whatBooksCanISwap.answer')
    }
  ];

  return (
    <div className="faq-container">
      <h1>{t('faq.title')}</h1>
      <p className="faq-intro">{t('faq.subtitle')}</p>
      
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <h3 className="faq-question">{item.question}</h3>
            <p className="faq-answer">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
