const { Router } = require("express");
const Role1 = Router();

const {
  createRole1,
  getRole1,
  getRole1ById,
  updateRole1,
  deleteRole1,
} = require("../controllers/role1.controller");

const validationSchema = (schema) => (req, res, next) => {
  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).send(validationResult.error.details[0].message);
  }
  next();
};

const {
  createRole1ValidationSchema,
  updateRole1ValidationSchema,
} = require("../validation/role1Validation");

/**
 * @swagger
 * tags:
 *   name: Role1
 *   description: Role1 boshqaruvi (CRUD)
 */

/**
 * @swagger
 * /role1/create:
 *   post:
 *     summary: Yangi Role1 yaratish
 *     tags: [Role1]
 *     description: Yangi Role1 yaratadi.
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
 *                 example: Admin
 *     responses:
 *       201:
 *         description: Role1 muvaffaqiyatli yaratildi
 *       400:
 *         description: Yaroqsiz so'rov
 *       500:
 *         description: Ichki server xatosi
 */
Role1.post(
  "/create",
  validationSchema(createRole1ValidationSchema),
  createRole1,
);

/**
 * @swagger
 * /role1/getRole1:
 *   get:
 *     summary: Barcha Role1 larni olish
 *     tags: [Role1]
 *     description: Barcha Role1 ro'yxatini olish
 *     responses:
 *       200:
 *         description: Role1 ro'yxati muvaffaqiyatli qaytarildi
 *       500:
 *         description: Ichki server xatosi
 */
Role1.get("/getRole1", getRole1);

/**
 * @swagger
 * /role1/getRole1ById/{id}:
 *   get:
 *     summary: Role1 ni ID bo'yicha olish
 *     tags: [Role1]
 *     description: Role1 ni ID bo'yicha olish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Olinadigan Role1 ID si
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Role1 muvaffaqiyatli qaytarildi
 *       404:
 *         description: Role1 topilmadi
 *       500:
 *         description: Ichki server xatosi
 */
Role1.get("/getRole1ById/:id", getRole1ById);

/**
 * @swagger
 * /role1/updateRole1/{id}:
 *   patch:
 *     summary: Role1 ni yangilash
 *     tags: [Role1]
 *     description: Role1 ma'lumotlarini yangilash
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Yangilanadigan Role1 ID si
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
 *                 example: Manager
 *     responses:
 *       200:
 *         description: Role1 muvaffaqiyatli yangilandi
 *       400:
 *         description: Yomon so'rov, validatsiya xatosi
 *       404:
 *         description: Role1 topilmadi
 *       500:
 *         description: Ichki server xatosi
 */
Role1.patch(
  "/updateRole1/:id",
  validationSchema(updateRole1ValidationSchema),
  updateRole1,
);

/**
 * @swagger
 * /role1/deleteRole1/{id}:
 *   delete:
 *     summary: Role1 ni o'chirish
 *     tags: [Role1]
 *     description: Berilgan ID bo'yicha Role1 ni o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: O'chiriladigan Role1 ID si
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Role1 muvaffaqiyatli o'chirildi
 *       404:
 *         description: Role1 topilmadi
 *       500:
 *         description: Ichki server xatosi
 */
Role1.delete("/deleteRole1/:id", deleteRole1);

module.exports = { Role1 };
