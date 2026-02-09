const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JwtUser = require("../models/jwt.user.model");

class AuthService {
  async register(data) {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await JwtUser.create({
      name: data.name,
      email: data.email,
      password: hashedPassword
    });

    return user;
  }

  async login(email, password) {
    const user = await JwtUser.findOne({ email });
    if (!user) throw new Error("Utilisateur introuvable");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Mot de passe incorrect");

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    return token;
  }
}

module.exports = new AuthService();