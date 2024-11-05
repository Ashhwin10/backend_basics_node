const { data } = require("../DB/db.json");

const getCurr = (req, res) => {
  res.json(data);
};

const getSpecificCurr = (req, res) => {
  const { sym } = req.params;
  const result = data.find((ele) => ele.id.toLowerCase() === sym.toLowerCase());
  if (result) {
    return res.json(result);
  } else {
    res.status(404).send("invalidd");
  }
};

const currValue = (req, res) => {
  const { reqe } = req.query;
  console.log("Request query:", req.query);

  if (reqe) {
    const result = data.filter((item) => item.min_size == reqe);
    res.json(result);
  } else {
    res.json(data);
  }
};

module.exports = { getCurr, getSpecificCurr, currValue };
