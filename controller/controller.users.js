const { data } = require("../DB/usersDB.json");

const getUsers = (req, res) => {
  console.log("working-1");
  res.json(data);
};

const searchUsers = (req, res) => {
  const { gender, age } = req.query;

  if (gender && age) {
    const results = data.filter(
      (item) => item.gender === gender && Number(item.dob.age) >= Number(age)
    );
    res.json(results);
  } else if (gender) {
    const results = data.filter((item) => item.gender === gender);
    res.json(results);
  } else if (age) {
    const results = data.filter((item) => Number(item.dob.age) >= Number(age));
    res.json(results);
  } else {
    res.sendStatus(404);
  }
};

const searchUUID = (req, res) => {
  const { uuid } = req.params;
  const result = data.find((item) => item.login.uuid === uuid);
  if (result) {
    res.json(result);
  } else {
    res.sendStatus(404);
  }
};

module.exports = { getUsers, searchUsers, searchUUID };
