const Joi = require("joi");

const createStage4ValidationSchema = Joi.object({
  name: Joi.string().trim().required(),
});

const updateStage4ValidationSchema = Joi.object({
  name: Joi.string().trim().required(),
});

module.exports = {
  createStage4ValidationSchema,
  updateStage4ValidationSchema,
};
