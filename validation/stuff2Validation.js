const Joi = require("joi");

const createStuff2ValidationSchema = Joi.object({
  first_name: Joi.string().required().trim().min(2).max(50),
  last_name: Joi.string().required().trim().min(2).max(50),
  phone_number: Joi.string()
    .required()
    .pattern(/^\+998\d{9}$/),
  login: Joi.string().required().trim().min(3).max(30),
  parol: Joi.string().required().min(8).max(30),
  is_active: Joi.boolean().optional(),
});

const updateStuff2ValidationSchema = Joi.object({
  first_name: Joi.string().trim().min(2).max(50).optional(),
  last_name: Joi.string().trim().min(2).max(50).optional(),
  phone_number: Joi.string()
    .pattern(/^\+998\d{9}$/)
    .optional(),
  login: Joi.string().trim().min(3).max(30).optional(),
  parol: Joi.string().min(8).max(30).optional(),
  is_active: Joi.boolean().optional(),
});

module.exports = {
  createStuff2ValidationSchema,
  updateStuff2ValidationSchema,
};
