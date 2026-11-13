const { Router } = require("express");
const Student12 = Router();

const {
  createStudent12,
  getStudent12,
  getStudent12ById,
  updateStudent12,
  deleteStudent12,
} = require("../controllers/student12.controller");

const validationSchema = (schema) => (req, res, next) => {
  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).send(validationResult.error.details[0].message);
  }
  next();
};

const {
  createStudent12ValidationSchema,
  updateStudent12ValidationSchema,
} = require("../validation/student12Validation");

/**
 * @swagger
 * tags:
 *   name: Student12
 *   description: Student12 boshqaruvi (CRUD)
 */

/**
 * @swagger
 * /student12/create:
 *   post:
 *     summary: Yangi Student12 yaratish
 *     tags: [Student12]
 *     description: Yangi Student12 yaratadi.
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
 *               - bithday
 *               - gender
 *             properties:
 *               lid_id:
 *                 type: string
 *                 nullable: true
 *                 description: Lid11 ning _id si (ixtiyoriy)
 *                 example: 665f1c2e8b1e4a0012ab34cd
 *               first_name:
 *                 type: string
 *                 example: Ali
 *               last_name:
 *                 type: string
 *                 example: Valiyev
 *               phone_number:
 *                 type: string
 *                 example: "+998901234567"
 *               bithday:
 *                 type: string
 *                 format: date
 *                 example: "2008-05-14"
 *               gender:
 *                 type: string
 *                 example: male
 *     responses:
 *       201:
 *         description: Student12 muvaffaqiyatli yaratildi
 *       400:
 *         description: Yaroqsiz so'rov
 *       500:
 *         description: Ichki server xatosi
 */
Student12.post(
  "/create",
  validationSchema(createStudent12ValidationSchema),
  createStudent12,
);

/**
 * @swagger
 * /student12/getStudent12:
 *   get:
 *     summary: Barcha Student12 larni olish
 *     tags: [Student12]
 *     description: Barcha Student12 ro'yxatini olish
 *     responses:
 *       200:
 *         description: Student12 ro'yxati muvaffaqiyatli qaytarildi
 *       500:
 *         description: Ichki server xatosi
 */
Student12.get("/getStudent12", getStudent12);

/**
 * @swagger
 * /student12/getStudent12ById/{id}:
 *   get:
 *     summary: Student12 ni ID bo'yicha olish
 *     tags: [Student12]
 *     description: Student12 ni ID bo'yicha olish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Olinadigan Student12 ID si
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Student12 muvaffaqiyatli qaytarildi
 *       404:
 *         description: Student12 topilmadi
 *       500:
 *         description: Ichki server xatosi
 */
Student12.get("/getStudent12ById/:id", getStudent12ById);

/**
 * @swagger
 * /student12/updateStudent12/{id}:
 *   patch:
 *     summary: Student12 ni yangilash
 *     tags: [Student12]
 *     description: Student12 ma'lumotlarini yangilash (kamida bitta maydon kerak)
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Yangilanadigan Student12 ID si
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
 *               lid_id:
 *                 type: string
 *                 nullable: true
 *                 description: Lid11 ning _id si
 *                 example: 665f1c2e8b1e4a0012ab34cd
 *               first_name:
 *                 type: string
 *                 example: Vali
 *               last_name:
 *                 type: string
 *                 example: Aliyev
 *               phone_number:
 *                 type: string
 *                 example: "+998907654321"
 *               bithday:
 *                 type: string
 *                 format: date
 *                 example: "2009-01-20"
 *               gender:
 *                 type: string
 *                 example: female
 *     responses:
 *       200:
 *         description: Student12 muvaffaqiyatli yangilandi
 *       400:
 *         description: Yomon so'rov, validatsiya xatosi
 *       404:
 *         description: Student12 topilmadi
 *       500:
 *         description: Ichki server xatosi
 */
Student12.patch(
  "/updateStudent12/:id",
  validationSchema(updateStudent12ValidationSchema),
  updateStudent12,
);

/**
 * @swagger
 * /student12/deleteStudent12/{id}:
 *   delete:
 *     summary: Student12 ni o'chirish
 *     tags: [Student12]
 *     description: Berilgan ID bo'yicha Student12 ni o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: O'chiriladigan Student12 ID si
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Student12 muvaffaqiyatli o'chirildi
 *       404:
 *         description: Student12 topilmadi
 *       500:
 *         description: Ichki server xatosi
 */
Student12.delete("/deleteStudent12/:id", deleteStudent12);

module.exports = { Student12 };
