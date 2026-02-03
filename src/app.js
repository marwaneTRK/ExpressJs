const express = require("express");
// Middleware permettant d'autoriser les requêtes venant d'autres domaines (frontend par exemple)
const cors = require("cors");
// Middleware de sécurisation des en-têtes HTTP
const helmet = require("helmet");
// Logger HTTP pour afficher les requêtes dans la console
const morgan = require("morgan");
const orderRoutes = require("./routes/order.routes");
// Création de l'application Express
const app = express();
/*
 ========================
   MIDDLEWARES GLOBAUX
 ========================
*/
// Sécurise l'application en configurant divers headers HTTP
app.use(helmet());
// Autorise les requêtes cross-origin (frontend React, mobile, etc.)
app.use(cors());
// Permet à Express de comprendre le JSON envoyé dans le body des requêtes
app.use(express.json());
// Affiche les requêtes HTTP dans la console (utile en développement)
app.use(morgan("dev"));
/*
 ========================
       ROUTE TEST
 ========================
*/
// Route de test pour vérifier que l’API fonctionne
app.get("/", (req, res) => {
  res.json({ message: "API E-commerce opérationnelle" });
});// order routes
app.use("/api/orders", orderRoutes);

/*
 ========================
   EXPORT DE L'APP
 ========================
*/
// On exporte l'application pour pouvoir l'utiliser dans server.js
module.exports = app;