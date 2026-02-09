const authService = require("../services/jwt.auth.service");

class AuthController {
  async register(req, res, next) {
    try {
      const user = await authService.register(req.body);
      res.status(201).json({ message: "Utilisateur créé", user });
    } catch (err) {
      next(err);
    }
  }

  async login(req, res, next) {
    try {
      const token = await authService.login(req.body.email, req.body.password);
      res.json({ token });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new AuthController();