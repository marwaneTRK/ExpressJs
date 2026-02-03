const express = require("express");
const router = express.Router();// Import du middleware et du contrôleur
const authMiddleware = require("../middlewares/auth.middleware");
const { getMyOrders } = require("../controllers/order.controller");// Route protégée
router.get("/my-orders", authMiddleware, getMyOrders);
module.exports = router;

