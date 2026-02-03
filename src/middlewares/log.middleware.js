const logRoutes = (req, res, next) => {
    console.log("Route produit appelée");
    next();
};
module.exports = logRoutes;