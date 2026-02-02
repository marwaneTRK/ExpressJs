const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: "Token manquant" });
    }
    // Simulation utilisateur extrait du token
    req.userId = "user_123"; next();
};
module.exports = authMiddleware;