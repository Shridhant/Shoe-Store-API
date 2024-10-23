const mongoose = require("mongoose");

// MongoDB connection URL
const mongoURI = "mongodb://localhost:27017/test";

const dbconnect = mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

module.exports = dbconnect;
