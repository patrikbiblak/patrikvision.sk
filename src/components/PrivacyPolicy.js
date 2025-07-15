import '../styles/privacypolicy.css';

const PrivacyPolicy = () => {
  const openCookieSettingsModal = () => {
    const btn = document.querySelector('.cookie-settings-button');
    if (btn) btn.click();
  };

  return (
    <div className="privacy-policy container">
      <h1>Zásady ochrany osobných údajov a súborov cookie</h1>
      <p><strong>Dátum účinnosti:</strong> 13. júla 2025</p>

      <article>
        <h2>Prevádzkovateľ a spracovatelia</h2>
        <p>
          Prevádzkovateľ: PatrikVision (Man Revolution s.r.o.), IČO: 12345678, 
          email: info@patrikvision.sk.  
          Spracovatelia: Vercel (hosting), Netlify (CDN), Google (Analytika), Meta (Pixel), 
          SendGrid (email marketing).
        </p>
      </article>

      <article>
        <h2>Aké údaje zhromažďujeme</h2>
        <ul>
          <li><strong>Kontaktné údaje</strong> – meno, e‑mail, správy z formulára.</li>
          <li><strong>Technické údaje</strong> – IP, typ prehliadača, zariadenie (Google Analytics).</li>
          <li><strong>Interakčné údaje</strong> – anonymné štatistiky, marketingové dáta (Meta Pixel).</li>
        </ul>
      </article>

      <article>
        <h2>Právny základ a účel spracovania</h2>
        <ul>
          <li><strong>Súhlas</strong> – marketingové a analytické nástroje.</li>
          <li><strong>Oprávnený záujem</strong> – zlepšovanie webu a prevádzková štatistika.</li>
          <li><strong>Zmluvný vzťah</strong> – poskytovanie objednaných služieb.</li>
        </ul>
      </article>

      <article>
        <h2>Doba uchovávania</h2>
        <ul>
          <li>Google Analytics: 14 mesiacov</li>
          <li>Meta Pixel: 180 dní</li>
          <li>Kontaktné formuláre: do vymazania používateľom alebo 3 roky</li>
        </ul>
      </article>

      <article>
        <h2>Prenosy do tretích krajín</h2>
        <p>
          Údaje neprevádzajú do krajín mimo EÚ alebo EHP. Ak by k prenosu došlo, zabezpečíme 
          štandardné zmluvné doložky EÚ.
        </p>
      </article>

      <article>
        <h2>Automatizované rozhodovanie a profilovanie</h2>
        <p>
          Nevykonávame žiadne automatizované rozhodovanie ani profilovanie, ktoré by malo 
          právne účinky na dotknuté osoby.
        </p>
      </article>

      <article>
        <h2>ráva dotknutých osôb</h2>
        <ul>
          <li>Právo na prístup, opravu, vymazanie („byť zabudnutý“), obmedzenie spracovania.</li>
          <li>Právo namietať proti spracovaniu.</li>
          <li>Právo na prenositeľnosť údajov.</li>
          <li>Právo odvolať súhlas kedykoľvek (<button onClick={openCookieSettingsModal}>Zmeniť nastavenia cookies</button>).</li>
          <li>Právo podať sťažnosť Úradu na ochranu osobných údajov (<a href="https://dataprotection.gov.sk" target="_blank" rel="noopener noreferrer">link</a>).</li>
        </ul>
      </article>

      <article>
        <h2>Kontakt</h2>
        <p>
          V prípade otázok píšte na info@patrikvision.sk alebo použite <a href="/contact">kontaktný formulár</a>.
        </p>
      </article>
    </div>
  );
};

export default PrivacyPolicy;