const { Router } = require("express");
const Group6 = Router();

const {
  createGroup6,
  getGroup6,
  getGroup6ById,
  updateGroup6,
  deleteGroup6,
} = require("../controllers/group6.controller");

const validationSchema = (schema) => (req, res, next) => {
  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).send(validationResult.error.details[0].message);
  }
  next();
};

const {
  createGroup6ValidationSchema,
  updateGroup6ValidationSchema,
} = require("../validation/group6Validation");

/**
 * @swagger
 * tags:
 *   name: Group6
 *   description: Group6 boshqaruvi (CRUD)
 */

/**
 * @swagger
 * /group6/create:
 *   post:
 *     summary: Yangi Group6 yaratish
 *     tags: [Group6]
 *     description: Yangi guruh yaratadi.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - group_name
 *               - lesson_start_time
 *               - lesson_continuous
 *               - lesson_week_day
 *               - group_stage_idint
 *               - room_number
 *               - room_floor
 *               - branch_id
 *               - lessons_quant
 *             properties:
 *               group_name:
 *                 type: string
 *                 example: Node.js N1
 *               lesson_start_time:
 *                 type: string
 *                 example: "14:00"
 *               lesson_continuous:
 *                 type: string
 *                 example: "2 soat"
 *               lesson_week_day:
 *                 type: string
 *                 example: Dushanba, Chorshanba, Juma
 *               group_stage_idint:
 *                 type: string
 *                 description: Stage4 ning ID si
 *                 example: 65f1a2b3c4d5e6f7a8b9c0d1
 *               room_number:
 *                 type: string
 *                 example: "12"
 *               room_floor:
 *                 type: integer
 *                 example: 2
 *               branch_id:
 *                 type: string
 *                 description: Branch5 ning ID si
 *                 example: 65f1a2b3c4d5e6f7a8b9c0d2
 *               lessons_quant:
 *                 type: integer
 *                 example: 36
 *               is_active:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       201:
 *         description: Group6 muvaffaqiyatli yaratildi
 *       400:
 *         description: Yaroqsiz so'rov
 *       404:
 *         description: Stage yoki filial topilmadi
 *       500:
 *         description: Ichki server xatosi
 */
Group6.post(
  "/create",
  validationSchema(createGroup6ValidationSchema),
  createGroup6,
);

/**
 * @swagger
 * /group6/getGroup6:
 *   get:
 *     summary: Barcha Group6 larni olish
 *     tags: [Group6]
 *     description: Barcha guruhlar ro'yxatini olish
 *     responses:
 *       200:
 *         description: Group6 ro'yxati muvaffaqiyatli qaytarildi
 *       500:
 *         description: Ichki server xatosi
 */
Group6.get("/getGroup6", getGroup6);

/**
 * @swagger
 * /group6/getGroup6ById/{id}:
 *   get:
 *     summary: Group6 ni ID bo'yicha olish
 *     tags: [Group6]
 *     description: Group6 ni ID bo'yicha olish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Olinadigan Group6 ID si
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Group6 muvaffaqiyatli qaytarildi
 *       400:
 *         description: Noto'g'ri ID
 *       404:
 *         description: Group6 topilmadi
 *       500:
 *         description: Ichki server xatosi
 */
Group6.get("/getGroup6ById/:id", getGroup6ById);

/**
 * @swagger
 * /group6/updateGroup6/{id}:
 *   patch:
 *     summary: Group6 ni yangilash
 *     tags: [Group6]
 *     description: Group6 ma'lumotlarini yangilash
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Yangilanadigan Group6 ID si
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
 *               group_name:
 *                 type: string
 *                 example: Node.js N2
 *               lesson_start_time:
 *                 type: string
 *                 example: "16:00"
 *               lesson_continuous:
 *                 type: string
 *                 example: "1.5 soat"
 *               lesson_week_day:
 *                 type: string
 *                 example: Seshanba, Payshanba, Shanba
 *               group_stage_idint:
 *                 type: string
 *                 example: 65f1a2b3c4d5e6f7a8b9c0d1
 *               room_number:
 *                 type: string
 *                 example: "15"
 *               room_floor:
 *                 type: integer
 *                 example: 3
 *               branch_id:
 *                 type: string
 *                 example: 65f1a2b3c4d5e6f7a8b9c0d2
 *               lessons_quant:
 *                 type: integer
 *                 example: 48
 *               is_active:
 *                 type: boolean
 *                 example: false
 *     responses:
 *       200:
 *         description: Group6 muvaffaqiyatli yangilandi
 *       400:
 *         description: Yomon so'rov, validatsiya xatosi
 *       404:
 *         description: Group6 topilmadi
 *       500:
 *         description: Ichki server xatosi
 */
Group6.patch(
  "/updateGroup6/:id",
  validationSchema(updateGroup6ValidationSchema),
  updateGroup6,
);

/**
 * @swagger
 * /group6/deleteGroup6/{id}:
 *   delete:
 *     summary: Group6 ni o'chirish
 *     tags: [Group6]
 *     description: Berilgan ID bo'yicha Group6 ni o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: O'chiriladigan Group6 ID si
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Group6 muvaffaqiyatli o'chirildi
 *       400:
 *         description: Noto'g'ri ID
 *       404:
 *         description: Group6 topilmadi
 *       500:
 *         description: Ichki server xatosi
 */
Group6.delete("/deleteGroup6/:id", deleteGroup6);

module.exports = { Group6 };
