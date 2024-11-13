require("dotenv").config();
const express = require("express");
const userRoutes = require("./Router/users.routes");
const currencyRoutes = require("./Router/currencies.routes");
const { verifyAuth } = require("./middleware/Auth.middleware");
const app = express();
const PORT = 7000;

app.use(verifyAuth); // global middleware
app.use("/users", userRoutes);
app.use("/currencies", currencyRoutes);

app.listen(PORT, () => {
  console.log("listening");
});
