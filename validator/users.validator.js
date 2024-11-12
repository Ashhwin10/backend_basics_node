const joi = require("joi");

const schema = joi
  .object()
  .keys({
    age: joi.number().integer().min(0).max(100),
    gender: joi.string().valid("male", "female"),
  })
  .or("age", "gender");

const queryErrors = (incomingData) => {
  const res = schema.validate(incomingData);
  return res.error;
};

module.exports = { queryErrors };
