const { Router } = require("express");
const Lid11 = Router();

const {
  createLid11,
  getLid11,
  getLid11ById,
  updateLid11,
  deleteLid11,
} = require("../controllers/lid11.controller");

const validationSchema = (schema) => (req, res, next) => {
  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).send(validationResult.error.details[0].message);
  }
  next();
};

const {
  createLid11ValidationSchema,
  updateLid11ValidationSchema,
} = require("../validation/lid11Validation");

/**
 * @swagger
 * tags:
 *   name: Lid11
 *   description: Lid11 boshqaruvi (CRUD)
 */

/**
 * @swagger
 * /lid11/create:
 *   post:
 *     summary: Yangi Lid11 yaratish
 *     tags: [Lid11]
 *     description: Yangi Lid11 yaratadi.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - first_name
 *               - last_name
 *               - phone_number
 *               - lid_stage_id
 *               - test_date
 *               - trial_lesson_date
 *               - trial_lesson_time
 *               - trial_lesson_group_id
 *               - lid_status_id
 *               - cancel_reson_id
 *             properties:
 *               first_name:
 *                 type: string
 *                 example: Ali
 *               last_name:
 *                 type: string
 *                 example: Valiyev
 *               phone_number:
 *                 type: string
 *                 example: "+998901234567"
 *               lid_stage_id:
 *                 type: integer
 *                 example: 1
 *               test_date:
 *                 type: string
 *                 format: date-time
 *                 example: "2026-11-20T10:00:00.000Z"
 *               trial_lesson_date:
 *                 type: number
 *                 example: 1763712000
 *               trial_lesson_time:
 *                 type: string
 *                 example: "14:30"
 *               trial_lesson_group_id:
 *                 type: integer
 *                 example: 3
 *               lid_status_id:
 *                 type: integer
 *                 example: 2
 *               cancel_reson_id:
 *                 type: integer
 *                 example: 0
 *     responses:
 *       201:
 *         description: Lid11 muvaffaqiyatli yaratildi
 *       400:
 *         description: Yaroqsiz so'rov
 *       500:
 *         description: Ichki server xatosi
 */
Lid11.post(
  "/create",
  validationSchema(createLid11ValidationSchema),
  createLid11,
);

/**
 * @swagger
 * /lid11/getLid11:
 *   get:
 *     summary: Barcha Lid11 larni olish
 *     tags: [Lid11]
 *     description: Barcha Lid11 ro'yxatini olish
 *     responses:
 *       200:
 *         description: Lid11 ro'yxati muvaffaqiyatli qaytarildi
 *       500:
 *         description: Ichki server xatosi
 */
Lid11.get("/getLid11", getLid11);

/**
 * @swagger
 * /lid11/getLid11ById/{id}:
 *   get:
 *     summary: Lid11 ni ID bo'yicha olish
 *     tags: [Lid11]
 *     description: Lid11 ni ID bo'yicha olish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Olinadigan Lid11 ID si
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lid11 muvaffaqiyatli qaytarildi
 *       404:
 *         description: Lid11 topilmadi
 *       500:
 *         description: Ichki server xatosi
 */
Lid11.get("/getLid11ById/:id", getLid11ById);

/**
 * @swagger
 * /lid11/updateLid11/{id}:
 *   patch:
 *     summary: Lid11 ni yangilash
 *     tags: [Lid11]
 *     description: Lid11 ma'lumotlarini yangilash (kamida bitta maydon kerak)
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Yangilanadigan Lid11 ID si
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
 *               first_name:
 *                 type: string
 *                 example: Vali
 *               last_name:
 *                 type: string
 *                 example: Aliyev
 *               phone_number:
 *                 type: string
 *                 example: "+998907654321"
 *               lid_stage_id:
 *                 type: integer
 *                 example: 2
 *               test_date:
 *                 type: string
 *                 format: date-time
 *                 example: "2026-11-25T10:00:00.000Z"
 *               trial_lesson_date:
 *                 type: number
 *                 example: 1764000000
 *               trial_lesson_time:
 *                 type: string
 *                 example: "16:00"
 *               trial_lesson_group_id:
 *                 type: integer
 *                 example: 4
 *               lid_status_id:
 *                 type: integer
 *                 example: 3
 *               cancel_reson_id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Lid11 muvaffaqiyatli yangilandi
 *       400:
 *         description: Yomon so'rov, validatsiya xatosi
 *       404:
 *         description: Lid11 topilmadi
 *       500:
 *         description: Ichki server xatosi
 */
Lid11.patch(
  "/updateLid11/:id",
  validationSchema(updateLid11ValidationSchema),
  updateLid11,
);

/**
 * @swagger
 * /lid11/deleteLid11/{id}:
 *   delete:
 *     summary: Lid11 ni o'chirish
 *     tags: [Lid11]
 *     description: Berilgan ID bo'yicha Lid11 ni o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: O'chiriladigan Lid11 ID si
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lid11 muvaffaqiyatli o'chirildi
 *       404:
 *         description: Lid11 topilmadi
 *       500:
 *         description: Ichki server xatosi
 */
Lid11.delete("/deleteLid11/:id", deleteLid11);

module.exports = { Lid11 };
