const express = require("express");// mergeParams permet de récupérer productId depuis le routeur parent
const router = express.Router({ mergeParams: true });
// Liste des avis d’un produit
router.get("/", (req, res) => {
    res.json({
        productId: req.params.productId,
        reviews: ["Super produit", "Bonne qualité"]
    });
});
module.exports = router;