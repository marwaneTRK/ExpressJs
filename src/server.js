// Charge les variables d'environnement depuis le fichier .env
require("dotenv").config();


// Import de mongoose pour connecter l'application à MongoDB
const mongoose = require("mongoose");


// Import de l'application Express configurée dans app.js
const app = require("./app");


/*
 ========================
   CONNEXION À MONGODB
 ========================
*/


// Connexion à la base de données MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connecté avec succès"))
  .catch(err => console.error("Erreur de connexion MongoDB :", err));


/*
 ========================
   CONFIGURATION DU PORT
 ========================
*/


// On récupère le port depuis les variables d’environnement
// Si non défini, on utilise 5000 par défaut
const PORT = process.env.PORT || 5000;


/*
 ========================
   DÉMARRAGE DU SERVEUR
 ========================
*/


// Lancement du serveur HTTP
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});