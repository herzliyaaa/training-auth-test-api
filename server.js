const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const salespersonRoutes = require("./routes/salesperson.router");
const customerRoutes = require("./routes/customer.router");
const carRoutes = require("./routes/car.router");
const invoiceRoutes = require("./routes/invoice.router");
// const authRoutes = require("./routes/auth.router");
const app = express();

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));

app.get("/", (req, res) => {
  res.json({ message: "kssksksksk!" });
});


// app.use(authRoutes);
app.use(salespersonRoutes);
app.use(customerRoutes);
app.use(carRoutes);
app.use(invoiceRoutes)

app.use(function (err, req, res, next) {
  if (err) {
    console.log(err);
    res.sendStatus(400);
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});