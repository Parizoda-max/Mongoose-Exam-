const { Router } = require("express");
const Stuff2 = Router();

const {
  createStuff2,
  getStuff2,
  getStuff2ById,
  updateStuff2,
  deleteStuff2,
} = require("../controllers/stuff2.controller");

const validationSchema = (schema) => (req, res, next) => {
  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).send(validationResult.error.details[0].message);
  }
  next();
};

const {
  createStuff2ValidationSchema,
  updateStuff2ValidationSchema,
} = require("../validation/stuff2Validation");

/**
 * @swagger
 * tags:
 *   name: Stuff2
 *   description: Xodimlar boshqaruvi (CRUD)
 */

/**
 * @swagger
 * /stuff2/create:
 *   post:
 *     summary: Yangi xodim yaratish
 *     tags: [Stuff2]
 *     description: Yangi xodim yaratadi. Parol hash qilib saqlanadi.
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
 *               - login
 *               - parol
 *             properties:
 *               first_name:
 *                 type: string
 *                 example: John
 *               last_name:
 *                 type: string
 *                 example: Doe
 *               phone_number:
 *                 type: string
 *                 example: "+998901234567"
 *               login:
 *                 type: string
 *                 example: john_doe
 *               parol:
 *                 type: string
 *                 example: password123!
 *               is_active:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       201:
 *         description: Xodim muvaffaqiyatli yaratildi
 *       400:
 *         description: Yaroqsiz so'rov yoki login band
 *       500:
 *         description: Ichki server xatosi
 */
Stuff2.post(
  "/create",
  validationSchema(createStuff2ValidationSchema),
  createStuff2,
);

/**
 * @swagger
 * /stuff2/getStuff2:
 *   get:
 *     summary: Barcha xodimlarni olish
 *     tags: [Stuff2]
 *     description: Barcha xodimlar ro'yxatini olish (parolsiz)
 *     responses:
 *       200:
 *         description: Xodimlar ro'yxati muvaffaqiyatli qaytarildi
 *       500:
 *         description: Ichki server xatosi
 */
Stuff2.get("/getStuff2", getStuff2);

/**
 * @swagger
 * /stuff2/getStuff2ById/{id}:
 *   get:
 *     summary: Xodimni ID bo'yicha olish
 *     tags: [Stuff2]
 *     description: Xodimni ID bo'yicha olish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Olinadigan xodim ID si
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Xodim muvaffaqiyatli qaytarildi
 *       404:
 *         description: Xodim topilmadi
 *       500:
 *         description: Ichki server xatosi
 */
Stuff2.get("/getStuff2ById/:id", getStuff2ById);

/**
 * @swagger
 * /stuff2/updateStuff2/{id}:
 *   patch:
 *     summary: Xodimni yangilash
 *     tags: [Stuff2]
 *     description: Xodim ma'lumotlarini yangilash (faqat yuborilgan maydonlar o'zgaradi)
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Yangilanadigan xodim ID si
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
 *                 description: Yangi ism
 *               last_name:
 *                 type: string
 *                 description: Yangi familiya
 *               phone_number:
 *                 type: string
 *                 description: Yangi telefon raqam
 *                 example: "+998901234567"
 *               login:
 *                 type: string
 *                 description: Yangi login
 *               parol:
 *                 type: string
 *                 description: Yangi parol
 *               is_active:
 *                 type: boolean
 *                 description: Xodim faolmi
 *     responses:
 *       200:
 *         description: Xodim muvaffaqiyatli yangilandi
 *       400:
 *         description: Yomon so'rov, validatsiya xatosi
 *       404:
 *         description: Xodim topilmadi
 *       500:
 *         description: Ichki server xatosi
 */
Stuff2.patch(
  "/updateStuff2/:id",
  validationSchema(updateStuff2ValidationSchema),
  updateStuff2,
);

/**
 * @swagger
 * /stuff2/deleteStuff2/{id}:
 *   delete:
 *     summary: Xodimni o'chirish
 *     tags: [Stuff2]
 *     description: Berilgan ID bo'yicha xodimni o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: O'chiriladigan xodim ID si
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Xodim muvaffaqiyatli o'chirildi
 *       404:
 *         description: Xodim topilmadi
 *       500:
 *         description: Ichki server xatosi
 */
Stuff2.delete("/deleteStuff2/:id", deleteStuff2);

module.exports = { Stuff2 };
