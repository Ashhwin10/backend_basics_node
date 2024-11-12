const { data } = require("../DB/usersDB.json");

const { queryErrors, UUIDerror } = require("../validator/users.validator");

const verifyAuth = (req) => {
  const { authorization } = req.headers;
  console.log("auth", authorization);
  if (!authorization) {
    return false;
  }

  if (authorization != process.env.ROUTE_PASSWORD) {
    return false;
  }
  return true;
};

const getUsers = (req, res) => {
  if (!verifyAuth(req)) {
    return res.status(403).json({ message: "unAuthorized password" });
  } else {
    res.json(data);
  }
};

const searchUsers = (req, res) => {
  const { gender, age } = req.query;

  const error = queryErrors({ age, gender });
  if (error) {
    return res.status(422).json(error);
  }

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
  const error = UUIDerror(uuid);
  if (error) {
    return res.status(422).json(error);
  }

  const result = data.find((item) => item.login.uuid === uuid);
  if (result) {
    res.json(result);
  } else {
    res.sendStatus(404);
  }
};

module.exports = { getUsers, searchUsers, searchUUID };
