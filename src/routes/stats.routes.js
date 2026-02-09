const express = require("express");
const router = express.Router();
const statsController = require("../controllers/stats.controller");

router.get("/orders-count", statsController.getOrderCount);
router.get("/revenue", statsController.getTotalRevenue);
router.get("/top-products", statsController.getTopProducts);
router.get("/orders-per-user", statsController.getOrdersPerUser);

module.exports = router;