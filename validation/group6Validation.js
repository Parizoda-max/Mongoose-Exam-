const Joi = require("joi");

const objectId = Joi.string().hex().length(24);

const createGroup6ValidationSchema = Joi.object({
  group_name: Joi.string().trim().required(),
  lesson_start_time: Joi.string().required(),
  lesson_continuous: Joi.string().required(),
  lesson_week_day: Joi.string().required(),
  group_stage_idint: Joi.string().optional(),
  room_number: Joi.string().required(),
  room_floor: Joi.number().integer().required(),
  branch_id: Joi.string().optional(),
  lessons_quant: Joi.number().integer().required(),
  is_active: Joi.boolean(),
});

const updateGroup6ValidationSchema = Joi.object({
  group_name: Joi.string().trim(),
  lesson_start_time: Joi.string(),
  lesson_continuous: Joi.string(),
  lesson_week_day: Joi.string(),
  room_number: Joi.string(),
  room_floor: Joi.number().integer(),
  lessons_quant: Joi.number().integer(),
  is_active: Joi.boolean(),
}).min(1);

module.exports = {
  createGroup6ValidationSchema,
  updateGroup6ValidationSchema,
};
