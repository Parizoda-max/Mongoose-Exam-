const Joi = require("joi");
const createRole1ValidationSchema = Joi.object({
  name: Joi.string()
    .required()
    .trim()
    .min(2)
    .max(50)
    .pattern(/^[A-Za-z\s]+$/)
    .messages({
      "string.pattern.base": "Name faqat harflardan iborat bo'lishi kerak",
    }),
});

const updateRole1ValidationSchema = Joi.object({
  name: Joi.string()
    .trim()
    .min(2)
    .max(50)
    .pattern(/^[A-Za-z\s]+$/)
    .optional()
    .messages({
      "string.pattern.base": "Name faqat harflardan iborat bo'lishi kerak",
    }),
});

module.exports = {
  createRole1ValidationSchema,
  updateRole1ValidationSchema,
};
