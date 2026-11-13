const Joi = require("joi");

const createBranch5ValidationSchema = Joi.object({
  name: Joi.string().trim().required(),
  address: Joi.string().trim().required(),
  call_number: Joi.string().trim().required(),
});

const updateBranch5ValidationSchema = Joi.object({
  name: Joi.string().trim(),
  address: Joi.string().trim(),
  call_number: Joi.string().trim(),
}).min(1);

module.exports = {
  createBranch5ValidationSchema,
  updateBranch5ValidationSchema,
};
