const express = require("express");
const router = express.Router();
const reviewRoutes = require("./reviews.routes");
const logRoutes = require("../middlewares/log.middleware");
router.use(logRoutes);
// Liste des produits
router.get("/", (req, res) => {
    const { category, maxPrice } = req.query;
    res.json({
        message: "Filtrage des produits",
        filters: {
            category,
            maxPrice
        }
    });
});
// Détail d’un produit
router.get("/:productId", (req, res) => {
res.json({ productId: req.params.productId });
});
// Route imbriquée : /api/products/:productId/reviews
router.use("/:productId/reviews", reviewRoutes);
module.exports = router;