const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Définir le dossier 'public' pour les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Route principale pour servir le fichier HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Lancer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
