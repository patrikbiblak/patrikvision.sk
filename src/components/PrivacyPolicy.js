import React from 'react';
import '../styles/privacypolicy.css'

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy">
            <h2>Zásady ochrany osobných údajov a súborov cookie</h2>

            <section className="privacy-section">
                <h3>1. Zásady ochrany osobných údajov</h3>
                <p>
                    Pod osobnými údajmi rozumieme informácie, ktoré môžu identifikovať jednotlivca, ako sú meno, e-mailová adresa, telefónne číslo a podobne.
                </p>

                <h4>Účel zberu osobných údajov</h4>
                <p>
                    Osobné údaje zhromažďujeme za účelom komunikácie s našimi návštevníkmi, zasielania relevantných informácií a vybavovania požiadaviek našich služieb.
                </p>

                <h4>Spracovanie osobných údajov</h4>
                <p>
                    Osobné údaje sú spracovávané iba v rozsahu nevyhnutnom na dosiahnutie uvedených účelov. Zabezpečujeme primerané opatrenia na ochranu osobných údajov pred neoprávneným prístupom alebo zneužitím.
                </p>

                <h4>Zdieľanie osobných údajov</h4>
                <p>
                    Osobné údaje môžu byť zdieľané iba s našimi dôveryhodnými partnermi alebo poskytovateľmi služieb, ktorí sú viazaní na ochranu údajov v súlade s platnými právnymi predpismi.
                </p>

                <h4>Práva návštevníkov</h4>
                <ul>
                    <li>Právo na prístup k osobným údajom</li>
                    <li>Právo na opravu nepresných údajov</li>
                    <li>Právo na vymazanie údajov ("právo na zabudnutie")</li>
                    <li>Právo na obmedzenie spracovania údajov</li>
                    <li>Právo na prenosnosť údajov</li>
                </ul>
            </section>

            <section className="cookie-section">
                <h3>2. Súbory cookie</h3>

                <h4>Definícia súborov cookie</h4>
                <p>
                    Súbory cookie sú malé textové súbory, ktoré webová stránka ukladá na zariadenie používateľa. Môžu byť použité na sledovanie správania používateľov, zlepšenie používateľského zážitku alebo na reklamné účely.
                </p>

                <h4>Typy súborov cookie</h4>
                <ul>
                    <li>Súbor cookie nevyhnutný pre fungovanie stránky</li>
                    <li>Súbor cookie na sledovanie správania a analýzu</li>
                    <li>Súbor cookie pre personalizáciu obsahu a reklamy</li>
                </ul>

                <h4>Súhlas s používaním súborov cookie</h4>
                <p>
                    Používanie väčšiny typov súborov cookie vyžaduje súhlas používateľa. Používatelia by mali mať možnosť súhlasiť alebo odmietnuť použitie súborov cookie cez nastavenia svojho prehliadača alebo prostredníctvom informačného banneru na stránke.
                </p>

                <h4>Informácie o súboroch cookie</h4>
                <p>
                    Stránka by mala jasne informovať o tom, aké súbory cookie používa, na aký účel a ako používatelia môžu riadiť ich používanie.
                </p>
            </section>
        </div>
    );
}

export default PrivacyPolicy;
