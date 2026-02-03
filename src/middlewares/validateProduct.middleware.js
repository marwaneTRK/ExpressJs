const validateProduct = (req, res, next) => {
    const { name, price } = req.body;
    if (!name || !price) {
        const error = new Error("Nom et prix sont obligatoires");
        error.statusCode = 400;
        return next(error);
    }
    if (price <= 0) {
        const error = new Error("Le prix doit être supérieur à 0");
        error.statusCode = 400;
        return next(error);
    }
    next();
};
module.exports = validateProduct;