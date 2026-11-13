const Joi = require("joi");

const createLidStatus9ValidationSchema = Joi.object({
  status: Joi.string().trim().required(),
});

const updateLidStatus9ValidationSchema = Joi.object({
  status: Joi.string().trim().required(),
});

module.exports = {
  createLidStatus9ValidationSchema,
  updateLidStatus9ValidationSchema,
};
