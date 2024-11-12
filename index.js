const express = require("express");
const { data } = require("./DB/db.json");

const app = express();
const PORT = 7000;

app.listen(PORT, () => {
  console.log("listening");
});
