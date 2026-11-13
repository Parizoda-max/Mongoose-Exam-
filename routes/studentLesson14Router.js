const { Router } = require("express");
const StudentLesson14 = Router();

const {
  createStudentLesson14,
  getStudentLesson14,
  getStudentLesson14ById,
  updateStudentLesson14,
  deleteStudentLesson14,
} = require("../controllers/studentLesson14.controller");

const validationSchema = (schema) => (req, res, next) => {
  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).send(validationResult.error.details[0].message);
  }
  next();
};

const {
  createStudentLesson14ValidationSchema,
  updateStudentLesson14ValidationSchema,
} = require("../validation/studentLesson14Validation");

/**
 * @swagger
 * tags:
 *   name: StudentLesson14
 *   description: StudentLesson14 boshqaruvi (CRUD)
 */

/**
 * @swagger
 * /studentLesson14/create:
 *   post:
 *     summary: Yangi StudentLesson14 yaratish
 *     tags: [StudentLesson14]
 *     description: Student uchun dars davomati yozuvini yaratadi.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - lesson_id
 *               - student_id
 *               - is_there
 *             properties:
 *               lesson_id:
 *                 type: string
 *                 description: Lesson8 ning _id si
 *                 example: 665f1c2e8b1e4a0012ab34cd
 *               student_id:
 *                 type: string
 *                 description: Student12 ning _id si
 *                 example: 665f1c2e8b1e4a0012ab34ce
 *               is_there:
 *                 type: boolean
 *                 description: Darsda qatnashdimi
 *                 example: true
 *               reason:
 *                 type: string
 *                 description: Kelmagan bo'lsa, sababi
 *                 example: Kasal bo'lgan
 *               be_paid:
 *                 type: boolean
 *                 description: To'lov qilinganmi
 *                 example: false
 *     responses:
 *       201:
 *         description: StudentLesson14 muvaffaqiyatli yaratildi
 *       400:
 *         description: Yaroqsiz so'rov
 *       500:
 *         description: Ichki server xatosi
 */
StudentLesson14.post(
  "/create",
  validationSchema(createStudentLesson14ValidationSchema),
  createStudentLesson14,
);

/**
 * @swagger
 * /studentLesson14/getStudentLesson14:
 *   get:
 *     summary: Barcha StudentLesson14 larni olish
 *     tags: [StudentLesson14]
 *     description: Barcha StudentLesson14 ro'yxatini olish
 *     responses:
 *       200:
 *         description: StudentLesson14 ro'yxati muvaffaqiyatli qaytarildi
 *       500:
 *         description: Ichki server xatosi
 */
StudentLesson14.get("/getStudentLesson14", getStudentLesson14);

/**
 * @swagger
 * /studentLesson14/getStudentLesson14ById/{id}:
 *   get:
 *     summary: StudentLesson14 ni ID bo'yicha olish
 *     tags: [StudentLesson14]
 *     description: StudentLesson14 ni ID bo'yicha olish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Olinadigan StudentLesson14 ID si
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: StudentLesson14 muvaffaqiyatli qaytarildi
 *       404:
 *         description: StudentLesson14 topilmadi
 *       500:
 *         description: Ichki server xatosi
 */
StudentLesson14.get("/getStudentLesson14ById/:id", getStudentLesson14ById);

/**
 * @swagger
 * /studentLesson14/updateStudentLesson14/{id}:
 *   patch:
 *     summary: StudentLesson14 ni yangilash
 *     tags: [StudentLesson14]
 *     description: StudentLesson14 ma'lumotlarini yangilash (kamida bitta maydon kerak)
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Yangilanadigan StudentLesson14 ID si
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               lesson_id:
 *                 type: string
 *                 example: 665f1c2e8b1e4a0012ab34cd
 *               student_id:
 *                 type: string
 *                 example: 665f1c2e8b1e4a0012ab34ce
 *               is_there:
 *                 type: boolean
 *                 example: false
 *               reason:
 *                 type: string
 *                 example: Oilaviy sabab
 *               be_paid:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: StudentLesson14 muvaffaqiyatli yangilandi
 *       400:
 *         description: Yomon so'rov, validatsiya xatosi
 *       404:
 *         description: StudentLesson14 topilmadi
 *       500:
 *         description: Ichki server xatosi
 */
StudentLesson14.patch(
  "/updateStudentLesson14/:id",
  validationSchema(updateStudentLesson14ValidationSchema),
  updateStudentLesson14,
);

/**
 * @swagger
 * /studentLesson14/deleteStudentLesson14/{id}:
 *   delete:
 *     summary: StudentLesson14 ni o'chirish
 *     tags: [StudentLesson14]
 *     description: Berilgan ID bo'yicha StudentLesson14 ni o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: O'chiriladigan StudentLesson14 ID si
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: StudentLesson14 muvaffaqiyatli o'chirildi
 *       404:
 *         description: StudentLesson14 topilmadi
 *       500:
 *         description: Ichki server xatosi
 */
StudentLesson14.delete("/deleteStudentLesson14/:id", deleteStudentLesson14);

module.exports = { StudentLesson14 };
