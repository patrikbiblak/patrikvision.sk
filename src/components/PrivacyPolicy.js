import React from 'react';
import '../styles/privacypolicy.css'

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy container">
      <h1>Zásady ochrany osobných údajov a súborov cookie</h1>
      <p className="effective-date"><strong>Dátum účinnosti:</strong> 13. júla 2025</p>

      <article>
        <h2>Úvod</h2>
        <p>
          Webová stránka <strong>PatrikVision</strong> rešpektuje vaše právo na ochranu súkromia. Tieto zásady
          vysvetľujú, aké údaje zhromažďujeme, ako ich používame a aké máte práva ako návštevník našej stránky.
        </p>
      </article>

      <article>
        <h2>Aké údaje zhromažďujeme</h2>
        <ul>
          <li><strong>Kontaktné údaje</strong> – meno, e-mail, správa</li>
          <li><strong>Technické údaje</strong> – IP adresa, prehliadač, zariadenie (v budúcnosti cez Google Analytics)</li>
          <li><strong>Údaje o interakcii</strong> – anonymné štatistiky a marketingové dáta (Meta Pixel)</li>
        </ul>
      </article>

      <article>
        <h2>Účel spracovania údajov</h2>
        <ul>
          <li>odpovedanie na správy cez formulár</li>
          <li>zlepšovanie funkčnosti a obsahu stránky</li>
          <li>marketingové a analytické účely (Meta Pixel, Google Analytics)</li>
        </ul>
      </article>

      <article>
        <h2>Právny základ spracovania</h2>
        <ul>
          <li>váš <strong>súhlas</strong></li>
          <li><strong>oprávnený záujem</strong> (napr. analýza návštevnosti)</li>
          <li><strong>zmluvný vzťah</strong> (pri objednávke služieb)</li>
        </ul>
      </article>

      <article>
        <h2>S kým údaje zdieľame</h2>
        <ul>
          <li>
            <strong>Meta (Facebook)</strong> – marketingové účely (<a href="https://www.facebook.com/policy.php" target="_blank" rel="noopener noreferrer">Zásady Facebooku</a>)
          </li>
          <li>
            <strong>Google</strong> – analytické účely (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Zásady Google</a>)
          </li>
        </ul>
      </article>

      <article>
        <h2>Súbory cookie</h2>
        <p>Táto stránka používa súbory cookie na zlepšenie používateľského zážitku, analytiku a marketing.</p>
        <ul>
          <li><strong>Nevyhnutné cookies</strong> – základné fungovanie stránky</li>
          <li><strong>Analytické cookies</strong> – štatistiky návštevnosti</li>
          <li><strong>Marketingové cookies</strong> – personalizovaná reklama (Meta Pixel)</li>
        </ul>
        <p>
          Pri prvej návšteve vás požiadame o súhlas. Nastavenia cookies môžete zmeniť vo svojom prehliadači.
        </p>
      </article>

      <article>
        <h2>Vaše práva podľa GDPR</h2>
        <ul>
          <li>právo na prístup k údajom</li>
          <li>právo na opravu</li>
          <li>právo na výmaz („byť zabudnutý“)</li>
          <li>právo na obmedzenie spracovania</li>
          <li>právo namietať</li>
          <li>právo podať sťažnosť – <a href="https://dataprotection.gov.sk" target="_blank" rel="noopener noreferrer">Úrad na ochranu osobných údajov</a></li>
        </ul>
      </article>

      <article>
        <h2>Kontakt</h2>
        <p>Ak máte otázky ohľadom ochrany údajov, kontaktujte nás cez kontaktný formulár na stránke PatrikVision.</p>
      </article>
    </div>
  );
};

export default PrivacyPolicy;
