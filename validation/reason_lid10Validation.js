const Joi = require("joi");

const createReasonLid10ValidationSchema = Joi.object({
  reason_lid: Joi.string().trim().required(),
});

const updateReasonLid10ValidationSchema = Joi.object({
  reason_lid: Joi.string().trim().required(),
});

module.exports = {
  createReasonLid10ValidationSchema,
  updateReasonLid10ValidationSchema,
};
