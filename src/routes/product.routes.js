const express = require("express");
const router = express.Router();
const reviewRoutes = require("./reviews.routes");
const logRoutes = require("../middlewares/log.middleware");
const validateProduct = require("../middlewares/validateProduct.middleware");
const { createProduct } = require("../controllers/product.controller");
const authMiddleware = require("../middlewares/auth.middleware");
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


router.post("/",authMiddleware,validateProduct,createProduct);

module.exports = router;