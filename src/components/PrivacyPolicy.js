import { useTranslation } from '../contexts/TranslationContext';
import '../styles/privacypolicy.css';

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  
  const openCookieSettingsModal = () => {
    const btn = document.querySelector('.cookie-settings-button');
    if (btn) btn.click();
  };

  return (
    <div className="privacy-policy container">
      <h1>{t('privacy.title')}</h1>
      <p><strong>{t('privacy.effectiveDate')}</strong> {t('privacy.date')}</p>

      <article>
        <h2>{t('privacy.operator')}</h2>
        <p>
          {t('privacy.operatorText')}
        </p>
      </article>

      <article>
        <h2>{t('privacy.dataCollected')}</h2>
        <ul>
          <li><strong>{t('privacy.contactData')}</strong></li>
          <li><strong>{t('privacy.technicalData')}</strong></li>
          <li><strong>{t('privacy.interactionData')}</strong></li>
        </ul>
      </article>

      <article>
        <h2>{t('privacy.legalBasis')}</h2>
        <ul>
          <li><strong>{t('privacy.consent')}</strong></li>
          <li><strong>{t('privacy.legitimateInterest')}</strong></li>
          <li><strong>{t('privacy.contractual')}</strong></li>
        </ul>
      </article>

      <article>
        <h2>{t('privacy.retentionPeriod')}</h2>
        <ul>
          <li>{t('privacy.googleAnalytics')}</li>
          <li>{t('privacy.metaPixel')}</li>
          <li>{t('privacy.contactForms')}</li>
        </ul>
      </article>

      <article>
        <h2>{t('privacy.thirdCountryTransfers')}</h2>
        <p>
          {t('privacy.thirdCountryText')}
        </p>
      </article>

      <article>
        <h2>{t('privacy.automatedDecision')}</h2>
        <p>
          {t('privacy.automatedDecisionText')}
        </p>
      </article>

      <article>
        <h2>{t('privacy.dataSubjectRights')}</h2>
        <ul>
          <li>{t('privacy.accessRights')}</li>
          <li>{t('privacy.objectionRight')}</li>
          <li>{t('privacy.portabilityRight')}</li>
          <li>{t('privacy.withdrawConsent')} (<button onClick={openCookieSettingsModal}>{t('privacy.changeCookieSettings')}</button>).</li>
          <li>{t('privacy.complaintRight')} (<a href="https://dataprotection.gov.sk" target="_blank" rel="noopener noreferrer">link</a>).</li>
        </ul>
      </article>

      <article>
        <h2>{t('privacy.contact')}</h2>
        <p>
          {t('privacy.contactText')} <a href="/contact">{t('privacy.contactForm')}</a>.
        </p>
      </article>
    </div>
  );
};

export default PrivacyPolicy;