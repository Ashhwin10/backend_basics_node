const joi = require("joi");

const schema = joi
  .object()
  .keys({
    age: joi.number().integer().min(0).max(100),
    gender: joi.string().valid("male", "female"),
    uuid: joi.string().uuid(),
  })
  .or("age", "gender");

const queryErrors = (incomingData) => {
  const res = schema.validate(incomingData);
  return res.error;
};

const UUIDerror = (incomingData) => {
  const res = schema.validate(incomingData);
  return res.error;
};

module.exports = { queryErrors, UUIDerror };
