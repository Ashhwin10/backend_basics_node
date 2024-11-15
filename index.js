require("dotenv").config();
const express = require("express");
const userRoutes = require("./Router/users.routes");
const currencyRoutes = require("./Router/currencies.routes");
const { verifyAuth } = require("./middleware/Auth.middleware");
const mongoose = require("mongoose");

const app = express();
const PORT = 7000;
const DB_URI = "mongodb://localhost:27017"; // local path to mongo DB

mongoose
  .connect(DB_URI)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

app.use(verifyAuth); // global middleware
app.use("/users", userRoutes);
app.use("/currencies", currencyRoutes);

app.listen(PORT, () => {
  console.log("listening");
});
