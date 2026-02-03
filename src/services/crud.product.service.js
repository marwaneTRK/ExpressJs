const productRepo = require("../repositories/crud.product.repository");

exports.createProduct = async (data) => {
  return productRepo.create(data);
};

exports.getProducts = () => productRepo.findAll();

exports.getProduct = (id) => productRepo.findById(id);

exports.updateProduct = (id, data) => productRepo.update(id, data);

exports.deleteProduct = (id) => productRepo.delete(id);