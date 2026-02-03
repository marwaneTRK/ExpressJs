const errorMiddleware = (err, req, res, next) => {
    console.error("Erreur attrapée :", err.message);
    res.status(err.statusCode || 500).json({
        status: "error",
        message: err.message || "Erreur serveur interne"
    });
}
module.exports = errorMiddleware;