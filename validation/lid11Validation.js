const Joi = require("joi");

const createLid11ValidationSchema = Joi.object({
  first_name: Joi.string().trim().required(),
  last_name: Joi.string().trim().required(),
  phone_number: Joi.string()
    .trim()
    .pattern(/^\+?[0-9]{9,15}$/)
    .required(),
  lid_stage_id: Joi.number().required(),
  test_date: Joi.date().required(),
  trial_lesson_date: Joi.number().required(),
  trial_lesson_time: Joi.string()
    .trim()
    .pattern(/^([01]\d|2[0-3]):[0-5]\d$/)
    .required(),
  trial_lesson_group_id: Joi.number().required(),
  lid_status_id: Joi.number().required(),
  cancel_reson_id: Joi.number().required(),
});

const updateLid11ValidationSchema = Joi.object({
  first_name: Joi.string().trim(),
  last_name: Joi.string().trim(),
  phone_number: Joi.string()
    .trim()
    .pattern(/^\+?[0-9]{9,15}$/),
  lid_stage_id: Joi.number(),
  test_date: Joi.date(),
  trial_lesson_date: Joi.number(),
  trial_lesson_time: Joi.string()
    .trim()
    .pattern(/^([01]\d|2[0-3]):[0-5]\d$/),
  trial_lesson_group_id: Joi.number(),
  lid_status_id: Joi.number(),
  cancel_reson_id: Joi.number(),
}).min(1);

module.exports = {
  createLid11ValidationSchema,
  updateLid11ValidationSchema,
};
