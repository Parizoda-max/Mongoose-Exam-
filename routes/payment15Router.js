const { Router } = require("express");
const Payment15 = Router();

const {
  createPayment15,
  getPayment15,
  getPayment15ById,
  updatePayment15,
  deletePayment15,
} = require("../controllers/payment15.controller");

const validationSchema = (schema) => (req, res, next) => {
  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).send(validationResult.error.details[0].message);
  }
  next();
};

const {
  createPayment15ValidationSchema,
  updatePayment15ValidationSchema,
} = require("../validation/payment15Validation");

/**
 * @swagger
 * tags:
 *   name: Payment15
 *   description: Payment15 boshqaruvi (CRUD)
 */

/**
 * @swagger
 * /payment15/create:
 *   post:
 *     summary: Yangi Payment15 yaratish
 *     tags: [Payment15]
 *     description: Student uchun yangi to'lov yozuvini yaratadi.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - student_id
 *               - payment_last_date
 *               - price
 *             properties:
 *               student_id:
 *                 type: string
 *                 description: Student12 ning _id si
 *                 example: 665f1c2e8b1e4a0012ab34cd
 *               payment_last_date:
 *                 type: string
 *                 format: date
 *                 description: To'lovning oxirgi muddati
 *                 example: "2026-12-01"
 *               payment_date:
 *                 type: string
 *                 format: date
 *                 nullable: true
 *                 description: To'lov qilingan sana
 *                 example: "2026-11-28"
 *               price:
 *                 type: number
 *                 example: 450000
 *               is_paid:
 *                 type: boolean
 *                 example: false
 *               total_attent:
 *                 type: integer
 *                 description: Jami qatnashgan darslar soni
 *                 example: 12
 *     responses:
 *       201:
 *         description: Payment15 muvaffaqiyatli yaratildi
 *       400:
 *         description: Yaroqsiz so'rov
 *       500:
 *         description: Ichki server xatosi
 */
Payment15.post(
  "/create",
  validationSchema(createPayment15ValidationSchema),
  createPayment15,
);

/**
 * @swagger
 * /payment15/getPayment15:
 *   get:
 *     summary: Barcha Payment15 larni olish
 *     tags: [Payment15]
 *     description: Barcha Payment15 ro'yxatini olish
 *     responses:
 *       200:
 *         description: Payment15 ro'yxati muvaffaqiyatli qaytarildi
 *       500:
 *         description: Ichki server xatosi
 */
Payment15.get("/getPayment15", getPayment15);

/**
 * @swagger
 * /payment15/getPayment15ById/{id}:
 *   get:
 *     summary: Payment15 ni ID bo'yicha olish
 *     tags: [Payment15]
 *     description: Payment15 ni ID bo'yicha olish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Olinadigan Payment15 ID si
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Payment15 muvaffaqiyatli qaytarildi
 *       404:
 *         description: Payment15 topilmadi
 *       500:
 *         description: Ichki server xatosi
 */
Payment15.get("/getPayment15ById/:id", getPayment15ById);

/**
 * @swagger
 * /payment15/updatePayment15/{id}:
 *   patch:
 *     summary: Payment15 ni yangilash
 *     tags: [Payment15]
 *     description: Payment15 ma'lumotlarini yangilash (kamida bitta maydon kerak)
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Yangilanadigan Payment15 ID si
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
 *               payment_last_date:
 *                 type: string
 *                 format: date
 *                 example: "2026-12-15"
 *               payment_date:
 *                 type: string
 *                 format: date
 *                 nullable: true
 *                 example: "2026-12-10"
 *               price:
 *                 type: number
 *                 example: 500000
 *               is_paid:
 *                 type: boolean
 *                 example: true
 *               total_attent:
 *                 type: integer
 *                 example: 16
 *     responses:
 *       200:
 *         description: Payment15 muvaffaqiyatli yangilandi
 *       400:
 *         description: Yomon so'rov, validatsiya xatosi
 *       404:
 *         description: Payment15 topilmadi
 *       500:
 *         description: Ichki server xatosi
 */
Payment15.patch(
  "/updatePayment15/:id",
  validationSchema(updatePayment15ValidationSchema),
  updatePayment15,
);

/**
 * @swagger
 * /payment15/deletePayment15/{id}:
 *   delete:
 *     summary: Payment15 ni o'chirish
 *     tags: [Payment15]
 *     description: Berilgan ID bo'yicha Payment15 ni o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: O'chiriladigan Payment15 ID si
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Payment15 muvaffaqiyatli o'chirildi
 *       404:
 *         description: Payment15 topilmadi
 *       500:
 *         description: Ichki server xatosi
 */
Payment15.delete("/deletePayment15/:id", deletePayment15);

module.exports = { Payment15 };
