const Product = require("../models/products.models");

const post = async (req, res) => {
  try {
    const prod = await Product.create(req.body);
    res.status(200).json(prod);
  } catch (e) {
    res.status(500).json({ msg: e.message }); // Corrected: Use e.message for the error message
  }
};

const getProducts = async (req, res) => {
  try {
    const get = await Product.find({});
    res.status(200).json(get);
  } catch (e) {
    res.status(500).json({ msg: e.message }); // Corrected: Use e.message for the error message
  }
};

const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const get = await Product.findById(id);

    if (!get) {
      return res.status(404).json({ msg: "Product not found" }); // Check if product exists
    }

    res.status(200).json(get);
  } catch (e) {
    res.status(500).json({ msg: e.message }); // Corrected: Use e.message for the error message
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id;
    const newprod = req.body;
    const get = await Product.findByIdAndUpdate(id, newprod, { new: true }); // Return updated document

    if (!get) {
      return res.status(404).json({ msg: "Product not found" });
    }
    res.status(200).json(get);
  } catch (e) {
    res.status(500).json({ msg: e.message }); // Corrected: Use e.message for the error message
  }
};

const del = async (req, res) => {
  try {
    const id = req.params.id;
    const get = await Product.findByIdAndDelete(id);

    if (!get) {
      return res.status(404).json({ msg: "Product not found!" }); // Corrected: Use 404 for not found
    }

    res.status(200).json({ msg: "Product deleted successfully", data: get });
  } catch (e) {
    res.status(500).json({ msg: e.message }); // Corrected: Use e.message for the error message
  }
};

module.exports = {
  post,
  getProductById,
  getProducts,
  update,
  del,
};
