const Product = require("../models/product.model");
const Category = require("../models/category.model");

exports.create = (data) => Product.create(data);

exports.findAll = () => Product.find().populate("categories", "name");

exports.findById = (id) => Product.findById(id).populate("categories","name");

exports.update = (id, data) => Product.findByIdAndUpdate(id, data, { new: true });

exports.delete = (id) => Product.findByIdAndDelete(id);