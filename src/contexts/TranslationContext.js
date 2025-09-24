import React, { createContext, useContext, useState, useEffect } from 'react';

const TranslationContext = createContext();

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Check localStorage for saved language preference
    try {
      const savedLanguage = localStorage.getItem('language');
      return savedLanguage || 'en'; // Default to English
    } catch (error) {
      console.warn('localStorage not available, using default language');
      return 'en'; // Default to English if localStorage fails
    }
  });

  // Save language preference to localStorage when it changes
  useEffect(() => {
    try {
      localStorage.setItem('language', language);
    } catch (error) {
      console.warn('Could not save language preference to localStorage:', error);
    }
  }, [language]);

  const translations = {
    sk: {
      nav: {
        home: 'Domov',
        about: 'O mne',
        projects: 'Projekty',
        contact: 'Kontakt'
      },
      hero: {
        title: 'Navrhni. Postav. Vyvíjaj.',
        subtitle: 'Frontend Developer',
        description: 'Pretváram nápady na moderné a kreatívne webové stránky, ktoré vyniknú v digitálnom svete. Vytvorme spolu online zážitok, ktorý zaujme podľa vašich predstáv.'
      },
      about: {
        title: 'O Mne',
        subtitle: 'Frontend Developer',
        description: 'Som Front-End Developer s vášňou pre vytváranie krásnych a funkčných webových aplikácií. Špecializujem sa na React, JavaScript a moderné webové technológie.',
        skills: 'Zručnosti',
        experience: 'Skúsenosti',
        years: 'rokov skúseností',
        projects: 'dokončených projektov',
        clients: 'spokojných klientov',
        whoAmI: 'Kto <span>Som</span>',
        intro1: 'Som mladý a nadšený front-end developer ktorý kladie dôraz na transparentnú komunikáciu, dodržiavanie termínov a vysokú kvalitu.',
        intro2: 'Vytváram rýchle a responzívne webové stránky presne podľa vašich predstáv, ktoré plynulo fungujú na rôznych zariadeniach. Môžete sa na mňa spoľahnúť, že vaše nápady premením na pútavú online prezentáciu, ktorá osloví vašich návštevníkov.',
        intro3: 'Potrebujete niekoho, kto zvládne developerské šprinty? Ste na správnom mieste!',
        personal1: 'Káva, kód a disciplína tvoria môj dokonalý trojboj. Do každého projektu vkladám stovku percent, aby výsledok bežal hladko a bez bugov. Po práci ma šport udrží v kondícii a pomáha mi udržať si čistú myseľ.',
        hashtags: '#front-end &nbsp; #self-improvement &nbsp; #athlete',
        aboutMe: 'O Mne',
        desc1: 'Vytváram moderné webové aplikácie s dôrazom na funkčnosť a spoľahlivosť podľa presných požiadaviek klienta.',
        desc2: 'Počas vývoja udržiavam otvorenú komunikáciu, aby sme spoločne dolaďovali funkcie aj dizajn a zakomponovali všetky vaše predstavy.',
        desc3: 'Ponúkam tvorbu portfólií, blogov a firemných prezentácií, ktoré nielen esteticky zapôsobia, ale sú aj jednoduché na správu a flexibilné pre ďalší rozvoj.'
      },
      projects: {
        title: 'Moje <span>Projekty</span>',
        subtitle: 'Najnovšie práce',
        description: 'Tu sú niektoré z mojich najnovších projektov.',
        viewProject: 'Pozrieť projekt',
        noProjects: 'Momentálne nemám žiadne verejné projekty na zobrazenie.',
        comingSoon: 'Čoskoro pridám nové projekty!',
        workingOn: 'Na tejto podstránke momentálne pracujem. Medzitým si môžete pozrieť môj profil alebo ma kontaktovať.',
        expertQuote: 'Každý expert niekde začínal..',
        portfolioWork: 'Pracujem na portfóliu a budujem základy silného brandu.',
        joinJourney: 'Chcete sa stať súčasťou mojej cesty?',
        contactMe: 'Ozvite sa',
        selectedProjects: 'Vybrané Projekty',
        workingOnSection: 'Na tejto sekcii momentálne pracujem.',
        viewAllProjects: 'Zobraziť všetky projekty'
      },
      contact: {
        title: 'Váš <span>web</span> - Váš <span>úspech</span>',
        subtitle: 'Kontakt',
        description: 'Máte predstavu o svojej stránke? Pošlite mi stručný opis vašich cieľov a spoločne vytvoríme riešenie, ktoré prináša výsledky.',
        sendMessage: 'Pošli správu',
        contactDetails: 'Kontaktné údaje',
        name: 'Meno',
        email: 'Email',
        message: 'Správa',
        send: 'Odoslať',
        sending: 'Odosielam…',
        success: 'Správa odoslaná! Ďakujem.',
        error: 'Chyba pri odoslaní. Skús neskôr.',
        details: {
          email: 'Email',
          phone: 'Telefón',
          location: 'Poloha',
          locationValue: 'Slovensko',
        },
        contactMe: 'Ozvite sa mi!',
        contactDesc: 'Rád by som počul o vašom projekte. Poďme spolu vytvoriť niečo úžasné!'
      },
      footer: {
        rights: 'Všetky práva vyhradené.',
        privacy: 'Ochrana súkromia',
        madeWith: 'Vytvorené s ❤️ v Slovensku',
        description: 'Front-end developer, zapálený pre tvorbu úžasných webových zážitkov.',
        socialMedia: 'Sociálne siete',
        information: 'Informácie',
        about: 'O mne',
        projects: 'Projekty',
        contact: 'Kontakt',
        privacyPolicy: 'Zásady používania osobných údajov a súborov cookie'
      },
      services: {
        title: 'Moje Služby',
        subtitle: 'Čo vám môžem ponúknuť',
        seo: {
          name: 'SEO',
          description: 'Optimalizácia pre vyhľadávače na zlepšenie viditeľnosti vašej stránky'
        },
        analytics: {
          name: 'Google Analytics',
          description: 'Nastavenie analytiky a analýza dát pre lepšie pochopenie návštevníkov'
        },
        ai: {
          name: 'AI a Automatizácia',
          description: 'Riešenia umelou inteligenciou a automatizácia procesov'
        },
        support: {
          name: 'Podpora',
          description: 'Technická podpora a údržba vašich projektov'
        },
        webpages: {
          name: 'Webové Stránky',
          description: 'Vývoj a dizajn vlastných webových riešení'
        },
        marketing: {
          name: 'Digitálny Marketing',
          description: 'Marketingové stratégie, sociálne médiá a email marketing'
        }
      },
      privacy: {
        title: 'Zásady ochrany osobných údajov a súborov cookie',
        effectiveDate: 'Dátum účinnosti:',
        date: '13. júla 2025',
        operator: 'Prevádzkovateľ a spracovatelia',
        operatorText: 'Prevádzkovateľ: PatrikVision (Man Revolution s.r.o.), IČO: 12345678, email: info@patrikvision.sk. Spracovatelia: Vercel (hosting), Netlify (CDN), Google (Analytika), Meta (Pixel), SendGrid (email marketing).',
        dataCollected: 'Aké údaje zhromažďujeme',
        contactData: 'Kontaktné údaje – meno, e‑mail, správy z formulára.',
        technicalData: 'Technické údaje – IP, typ prehliadača, zariadenie (Google Analytics).',
        interactionData: 'Interakčné údaje – anonymné štatistiky, marketingové dáta (Meta Pixel).',
        legalBasis: 'Právny základ a účel spracovania',
        consent: 'Súhlas – marketingové a analytické nástroje.',
        legitimateInterest: 'Oprávnený záujem – zlepšovanie webu a prevádzková štatistika.',
        contractual: 'Zmluvný vzťah – poskytovanie objednaných služieb.',
        retentionPeriod: 'Doba uchovávania',
        googleAnalytics: 'Google Analytics: 14 mesiacov',
        metaPixel: 'Meta Pixel: 180 dní',
        contactForms: 'Kontaktné formuláre: do vymazania používateľom alebo 3 roky',
        thirdCountryTransfers: 'Prenosy do tretích krajín',
        thirdCountryText: 'Údaje neprevádzajú do krajín mimo EÚ alebo EHP. Ak by k prenosu došlo, zabezpečíme štandardné zmluvné doložky EÚ.',
        automatedDecision: 'Automatizované rozhodovanie a profilovanie',
        automatedDecisionText: 'Nevykonávame žiadne automatizované rozhodovanie ani profilovanie, ktoré by malo právne účinky na dotknuté osoby.',
        dataSubjectRights: 'Práva dotknutých osôb',
        accessRights: 'Právo na prístup, opravu, vymazanie („byť zabudnutý"), obmedzenie spracovania.',
        objectionRight: 'Právo namietať proti spracovaniu.',
        portabilityRight: 'Právo na prenositeľnosť údajov.',
        withdrawConsent: 'Právo odvolať súhlas kedykoľvek',
        changeCookieSettings: 'Zmeniť nastavenia cookies',
        complaintRight: 'Právo podať sťažnosť Úradu na ochranu osobných údajov',
        contact: 'Kontakt',
        contactText: 'V prípade otázok píšte na info@patrikvision.sk alebo použite',
        contactForm: 'kontaktný formulár'
      },
      cookies: {
        banner: {
          message: 'Táto webová stránka používa cookies na analýzu návštevnosti, optimalizáciu funkcií a personalizáciu vašich preferencií.',
          moreInfo: 'Viac info',
          acceptAll: 'Prijať všetko'
        },
        modal: {
          title: 'Cookie. Cookie.',
          description: 'Pomáhame webu fungovať rýchlejšie a poskytovať relevantný obsah. Vyberte, ktoré cookies povolíte.',
          closeLabel: 'Zavrieť nastavenia cookies',
          categories: {
            necessary: {
              label: 'Nevyhnutné',
              description: 'Základné cookies nevyhnutné pre fungovanie webu.'
            },
            statistics: {
              label: 'Štatistické',
              description: 'Meranie návštevnosti a zlepšovanie UX.'
            },
            marketing: {
              label: 'Marketingové',
              description: 'Cielenie reklám a sledovanie kampaní.'
            }
          },
          actions: {
            rejectAll: 'Odmietnuť všetko',
            saveSettings: 'Uložiť nastavenia'
          },
          footer: {
            privacyPolicy: 'Zásady ochrany osobných údajov'
          }
        }
      }
    },
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        projects: 'Projects',
        contact: 'Contact'
      },
      hero: {
        title: 'Design. Build. Develop.',
        subtitle: 'Frontend Developer',
        description: 'I transform ideas into modern and creative websites that stand out in the digital world. Let\'s create an online experience that captivates according to your vision.'
      },
      about: {
        title: 'About Me',
        subtitle: 'Frontend Developer',
        description: 'I\'m a frontend developer with a passion for creating beautiful and functional web applications. I specialize in React, JavaScript and modern web technologies.',
        skills: 'Skills',
        experience: 'Experience',
        years: 'years of experience',
        projects: 'completed projects',
        clients: 'satisfied clients',
        whoAmI: 'Who <span>I am</span>',
        intro1: 'I\'m a young and enthusiastic front-end developer who emphasizes transparent communication, meeting deadlines and high quality.',
        intro2: 'I create fast and responsive websites exactly according to your ideas that work smoothly on different devices. You can rely on me to transform your ideas into an engaging online presentation that will appeal to your visitors.',
        intro3: 'Need someone who can handle development sprints? You\'re in the right place!',
        personal1: 'Coffee, code and discipline form my perfect trio. I put 100% into every project so the result runs smoothly and bug-free. After work, sports keep me in shape and help me maintain a clear mind.',
        hashtags: '#front-end &nbsp; #self-improvement &nbsp; #athlete',
        aboutMe: 'About Me',
        desc1: 'I create modern web applications with emphasis on functionality and reliability according to precise client requirements.',
        desc2: 'During development, I maintain open communication so we can fine-tune both functionality and design together and incorporate all your ideas.',
        desc3: 'I offer portfolio, blog and corporate presentation creation that not only make an aesthetic impact but are also easy to manage and flexible for further development.'
      },
      projects: {
        title: 'My <span>Projects</span>',
        subtitle: 'Latest work',
        description: 'Here are some of my latest projects.',
        viewProject: 'View project',
        noProjects: 'I currently don\'t have any public projects to display.',
        comingSoon: 'New projects coming soon!',
        workingOn: 'I\'m currently working on this subpage. In the meantime, you can check out my profile or contact me.',
        expertQuote: 'Every expert started somewhere..',
        portfolioWork: 'I\'m working on my portfolio and building the foundations of a strong brand.',
        joinJourney: 'Want to be part of my journey?',
        contactMe: 'Contact me',
        selectedProjects: 'Selected Projects',
        workingOnSection: 'I\'m currently working on this section.',
        viewAllProjects: 'View all projects'
      },
      contact: {
        title: 'Your <span>web</span> - Your <span>success</span>',
        subtitle: 'Contact',
        description: 'Have an idea for your website? Send me a brief description of your goals and together we\'ll create a solution that delivers results.',
        sendMessage: 'Send message',
        contactDetails: 'Contact details',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send',
        sending: 'Sending...',
        success: 'Message sent! Thank you.',
        error: 'Error sending message. Please try again later.',
        details: {
          email: 'Email',
          phone: 'Phone',
          location: 'Location',
          locationValue: 'Slovakia',
        },
        contactMe: 'Contact me!',
        contactDesc: 'I\'d love to hear about your project. Let\'s create something amazing together!'
      },
      footer: {
        rights: 'All rights reserved.',
        privacy: 'Privacy Policy',
        madeWith: 'Made with ❤️ in Slovakia',
        description: 'Front-end developer, passionate about creating amazing web experiences.',
        socialMedia: 'Social media',
        information: 'Information',
        about: 'About',
        projects: 'Projects',
        contact: 'Contact',
        privacyPolicy: 'Privacy policy and cookie usage'
      },
      services: {
        title: 'My Services',
        subtitle: 'What I can offer you',
        seo: {
          name: 'SEO',
          description: 'Search Engine Optimization to improve your website visibility'
        },
        analytics: {
          name: 'Google Analytics',
          description: 'Analytics setup and data analysis for better insights'
        },
        ai: {
          name: 'AI and Automation',
          description: 'Artificial Intelligence solutions and process automation'
        },
        support: {
          name: 'Support',
          description: 'Technical support and maintenance for your projects'
        },
        webpages: {
          name: 'Web Pages',
          description: 'Custom website development and design solutions'
        },
        marketing: {
          name: 'Digital Marketing',
          description: 'Marketing strategies, social media and email marketing'
        }
      },
      privacy: {
        title: 'Privacy Policy and Cookie Usage',
        effectiveDate: 'Effective date:',
        date: 'July 13, 2025',
        operator: 'Controller and processors',
        operatorText: 'Controller: PatrikVision (Man Revolution s.r.o.), ID: 12345678, email: info@patrikvision.sk. Processors: Vercel (hosting), Netlify (CDN), Google (Analytics), Meta (Pixel), SendGrid (email marketing).',
        dataCollected: 'What data we collect',
        contactData: 'Contact data – name, email, messages from forms.',
        technicalData: 'Technical data – IP, browser type, device (Google Analytics).',
        interactionData: 'Interaction data – anonymous statistics, marketing data (Meta Pixel).',
        legalBasis: 'Legal basis and purpose of processing',
        consent: 'Consent – marketing and analytical tools.',
        legitimateInterest: 'Legitimate interest – website improvement and operational statistics.',
        contractual: 'Contractual relationship – providing ordered services.',
        retentionPeriod: 'Retention period',
        googleAnalytics: 'Google Analytics: 14 months',
        metaPixel: 'Meta Pixel: 180 days',
        contactForms: 'Contact forms: until deleted by user or 3 years',
        thirdCountryTransfers: 'Transfers to third countries',
        thirdCountryText: 'Data is not transferred to countries outside the EU or EEA. If transfer were to occur, we would ensure standard EU contractual clauses.',
        automatedDecision: 'Automated decision-making and profiling',
        automatedDecisionText: 'We do not perform any automated decision-making or profiling that would have legal effects on data subjects.',
        dataSubjectRights: 'Data subject rights',
        accessRights: 'Right to access, correction, deletion ("right to be forgotten"), restriction of processing.',
        objectionRight: 'Right to object to processing.',
        portabilityRight: 'Right to data portability.',
        withdrawConsent: 'Right to withdraw consent at any time',
        changeCookieSettings: 'Change cookie settings',
        complaintRight: 'Right to file a complaint with the Data Protection Authority',
        contact: 'Contact',
        contactText: 'For questions, write to info@patrikvision.sk or use the',
        contactForm: 'contact form'
      },
      cookies: {
        banner: {
          message: 'This website uses cookies to analyze traffic, optimize functionality and personalize your preferences.',
          moreInfo: 'More info',
          acceptAll: 'Accept all'
        },
        modal: {
          title: 'Cookie. Cookie.',
          description: 'We help the website work faster and provide relevant content. Choose which cookies to allow.',
          closeLabel: 'Close cookie settings',
          categories: {
            necessary: {
              label: 'Necessary',
              description: 'Basic cookies necessary for website functionality.'
            },
            statistics: {
              label: 'Statistics',
              description: 'Traffic measurement and UX improvement.'
            },
            marketing: {
              label: 'Marketing',
              description: 'Ad targeting and campaign tracking.'
            }
          },
          actions: {
            rejectAll: 'Reject all',
            saveSettings: 'Save settings'
          },
          footer: {
            privacyPolicy: 'Privacy policy'
          }
        }
      }
    }
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key; // Return the key if translation not found
  };

  const changeLanguage = (newLanguage) => {
    console.log('Changing language from', language, 'to', newLanguage);
    setLanguage(newLanguage);
  };

  const value = {
    language,
    changeLanguage,
    t
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};