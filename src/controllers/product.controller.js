const createProduct = async (req, res) => {
  const { name, price } = req.body;

  // Simulation erreur serveur
  if (name === "bug") {
    throw new Error("Erreur base de données simulée");
  }

  res.status(201).json({
    message: "Produit créé",
    product: { name, price }
  });
};

module.exports = { createProduct };