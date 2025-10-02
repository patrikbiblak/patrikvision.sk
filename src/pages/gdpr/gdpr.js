import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import './gdpr.css';

const Gdpr = () => {
  const { t } = useTranslation();
  
  const openCookieSettingsModal = () => {
    const btn = document.querySelector('.cookie-settings-button');
    if (btn) btn.click();
  };

  return (
    <div className="privacy-policy container">
      <Helmet>
        <title>{t('seo.privacy.title')} | PatrikVision</title>
        <meta name="description" content={t('seo.privacy.description')} />
        <meta name="keywords" content={t('seo.privacy.keywords')} />
        <meta name="author" content="PatrikVision" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://patrikvision.sk/gdpr" />
        <meta property="og:title" content={t('seo.privacy.title')} />
        <meta property="og:description" content={t('seo.privacy.description')} />
        <meta property="og:image" content="https://patrikvision.sk/images/PatrikVision.png" />
        <meta property="og:site_name" content="PatrikVision" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://patrikvision.sk/gdpr" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('seo.privacy.title')} />
        <meta name="twitter:description" content={t('seo.privacy.description')} />
        <meta name="twitter:image" content="https://patrikvision.sk/images/PatrikVision.png" />
        <meta name="twitter:site" content="@patrikvision" />
        <meta name="twitter:creator" content="@patrikvision" />
        <link rel="alternate" hreflang="en" href="https://patrikvision.sk/gdpr" />
        <link rel="alternate" hreflang="sk" href="https://patrikvision.sk/gdpr" />
        <link rel="alternate" hreflang="hu" href="https://patrikvision.sk/gdpr" />
      </Helmet>
      <h1>{t('privacy.title')}</h1>
      <p><strong>{t('privacy.effectiveDate')}</strong> {t('privacy.date')}</p>

      <article>
        <h2>{t('privacy.operator')}</h2>
        <div dangerouslySetInnerHTML={{ __html: t('privacy.operatorText') }} />
      </article>

      <article>
        <h2>{t('privacy.dataCollected')}</h2>
        <ul>
          <li>{t('privacy.contactData')}</li>
          <li>{t('privacy.technicalData')}</li>
          <li>{t('privacy.interactionData')}</li>
        </ul>
      </article>

      <article>
        <h2>{t('privacy.legalBasis')}</h2>
        <ul>
          <li>{t('privacy.consent')}</li>
          <li>{t('privacy.legitimateInterest')}</li>
          <li>{t('privacy.contractual')}</li>
        </ul>
      </article>

      <article>
        <h2>{t('privacy.retentionPeriod')}</h2>
        <ul>
          <li>{t('privacy.googleAnalytics')}</li>
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

export default Gdpr;


