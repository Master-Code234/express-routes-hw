


// Require Express
const express = require("express");

const port = 3000;

const app = express();

// MiddleWare
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

// Routes


// 1. Home Page
app.get("/", (req, res) => {
  res.render(`home`);
});

// 2. About Page
app.get("/about", (req, res) => {
  res.render(`about`);
});

// 3. contact us
app.get("/contact", (req, res) => {
  res.send(`<h1> Contact us page </h1>`);
});

// 4. products
app.get("/products", (req, res) => {
  res.send(`<h1> Products page`);
});

// 5. sign in
app.get("/signin/:firstname", (req, res) => {
  const {firstname} = req.params
  res.send(`<h1> Sign in Page </h1>
  <p>Hello there,  ${firstname} </p>`);
});

// 6. sign up
app.get("/signup", (req, res) => {
  res.send(`<h1> Sign up page </h1>`);
});

// 7. payments
app.get("/payment", (req, res) => {
  res.send(`<h1> Payments page </h1>`);
});

// 8. track order
app.get("/trackorder", (req, res) => {
  res.send(`<h1> Track order page </h1>`);
});

// 9. my cart
app.get("/mycart", (req, res) => {
  res.send(`<h1> My cart page</h1>`);
});

// 10. coupons
app.get("/coupons", (req, res) => {
  res.send(`<h1> Coupons page </h1>`);
});

// Make app listen

app.listen(port, () => {
  console.log(`Litening on port, ${port}`);
});
