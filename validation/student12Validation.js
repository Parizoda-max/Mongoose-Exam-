const Joi = require("joi");

const createStudent12ValidationSchema = Joi.object({
  lid_id: Joi.string().optional(),
  first_name: Joi.string().trim().required(),
  last_name: Joi.string().trim().required(),
  phone_number: Joi.string()
    .trim()
    .pattern(/^\+?[0-9]{9,15}$/)
    .required(),
  bithday: Joi.date().required(),
  gender: Joi.string().trim().required(),
});

const updateStudent12ValidationSchema = Joi.object({
  lid_id: Joi.number(),
  first_name: Joi.string().trim(),
  last_name: Joi.string().trim(),
  phone_number: Joi.string()
    .trim()
    .pattern(/^\+?[0-9]{9,15}$/),
  bithday: Joi.date(),
  gender: Joi.string().trim(),
}).min(1);

module.exports = {
  createStudent12ValidationSchema,
  updateStudent12ValidationSchema,
};
