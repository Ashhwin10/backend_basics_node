const joi = require("joi");

const fullSchema = joi
  .object()
  .keys({
    age: joi.number().integer().min(0).max(100),
    gender: joi.string().valid("male", "female"),
  })
  .or("age", "gender");

const uuidSchema = joi.string().uuid();

const queryErrors = (incomingData) => {
  const res = fullSchema.validate(incomingData);
  return res.error;
};

const UUIDerror = (uuid) => {
  const res = uuidSchema.validate(uuid);
  return res.error;
};

module.exports = { queryErrors, UUIDerror };
