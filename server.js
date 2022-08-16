const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const path = require('path');

const salespersonRoutes = require("./routes/salesperson.router");
const customerRoutes = require("./routes/customer.router");
const carRoutes = require("./routes/car.router");
const invoiceRoutes = require("./routes/invoice.router");
const ticketRoutes = require("./routes/ticket.router");
const mechanicRoutes = require("./routes/mechanic.router");
const serviceRoutes = require("./routes/service.router");
const partRoutes = require("./routes/part.router");
const authRoutes = require("./routes/auth.router");

const app = express();

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
 
app.use(
  cors()
  // {
  //   origin: "http://localhost:3030"
  // }
);
// app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));

// app.use(
//   session({
//     key: "user_id",
//     secret: process.env.SECRET_KEY,
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       expires: 1000 * 60 * 60,
//     },
//   })
// );

app.get("/", (req, res) => {
  res.json({ message: "My naevis we love you!" });
});

app.use(authRoutes);
app.use(salespersonRoutes);
app.use(customerRoutes);
app.use(carRoutes);
app.use(invoiceRoutes);
app.use(ticketRoutes);
app.use(mechanicRoutes);
app.use(serviceRoutes);
app.use(partRoutes);

app.use('/uploads', express.static(path.join('uploads')));


const PORT = process.env.PORT || 3000;

module.exports = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


