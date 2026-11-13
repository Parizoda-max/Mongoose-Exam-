const Joi = require("joi");

const objectId = Joi.string().hex().length(24);

const createStuffRoleValidationSchema = Joi.object({
  stuff_id: Joi.string().optional(),
  role1_id: Joi.string().optional(),
});

const updateStuffRoleValidationSchema = Joi.object({
  stuff_id: objectId,
  role1_id: objectId,
}).min(1);

module.exports = {
  createStuffRoleValidationSchema,
  updateStuffRoleValidationSchema,
};
