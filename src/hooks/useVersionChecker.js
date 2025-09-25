import { useEffect } from 'react';

const useVersionChecker = () => {
  useEffect(() => {
    const checkVersion = async () => {
      try {
        const response = await fetch('/', { cache: 'no-cache' });
        const html = await response.text();
        const regex = /<meta name="version" content="(.*?)"/;
        const match = regex.exec(html);
        const latestVersion = match?.[1];

        const currentVersion = document
          .querySelector('meta[name="version"]')
          ?.getAttribute('content');

        if (latestVersion && currentVersion && latestVersion !== currentVersion) {
          console.log('🆕 Nová verzia zistená, stránka sa obnovuje...');
          window.location.reload();
        }
      } catch (err) {
        console.error('Chyba pri kontrole verzie:', err);
      }
    };

    const interval = setInterval(checkVersion, 30_000);
    return () => clearInterval(interval);
  }, []);
};

export default useVersionChecker;