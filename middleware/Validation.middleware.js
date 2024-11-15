const joi = require("joi");

const fullSchema = joi
  .object()
  .keys({
    age: joi.number().integer().min(0).max(100),
    gender: joi.string().valid("male", "female"),
  })
  .or("age", "gender");

const uuidSchema = joi.string().uuid();

const queryErrors = (req, res, next) => {
  console.log("yup");
  console.log(req.query);

  const error = fullSchema.validate(req.query);
  if (error) {
    return res.status(403).json(error);
  }
  next();
};

const UUIDerror = (uuid) => {
  const res = uuidSchema.validate(uuid);
  return res.error;
};

module.exports = { queryErrors, UUIDerror };
