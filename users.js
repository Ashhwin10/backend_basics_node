const express = require("express");
const { data } = require("./DB/usersDB.json");
const userRoutes = require("./Router/users.routes");
const app = express();
const PORT = 7000;

app.listen(PORT, () => {
  console.log("listening");
});

app.use("/users", userRoutes);
// app.get("/users", (req, res) => {
//   console.log("working-1");
//   res.json(data);
// });

// app.get("/users/search", (req, res) => {
//   const { gender, age } = req.query;

//   if (gender && age) {
//     const results = data.filter(
//       (item) => item.gender === gender && Number(item.dob.age) >= Number(age)
//     );
//     res.json(results);
//   } else if (gender) {
//     const results = data.filter((item) => item.gender === gender);
//     res.json(results);
//   } else if (age) {
//     const results = data.filter((item) => Number(item.dob.age) >= Number(age));
//     res.json(results);
//   } else {
//     res.sendStatus(404);
//   }
// });

// app.get("/users/:uuid", (req, res) => {
//   const { uuid } = req.params;
//   const result = data.find((item) => item.login.uuid === uuid);
//   if (result) {
//     res.json(result);
//   } else {
//     res.sendStatus(404);
//   }
// });
