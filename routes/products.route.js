const { Router } = require("express");
const {
  getProducts,
  getProductById,
  post,
  update,
  del,
} = require("../controllers/products.controller");

const router = Router();

// POST request to create a new product
router.post("/", post);

// GET request to get all products
router.get("/", getProducts);

// GET request to get a product by ID
router.get("/:id", getProductById);

// PUT request to update a product by ID
router.put("/:id", update); // Corrected path

// DELETE request to delete a product by ID
router.delete("/:id", del); // Corrected path

module.exports = router;
