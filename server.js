const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
const path = require("path");

const mysql = require("mysql");
let results = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(cors);
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodereactjs",
});
connection.connect();

app.get("/api", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  connection.query("SELECT * FROM products", (error, results, fields) => {
    res.json({ products: results });
  });
});

app.post("/api", (req, res) => {
  const { dataToSave } = req.body;

  const query = "INSERT INTO products (productname) VALUES (?)";
  connection.query(query, [dataToSave.productName]);

  connection.query("SELECT * FROM products", (error, results, fields) => {
    res.json({ products: results });
  });
});

app.post("/api/delete", (req, res) => {
  const { productid } = req.body;

  const query = "DELETE FROM products WHERE id = (?)";
  connection.query(query, [productid]);

  connection.query("SELECT * FROM products", (error, results, fields) => {
    res.json({ products: results });
  });
});

app.use(express.static(path.join(__dirname, "build")));
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
