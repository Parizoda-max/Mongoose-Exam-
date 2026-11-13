const { Router } = require("express");
const Stage4 = Router();

const {
  createStage4,
  getStage4,
  getStage4ById,
  updateStage4,
  deleteStage4,
} = require("../controllers/stage4.controller");

const validationSchema = (schema) => (req, res, next) => {
  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).send(validationResult.error.details[0].message);
  }
  next();
};

const {
  createStage4ValidationSchema,
  updateStage4ValidationSchema,
} = require("../validation/stage4Validation");

/**
 * @swagger
 * tags:
 *   name: Stage4
 *   description: Stage4 boshqaruvi (CRUD)
 */

/**
 * @swagger
 * /stage4/create:
 *   post:
 *     summary: Yangi Stage4 yaratish
 *     tags: [Stage4]
 *     description: Yangi Stage4 yaratadi.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 example: Birinchi bosqich
 *     responses:
 *       201:
 *         description: Stage4 muvaffaqiyatli yaratildi
 *       400:
 *         description: Yaroqsiz so'rov
 *       500:
 *         description: Ichki server xatosi
 */
Stage4.post(
  "/create",
  validationSchema(createStage4ValidationSchema),
  createStage4,
);

/**
 * @swagger
 * /stage4/getStage4:
 *   get:
 *     summary: Barcha Stage4 larni olish
 *     tags: [Stage4]
 *     description: Barcha Stage4 ro'yxatini olish
 *     responses:
 *       200:
 *         description: Stage4 ro'yxati muvaffaqiyatli qaytarildi
 *       500:
 *         description: Ichki server xatosi
 */
Stage4.get("/getStage4", getStage4);

/**
 * @swagger
 * /stage4/getStage4ById/{id}:
 *   get:
 *     summary: Stage4 ni ID bo'yicha olish
 *     tags: [Stage4]
 *     description: Stage4 ni ID bo'yicha olish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Olinadigan Stage4 ID si
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Stage4 muvaffaqiyatli qaytarildi
 *       404:
 *         description: Stage4 topilmadi
 *       500:
 *         description: Ichki server xatosi
 */
Stage4.get("/getStage4ById/:id", getStage4ById);

/**
 * @swagger
 * /stage4/updateStage4/{id}:
 *   patch:
 *     summary: Stage4 ni yangilash
 *     tags: [Stage4]
 *     description: Stage4 ma'lumotlarini yangilash
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Yangilanadigan Stage4 ID si
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
 *                 example: Ikkinchi bosqich
 *     responses:
 *       200:
 *         description: Stage4 muvaffaqiyatli yangilandi
 *       400:
 *         description: Yomon so'rov, validatsiya xatosi
 *       404:
 *         description: Stage4 topilmadi
 *       500:
 *         description: Ichki server xatosi
 */
Stage4.patch(
  "/updateStage4/:id",
  validationSchema(updateStage4ValidationSchema),
  updateStage4,
);

/**
 * @swagger
 * /stage4/deleteStage4/{id}:
 *   delete:
 *     summary: Stage4 ni o'chirish
 *     tags: [Stage4]
 *     description: Berilgan ID bo'yicha Stage4 ni o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: O'chiriladigan Stage4 ID si
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Stage4 muvaffaqiyatli o'chirildi
 *       404:
 *         description: Stage4 topilmadi
 *       500:
 *         description: Ichki server xatosi
 */
Stage4.delete("/deleteStage4/:id", deleteStage4);

module.exports = { Stage4 };
