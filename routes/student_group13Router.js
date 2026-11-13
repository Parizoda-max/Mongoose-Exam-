const { Router } = require("express");
const StudentGroup13 = Router();

const {
  createStudentGroup13,
  getStudentGroup13,
  getStudentGroup13ById,
  updateStudentGroup13,
  deleteStudentGroup13,
} = require("../controllers/student_group13.controller");

const validationSchema = (schema) => (req, res, next) => {
  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).send(validationResult.error.details[0].message);
  }
  next();
};

const {
  createStudentGroup13ValidationSchema,
  updateStudentGroup13ValidationSchema,
} = require("../validation/student_group13Validation");

/**
 * @swagger
 * tags:
 *   name: StudentGroup13
 *   description: StudentGroup13 boshqaruvi (CRUD)
 */

/**
 * @swagger
 * /studentGroup13/create:
 *   post:
 *     summary: Yangi StudentGroup13 yaratish
 *     tags: [StudentGroup13]
 *     description: Studentni guruhga biriktiradi.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - student_id
 *               - group_id
 *             properties:
 *               student_id:
 *                 type: string
 *                 description: Student12 ning _id si
 *                 example: 665f1c2e8b1e4a0012ab34cd
 *               group_id:
 *                 type: string
 *                 description: Group6 ning _id si
 *                 example: 665f1c2e8b1e4a0012ab34ce
 *     responses:
 *       201:
 *         description: StudentGroup13 muvaffaqiyatli yaratildi
 *       400:
 *         description: Yaroqsiz so'rov
 *       500:
 *         description: Ichki server xatosi
 */
StudentGroup13.post(
  "/create",
  validationSchema(createStudentGroup13ValidationSchema),
  createStudentGroup13,
);

/**
 * @swagger
 * /studentGroup13/getStudentGroup13:
 *   get:
 *     summary: Barcha StudentGroup13 larni olish
 *     tags: [StudentGroup13]
 *     description: Barcha StudentGroup13 ro'yxatini olish
 *     responses:
 *       200:
 *         description: StudentGroup13 ro'yxati muvaffaqiyatli qaytarildi
 *       500:
 *         description: Ichki server xatosi
 */
StudentGroup13.get("/getStudentGroup13", getStudentGroup13);

/**
 * @swagger
 * /studentGroup13/getStudentGroup13ById/{id}:
 *   get:
 *     summary: StudentGroup13 ni ID bo'yicha olish
 *     tags: [StudentGroup13]
 *     description: StudentGroup13 ni ID bo'yicha olish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Olinadigan StudentGroup13 ID si
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: StudentGroup13 muvaffaqiyatli qaytarildi
 *       404:
 *         description: StudentGroup13 topilmadi
 *       500:
 *         description: Ichki server xatosi
 */
StudentGroup13.get("/getStudentGroup13ById/:id", getStudentGroup13ById);

/**
 * @swagger
 * /studentGroup13/updateStudentGroup13/{id}:
 *   patch:
 *     summary: StudentGroup13 ni yangilash
 *     tags: [StudentGroup13]
 *     description: StudentGroup13 ma'lumotlarini yangilash (kamida bitta maydon kerak)
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Yangilanadigan StudentGroup13 ID si
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
 *               student_id:
 *                 type: string
 *                 example: 665f1c2e8b1e4a0012ab34cd
 *               group_id:
 *                 type: string
 *                 example: 665f1c2e8b1e4a0012ab34ce
 *     responses:
 *       200:
 *         description: StudentGroup13 muvaffaqiyatli yangilandi
 *       400:
 *         description: Yomon so'rov, validatsiya xatosi
 *       404:
 *         description: StudentGroup13 topilmadi
 *       500:
 *         description: Ichki server xatosi
 */
StudentGroup13.patch(
  "/updateStudentGroup13/:id",
  validationSchema(updateStudentGroup13ValidationSchema),
  updateStudentGroup13,
);

/**
 * @swagger
 * /studentGroup13/deleteStudentGroup13/{id}:
 *   delete:
 *     summary: StudentGroup13 ni o'chirish
 *     tags: [StudentGroup13]
 *     description: Berilgan ID bo'yicha StudentGroup13 ni o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: O'chiriladigan StudentGroup13 ID si
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: StudentGroup13 muvaffaqiyatli o'chirildi
 *       404:
 *         description: StudentGroup13 topilmadi
 *       500:
 *         description: Ichki server xatosi
 */
StudentGroup13.delete("/deleteStudentGroup13/:id", deleteStudentGroup13);

module.exports = { StudentGroup13 };
