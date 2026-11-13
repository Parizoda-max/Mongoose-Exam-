const Joi = require("joi");

const createStudentLesson14ValidationSchema = Joi.object({
  lesson_id: Joi.string().required(),
  student_id: Joi.string().required(),
  is_there: Joi.boolean().required(),
  reason: Joi.string().trim().allow("").optional(),
  be_paid: Joi.boolean().optional(),
});

const updateStudentLesson14ValidationSchema = Joi.object({
  lesson_id: Joi.string().optional(),
  student_id: Joi.string().optional(),
  is_there: Joi.boolean().optional(),
  reason: Joi.string().trim().allow("").optional(),
  be_paid: Joi.boolean().optional(),
}).min(1);

module.exports = {
  createStudentLesson14ValidationSchema,
  updateStudentLesson14ValidationSchema,
};
