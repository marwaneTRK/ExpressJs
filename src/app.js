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

const productRoutes = require("./routes/product.routes");
const errorMiddleware = require("./middlewares/error.middleware");
const crudProductRoutes = require("./routes/crud.product.routes");
const statsRoutes = require("./routes/stats.routes");
const jwtAuthRoutes = require("./routes/jwt.auth.routes");
const { default: rateLimit } = require("express-rate-limit");
/*
 ========================
   MIDDLEWARES GLOBAUX
 ========================
*/
// Sécurise l'application en configurant divers headers HTTP
app.use(helmet());
// Autorise les requêtes cross-origin (frontend React, mobile, etc.)
const allowedOrigins = [
  "http://localhost:3000/",   // React dev
  "http://localhost:5174",   // Vite dev
  "https://monapp.com/",      // Frontend production
  "https://admin.monapp.com/" // Backoffice
];

app.use(cors({
  origin: function (origin, callback) {
    // Autoriser requêtes sans origin (Postman, mobile apps, server-to-server)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Accès CORS refusé  Origine non autorisée : " + origin));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


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
app.use("/api/products", productRoutes);
app.use(errorMiddleware)
app.use("/api/crud-products", crudProductRoutes);
app.use("/api/stats", statsRoutes);
app.use("/api/auth", jwtAuthRoutes);



/*
 ========================
   EXPORT DE L'APP
 ========================
*/
// On exporte l'application pour pouvoir l'utiliser dans server.js
module.exports = app;