const Joi = require("joi");

const createStudentGroup13ValidationSchema = Joi.object({
  student_id: Joi.string().required(),
  group_id: Joi.string().required(),
});

const updateStudentGroup13ValidationSchema = Joi.object({
  student_id: Joi.string().optional(),
  group_id: Joi.string().optional(),
}).min(1);

module.exports = {
  createStudentGroup13ValidationSchema,
  updateStudentGroup13ValidationSchema,
};
