const express = require("express");
const { data } = require("./DB/db.json");

const app = express();
const PORT = 7000;

app.listen(PORT, () => {
  console.log("listening");
});

// app.get("/st/:sym", (req, res) => {
//   const { sym } = req.params;
//   const result = data.find((ele) => ele.id.toLowerCase() === sym.toLowerCase());
//   if (result) {
//     return res.json(result);
//   } else {
//     res.status(404).send("invalid");
//   }
// });

// app.get("/sto", (req, res) => {
//   const { reqe } = req.query;
//   console.log("requu", req.query);
//   if (reqe) {
//     const resulet = data.filter((item) => item.min_size == reqe);
//     res.json(resulet);
//   } else {
//     res.json(data);
//   }
// });

// app.get("*", (req, res) => {
//   return res.send("LOL");
// });
