import React, { useState } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import './HelpCenter.css';

const HelpCenter = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState(null);

  const helpCategories = [
    {
      name: t('helpCenter.categories.accountManagement.title'),
      topics: [
        { title: t('helpCenter.categories.accountManagement.topics.resetPassword'), content: t('helpCenter.categories.accountManagement.topicDetails.resetPassword') },
        { title: t('helpCenter.categories.accountManagement.topics.updateProfile'), content: t('helpCenter.categories.accountManagement.topicDetails.updateProfile') }
      ]
    },
    {
      name: t('helpCenter.categories.bookSwapping.title'),
      topics: [
        { title: t('helpCenter.categories.bookSwapping.topics.howToSwap'), content: t('helpCenter.categories.bookSwapping.topicDetails.howToSwap') },
        { title: t('helpCenter.categories.bookSwapping.topics.swapRules'), content: t('helpCenter.categories.bookSwapping.topicDetails.swapRules') }
      ]
    },
    {
      name: t('helpCenter.categories.troubleshooting.title'),
      topics: [
        { title: t('helpCenter.categories.troubleshooting.topics.loginIssues'), content: t('helpCenter.categories.troubleshooting.topicDetails.loginIssues') },
        { title: t('helpCenter.categories.troubleshooting.topics.paymentProblems'), content: t('helpCenter.categories.troubleshooting.topicDetails.paymentProblems') }
      ]
    }
  ];

  return (
    <div className="help-center-container">
      <h1>{t('helpCenter.title')}</h1>
      <p className="help-center-intro">{t('helpCenter.subtitle')}</p>

      <div className="help-categories">
        {helpCategories.map((category, index) => (
          <div key={index} className="help-category">
            <h2 
              onClick={() => setActiveCategory(activeCategory === index ? null : index)}
              className={`category-title ${activeCategory === index ? 'active' : ''}`}
            >
              {category.name}
            </h2>
            {activeCategory === index && (
              <div className="category-topics">
                {category.topics.map((topic, topicIndex) => (
                  <div key={topicIndex} className="help-topic">
                    <h3>{topic.title}</h3>
                    <p>{topic.content}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="contact-support">
        <h2>{t('helpCenter.contactSupport.title')}</h2>
        <p>{t('helpCenter.contactSupport.description')}</p>
        <a href="mailto:support@tebebbookswap.com" className="contact-email">
          {t('helpCenter.contactSupport.email')}
        </a>
      </div>
    </div>
  );
};

export default HelpCenter;
