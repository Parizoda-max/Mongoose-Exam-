const Joi = require("joi");

const createPayment15ValidationSchema = Joi.object({
  student_id: Joi.string().required(),
  payment_last_date: Joi.date().required(),
  payment_date: Joi.date().allow(null).optional(),
  price: Joi.number().min(0).required(),
  is_paid: Joi.boolean().optional(),
  total_attent: Joi.number().integer().min(0).optional(),
});

const updatePayment15ValidationSchema = Joi.object({
  student_id: Joi.string().optional(),
  payment_last_date: Joi.date().optional(),
  payment_date: Joi.date().allow(null).optional(),
  price: Joi.number().min(0).optional(),
  is_paid: Joi.boolean().optional(),
  total_attent: Joi.number().integer().min(0).optional(),
}).min(1);

module.exports = {
  createPayment15ValidationSchema,
  updatePayment15ValidationSchema,
};
