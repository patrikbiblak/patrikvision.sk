const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'public', 'index.html');

const now = new Date();
const version = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(
  now.getDate()
).padStart(2, '0')}-${String(now.getHours()).padStart(2, '0')}${String(
  now.getMinutes()
).padStart(2, '0')}`;

fs.readFile(indexPath, 'utf8', (err, data) => {
  if (err) return console.error('Chyba pri čítaní index.html:', err);

  const updated = data.replace(
    /<meta name="version" content=".*?" \/>/,
    `<meta name="version" content="${version}" />`
  );

  fs.writeFile(indexPath, updated, 'utf8', (err) => {
    if (err) return console.error('Chyba pri zápise novej verzie:', err);
    console.log(`✅ Verzia ${version} bola automaticky zapísaná do index.html`);
  });
});