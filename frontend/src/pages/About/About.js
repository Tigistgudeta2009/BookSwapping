import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import './About.css';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about-container">
      <div className="about-header">
        <h1>{t('about.title')}</h1>
        <p>{t('about.subtitle')}</p>
      </div>

      <section className="about-mission">
        <h2>{t('about.mission.title')}</h2>
        <p>
          {t('about.mission.description')}
        </p>
      </section>

      <section className="about-vision">
        <div className="vision-grid">
          <div className="vision-item">
            <h3>{t('about.vision.community.title')}</h3>
            <p>
              {t('about.vision.community.description')}
            </p>
          </div>
          <div className="vision-item">
            <h3>{t('about.vision.sustainability.title')}</h3>
            <p>
              {t('about.vision.sustainability.description')}
            </p>
          </div>
          <div className="vision-item">
            <h3>{t('about.vision.culture.title')}</h3>
            <p>
              {t('about.vision.culture.description')}
            </p>
          </div>
        </div>
      </section>

      <section className="about-team">
        <h2>{t('about.team.title')}</h2>
        <p>
          {t('about.team.description')}
        </p>
        <div className="team-members">
          {t('about.team.members', { returnObjects: true }).map((member, index) => (
            <div key={index} className="team-member">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-join">
        <h2>{t('about.join.title')}</h2>
        <p>
          {t('about.join.description')}
        </p>
        <button className="join-button" onClick={() => window.location.href = '/register'}>
          {t('about.join.button')}
        </button>
      </section>
    </div>
  );
};

export default About;
