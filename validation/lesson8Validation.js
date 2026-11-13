const Joi = require("joi");

const createLesson8ValidationSchema = Joi.object({
  lesson_theme: Joi.string().trim().required(),
  lesson_number: Joi.number().integer().required(),
  group_id: Joi.string().required(),
  lesson_date: Joi.date().required(),
});

const updateLesson8ValidationSchema = Joi.object({
  lesson_theme: Joi.string().trim(),
  lesson_number: Joi.number().integer(),
  group_id: Joi.string(),
  lesson_date: Joi.date(),
}).min(1);

module.exports = {
  createLesson8ValidationSchema,
  updateLesson8ValidationSchema,
};
