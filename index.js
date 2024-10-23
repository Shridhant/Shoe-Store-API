const express = require("express");

const app = express();
const PORT = 3000;
const rou = require("./routes/products.route");
const dbconnect = require("./config/db");

app.use(express.json());

dbconnect;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/products", rou);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
