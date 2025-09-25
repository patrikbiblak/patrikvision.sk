import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/maintenance.css';

const Maintenance = ({ className = '' }) => {
  const { t } = useTranslation();

  return (
    <div className={`maintenance-container ${className}`}>
      <div className="maintenance-content">
        <div className="maintenance-icon" role="img" aria-label="Maintenance icon">
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path 
              d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" 
              fill="currentColor"
            />
            <path 
              d="M19 15L20.5 16.5L19 18L17.5 16.5L19 15Z" 
              fill="currentColor"
            />
            <path 
              d="M5 15L6.5 16.5L5 18L3.5 16.5L5 15Z" 
              fill="currentColor"
            />
            <path 
              d="M12 7L13.5 8.5L12 10L10.5 8.5L12 7Z" 
              fill="currentColor"
            />
          </svg>
        </div>
        
        <h1 className="maintenance-title">
          {t('maintenance.title', 'Under Maintenance')}
        </h1>
        
        <p className="maintenance-message">
          {t('maintenance.message', 'This section is currently under maintenance. Please check back later.')}
        </p>
        
        <div className="maintenance-suggestions">
          <p className="maintenance-suggestion">
            {t('maintenance.suggestion1', 'While you wait, you can:')}
          </p>
          <ul className="maintenance-list">
            <li>{t('maintenance.suggestion2', 'Explore other sections of the website')}</li>
            <li>{t('maintenance.suggestion3', 'Contact us for more information')}</li>
            <li>{t('maintenance.suggestion4', 'Check back later for updates')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
