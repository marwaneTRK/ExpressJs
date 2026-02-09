const express = require("express");
const router = express.Router();
const authController = require("../controllers/jwt.auth.controller");
const { default: rateLimit } = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5, // max 100 requêtes par IP
  message: {
    status: "error",
    message: "Trop de requêtes, réessayez plus tard."
  }
});

router.post("/register",authController.register);
router.post("/login", limiter,authController.login);

module.exports = router;