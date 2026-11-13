const { Router } = require("express");
const Branch5 = Router();

const {
  createBranch5,
  getBranch5,
  getBranch5ById,
  updateBranch5,
  deleteBranch5,
} = require("../controllers/branch5.controller");

const validationSchema = (schema) => (req, res, next) => {
  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).send(validationResult.error.details[0].message);
  }
  next();
};

const {
  createBranch5ValidationSchema,
  updateBranch5ValidationSchema,
} = require("../validation/branch5Validation");

/**
 * @swagger
 * tags:
 *   name: Branch5
 *   description: Branch5 boshqaruvi (CRUD)
 */

/**
 * @swagger
 * /branch5/create:
 *   post:
 *     summary: Yangi Branch5 yaratish
 *     tags: [Branch5]
 *     description: Yangi Branch5 (filial) yaratadi.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - address
 *               - call_number
 *             properties:
 *               name:
 *                 type: string
 *                 example: Chilonzor filiali
 *               address:
 *                 type: string
 *                 example: Toshkent, Chilonzor tumani, 7-mavze
 *               call_number:
 *                 type: string
 *                 example: "+998901234567"
 *     responses:
 *       201:
 *         description: Branch5 muvaffaqiyatli yaratildi
 *       400:
 *         description: Yaroqsiz so'rov
 *       500:
 *         description: Ichki server xatosi
 */
Branch5.post(
  "/create",
  validationSchema(createBranch5ValidationSchema),
  createBranch5,
);

/**
 * @swagger
 * /branch5/getBranch5:
 *   get:
 *     summary: Barcha Branch5 larni olish
 *     tags: [Branch5]
 *     description: Barcha Branch5 ro'yxatini olish
 *     responses:
 *       200:
 *         description: Branch5 ro'yxati muvaffaqiyatli qaytarildi
 *       500:
 *         description: Ichki server xatosi
 */
Branch5.get("/getBranch5", getBranch5);

/**
 * @swagger
 * /branch5/getBranch5ById/{id}:
 *   get:
 *     summary: Branch5 ni ID bo'yicha olish
 *     tags: [Branch5]
 *     description: Branch5 ni ID bo'yicha olish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Olinadigan Branch5 ID si
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Branch5 muvaffaqiyatli qaytarildi
 *       404:
 *         description: Branch5 topilmadi
 *       500:
 *         description: Ichki server xatosi
 */
Branch5.get("/getBranch5ById/:id", getBranch5ById);

/**
 * @swagger
 * /branch5/updateBranch5/{id}:
 *   patch:
 *     summary: Branch5 ni yangilash
 *     tags: [Branch5]
 *     description: Branch5 ma'lumotlarini yangilash
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Yangilanadigan Branch5 ID si
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
 *               name:
 *                 type: string
 *                 description: Yangi name
 *                 example: Yunusobod filiali
 *               address:
 *                 type: string
 *                 description: Yangi manzil
 *                 example: Toshkent, Yunusobod tumani, 4-mavze
 *               call_number:
 *                 type: string
 *                 description: Yangi telefon raqami
 *                 example: "+998901112233"
 *     responses:
 *       200:
 *         description: Branch5 muvaffaqiyatli yangilandi
 *       400:
 *         description: Yomon so'rov, validatsiya xatosi
 *       404:
 *         description: Branch5 topilmadi
 *       500:
 *         description: Ichki server xatosi
 */
Branch5.patch(
  "/updateBranch5/:id",
  validationSchema(updateBranch5ValidationSchema),
  updateBranch5,
);

/**
 * @swagger
 * /branch5/deleteBranch5/{id}:
 *   delete:
 *     summary: Branch5 ni o'chirish
 *     tags: [Branch5]
 *     description: Berilgan ID bo'yicha Branch5 ni o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: O'chiriladigan Branch5 ID si
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Branch5 muvaffaqiyatli o'chirildi
 *       404:
 *         description: Branch5 topilmadi
 *       500:
 *         description: Ichki server xatosi
 */
Branch5.delete("/deleteBranch5/:id", deleteBranch5);

module.exports = { Branch5 };
