const { Router } = require("express");
const LidStatus9 = Router();

const {
  createLidStatus9,
  getLidStatus9,
  getLidStatus9ById,
  updateLidStatus9,
  deleteLidStatus9,
} = require("../controllers/lidStatus9.controller");

const validationSchema = (schema) => (req, res, next) => {
  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).send(validationResult.error.details[0].message);
  }
  next();
};

const {
  createLidStatus9ValidationSchema,
  updateLidStatus9ValidationSchema,
} = require("../validation/lid_status9Validation");

/**
 * @swagger
 * tags:
 *   name: LidStatus9
 *   description: LidStatus9 boshqaruvi (CRUD)
 */

/**
 * @swagger
 * /lidStatus9/create:
 *   post:
 *     summary: Yangi LidStatus9 yaratish
 *     tags: [LidStatus9]
 *     description: Yangi lid statusini yaratadi.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - status
 *             properties:
 *               status:
 *                 type: string
 *                 example: Yangi
 *     responses:
 *       201:
 *         description: LidStatus9 muvaffaqiyatli yaratildi
 *       400:
 *         description: Yaroqsiz so'rov yoki status allaqachon mavjud
 *       500:
 *         description: Ichki server xatosi
 */
LidStatus9.post(
  "/create",
  validationSchema(createLidStatus9ValidationSchema),
  createLidStatus9,
);

/**
 * @swagger
 * /lidStatus9/getLidStatus9:
 *   get:
 *     summary: Barcha LidStatus9 larni olish
 *     tags: [LidStatus9]
 *     description: Barcha statuslar ro'yxatini olish
 *     responses:
 *       200:
 *         description: LidStatus9 ro'yxati muvaffaqiyatli qaytarildi
 *       500:
 *         description: Ichki server xatosi
 */
LidStatus9.get("/getLidStatus9", getLidStatus9);

/**
 * @swagger
 * /lidStatus9/getLidStatus9ById/{id}:
 *   get:
 *     summary: LidStatus9 ni ID bo'yicha olish
 *     tags: [LidStatus9]
 *     description: LidStatus9 ni ID bo'yicha olish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Olinadigan LidStatus9 ID si
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: LidStatus9 muvaffaqiyatli qaytarildi
 *       400:
 *         description: Noto'g'ri ID
 *       404:
 *         description: LidStatus9 topilmadi
 *       500:
 *         description: Ichki server xatosi
 */
LidStatus9.get("/getLidStatus9ById/:id", getLidStatus9ById);

/**
 * @swagger
 * /lidStatus9/updateLidStatus9/{id}:
 *   patch:
 *     summary: LidStatus9 ni yangilash
 *     tags: [LidStatus9]
 *     description: LidStatus9 ma'lumotlarini yangilash
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Yangilanadigan LidStatus9 ID si
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - status
 *             properties:
 *               status:
 *                 type: string
 *                 example: Qiziqish bildirdi
 *     responses:
 *       200:
 *         description: LidStatus9 muvaffaqiyatli yangilandi
 *       400:
 *         description: Yomon so'rov, validatsiya xatosi yoki status mavjud
 *       404:
 *         description: LidStatus9 topilmadi
 *       500:
 *         description: Ichki server xatosi
 */
LidStatus9.patch(
  "/updateLidStatus9/:id",
  validationSchema(updateLidStatus9ValidationSchema),
  updateLidStatus9,
);

/**
 * @swagger
 * /lidStatus9/deleteLidStatus9/{id}:
 *   delete:
 *     summary: LidStatus9 ni o'chirish
 *     tags: [LidStatus9]
 *     description: Berilgan ID bo'yicha LidStatus9 ni o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: O'chiriladigan LidStatus9 ID si
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: LidStatus9 muvaffaqiyatli o'chirildi
 *       400:
 *         description: Noto'g'ri ID
 *       404:
 *         description: LidStatus9 topilmadi
 *       500:
 *         description: Ichki server xatosi
 */
LidStatus9.delete("/deleteLidStatus9/:id", deleteLidStatus9);

module.exports = { LidStatus9 };
