const { Router } = require("express");
const Lesson8 = Router();

const {
  createLesson8,
  getLesson8,
  getLesson8ById,
  updateLesson8,
  deleteLesson8,
} = require("../controllers/lesson8.controller");

const validationSchema = (schema) => (req, res, next) => {
  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).send(validationResult.error.details[0].message);
  }
  next();
};

const {
  createLesson8ValidationSchema,
  updateLesson8ValidationSchema,
} = require("../validation/lesson8Validation");

/**
 * @swagger
 * tags:
 *   name: Lesson8
 *   description: Lesson8 boshqaruvi (CRUD)
 */

/**
 * @swagger
 * /lesson8/create:
 *   post:
 *     summary: Yangi Lesson8 yaratish
 *     tags: [Lesson8]
 *     description: Yangi dars yaratadi.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - lesson_theme
 *               - lesson_number
 *               - group_id
 *               - lesson_date
 *             properties:
 *               lesson_theme:
 *                 type: string
 *                 example: Express.js asoslari
 *               lesson_number:
 *                 type: integer
 *                 example: 8
 *               group_id:
 *                 type: string
 *                 description: Group6 ning ID si
 *                 example: 65f1a2b3c4d5e6f7a8b9c0d1
 *               lesson_date:
 *                 type: string
 *                 format: date
 *                 example: "2026-11-12"
 *     responses:
 *       201:
 *         description: Lesson8 muvaffaqiyatli yaratildi
 *       400:
 *         description: Yaroqsiz so'rov
 *       404:
 *         description: Guruh topilmadi
 *       500:
 *         description: Ichki server xatosi
 */
Lesson8.post(
  "/create",
  validationSchema(createLesson8ValidationSchema),
  createLesson8,
);

/**
 * @swagger
 * /lesson8/getLesson8:
 *   get:
 *     summary: Barcha Lesson8 larni olish
 *     tags: [Lesson8]
 *     description: Barcha darslar ro'yxatini olish
 *     responses:
 *       200:
 *         description: Lesson8 ro'yxati muvaffaqiyatli qaytarildi
 *       500:
 *         description: Ichki server xatosi
 */
Lesson8.get("/getLesson8", getLesson8);

/**
 * @swagger
 * /lesson8/getLesson8ById/{id}:
 *   get:
 *     summary: Lesson8 ni ID bo'yicha olish
 *     tags: [Lesson8]
 *     description: Lesson8 ni ID bo'yicha olish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Olinadigan Lesson8 ID si
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lesson8 muvaffaqiyatli qaytarildi
 *       400:
 *         description: Noto'g'ri ID
 *       404:
 *         description: Lesson8 topilmadi
 *       500:
 *         description: Ichki server xatosi
 */
Lesson8.get("/getLesson8ById/:id", getLesson8ById);

/**
 * @swagger
 * /lesson8/updateLesson8/{id}:
 *   patch:
 *     summary: Lesson8 ni yangilash
 *     tags: [Lesson8]
 *     description: Lesson8 ma'lumotlarini yangilash
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Yangilanadigan Lesson8 ID si
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
 *               lesson_theme:
 *                 type: string
 *                 example: MongoDB va Mongoose
 *               lesson_number:
 *                 type: integer
 *                 example: 9
 *               group_id:
 *                 type: string
 *                 example: 65f1a2b3c4d5e6f7a8b9c0d1
 *               lesson_date:
 *                 type: string
 *                 format: date
 *                 example: "2026-11-14"
 *     responses:
 *       200:
 *         description: Lesson8 muvaffaqiyatli yangilandi
 *       400:
 *         description: Yomon so'rov, validatsiya xatosi
 *       404:
 *         description: Lesson8 yoki guruh topilmadi
 *       500:
 *         description: Ichki server xatosi
 */
Lesson8.patch(
  "/updateLesson8/:id",
  validationSchema(updateLesson8ValidationSchema),
  updateLesson8,
);

/**
 * @swagger
 * /lesson8/deleteLesson8/{id}:
 *   delete:
 *     summary: Lesson8 ni o'chirish
 *     tags: [Lesson8]
 *     description: Berilgan ID bo'yicha Lesson8 ni o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: O'chiriladigan Lesson8 ID si
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lesson8 muvaffaqiyatli o'chirildi
 *       400:
 *         description: Noto'g'ri ID
 *       404:
 *         description: Lesson8 topilmadi
 *       500:
 *         description: Ichki server xatosi
 */
Lesson8.delete("/deleteLesson8/:id", deleteLesson8);

module.exports = { Lesson8 };
