const express = require("express");
const router = express.Router();// Import du middleware et du contrôleur
const authMiddleware = require("../middlewares/auth.middleware");
const { getMyOrders } = require("../controllers/order.controller");// Route protégée
router.get("/my-orders", authMiddleware, getMyOrders);

router.post("/my-orders", (req, res) => {
    const { products, shippingAddress } = req.body;
    if (!products || !shippingAddress) {
        return res.status(400)
            .json({ error: "Données de commande manquantes" });
    } res.status(201).json({
        message: "Commande créée avec succès",
        order: {
            products,
            shippingAddress
        }
    });
});


module.exports = router;
