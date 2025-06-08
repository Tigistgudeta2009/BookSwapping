import React, { useState } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import './BookSwapForum.css';

const BookSwapForum = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('general');

  const forumCategories = [
    { 
      id: 'general', 
      title: t('bookSwapForum.categories.general.title'),
      description: t('bookSwapForum.categories.general.description')
    },
    { 
      id: 'recommendations', 
      title: t('bookSwapForum.categories.recommendations.title'),
      description: t('bookSwapForum.categories.recommendations.description')
    },
    { 
      id: 'swapTips', 
      title: t('bookSwapForum.categories.swapTips.title'),
      description: t('bookSwapForum.categories.swapTips.description')
    }
  ];

  const forumPosts = {
    general: [
      {
        title: t('bookSwapForum.posts.general.1.title'),
        author: t('bookSwapForum.posts.general.1.author'),
        excerpt: t('bookSwapForum.posts.general.1.excerpt')
      },
      {
        title: t('bookSwapForum.posts.general.2.title'),
        author: t('bookSwapForum.posts.general.2.author'),
        excerpt: t('bookSwapForum.posts.general.2.excerpt')
      }
    ],
    recommendations: [
      {
        title: t('bookSwapForum.posts.recommendations.1.title'),
        author: t('bookSwapForum.posts.recommendations.1.author'),
        excerpt: t('bookSwapForum.posts.recommendations.1.excerpt')
      },
      {
        title: t('bookSwapForum.posts.recommendations.2.title'),
        author: t('bookSwapForum.posts.recommendations.2.author'),
        excerpt: t('bookSwapForum.posts.recommendations.2.excerpt')
      }
    ],
    swapTips: [
      {
        title: t('bookSwapForum.posts.swapTips.1.title'),
        author: t('bookSwapForum.posts.swapTips.1.author'),
        excerpt: t('bookSwapForum.posts.swapTips.1.excerpt')
      },
      {
        title: t('bookSwapForum.posts.swapTips.2.title'),
        author: t('bookSwapForum.posts.swapTips.2.author'),
        excerpt: t('bookSwapForum.posts.swapTips.2.excerpt')
      }
    ]
  };

  return (
    <div className="book-swap-forum-container">
      <h1>{t('bookSwapForum.title')}</h1>
      <p className="forum-description">{t('bookSwapForum.subtitle')}</p>

      <div className="forum-categories">
        {forumCategories.map(category => (
          <button 
            key={category.id}
            className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.title}
          </button>
        ))}
      </div>

      <div className="forum-posts">
        {forumPosts[activeCategory].map((post, index) => (
          <div key={index} className="forum-post">
            <h3>{post.title}</h3>
            <p className="post-author">{post.author}</p>
            <p className="post-excerpt">{post.excerpt}</p>
            <button className="read-more-btn">{t('bookSwapForum.readMore')}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookSwapForum;
