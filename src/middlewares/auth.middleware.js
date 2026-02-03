const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: "Token manquant" });
    }
    // Simulation utilisateur extrait du token
    req.userId = "user_123"; next();
};
module.exports = authMiddleware;


// const jwt = require("jsonwebtoken");

// const authMiddleware = (req, res, next) => {
//     const authHeader = req.headers.authorization;

//     if (!authHeader) {
//         return res.status(401).json({ error: "Token manquant" });
//     }

//     const token = authHeader.split(" ")[1];

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);

//         // real user id should come from token
//         req.userId = decoded.userId;

//         next();
//     } catch (error) {
//         return res.status(401).json({ error: "Token invalide" });
//     }
// };

// module.exports = authMiddleware;
