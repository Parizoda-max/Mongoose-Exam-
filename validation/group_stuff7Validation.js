const Joi = require("joi");

const createGroupStuffValidationSchema = Joi.object({
  group_id: Joi.string().required().trim().hex().length(24),
  stuff_id: Joi.string().required().trim().hex().length(24),
});

const updateGroupStuffValidationSchema = Joi.object({
  group_id: Joi.string().optional().trim().hex().length(24),
  stuff_id: Joi.string().optional().trim().hex().length(24),
}).min(1);

module.exports = {
  createGroupStuffValidationSchema,
  updateGroupStuffValidationSchema,
};
