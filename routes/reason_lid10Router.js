const { Router } = require("express");
const ReasonLid10 = Router();

const {
  createReasonLid10,
  getReasonLid10,
  getReasonLid10ById,
  updateReasonLid10,
  deleteReasonLid10,
} = require("../controllers/reason_lid10.controller");

const validationSchema = (schema) => (req, res, next) => {
  const validationResult = schema.validate(req.body);

  if (validationResult.error) {
    return res.status(400).send(validationResult.error.details[0].message);
  }

  next();
};

const {
  createReasonLid10ValidationSchema,
  updateReasonLid10ValidationSchema,
} = require("../validation/reason_lid10Validation");

/**
 * @swagger
 * tags:
 *   name: ReasonLid10
 *   description: ReasonLid10 boshqaruvi (CRUD)
 */

/**
 * @swagger
 * /reasonLid10/create:
 *   post:
 *     summary: Yangi ReasonLid10 yaratish
 *     tags: [ReasonLid10]
 *     description: Yangi reason yaratadi.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - reason_lid
 *             properties:
 *               reason_lid:
 *                 type: string
 *                 example: Customer changed their mind
 *     responses:
 *       201:
 *         description: Reason muvaffaqiyatli yaratildi
 *       400:
 *         description: Validation xatosi yoki reason mavjud
 *       500:
 *         description: Server xatosi
 */
ReasonLid10.post(
  "/create",
  validationSchema(createReasonLid10ValidationSchema),
  createReasonLid10,
);

/**
 * @swagger
 * /reasonLid10/getReasonLid10:
 *   get:
 *     summary: Barcha reasonlarni olish
 *     tags: [ReasonLid10]
 *     responses:
 *       200:
 *         description: Reasonlar ro'yxati
 *       500:
 *         description: Server xatosi
 */
ReasonLid10.get("/getReasonLid10", getReasonLid10);

/**
 * @swagger
 * /reasonLid10/getReasonLid10ById/{id}:
 *   get:
 *     summary: Reasonni ID bo'yicha olish
 *     tags: [ReasonLid10]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Reason topildi
 *       400:
 *         description: Noto'g'ri ID
 *       404:
 *         description: Reason topilmadi
 */
ReasonLid10.get("/getReasonLid10ById/:id", getReasonLid10ById);

/**
 * @swagger
 * /reasonLid10/updateReasonLid10/{id}:
 *   patch:
 *     summary: Reasonni yangilash
 *     tags: [ReasonLid10]
 *     parameters:
 *       - in: path
 *         name: id
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
 *               - reason_lid
 *             properties:
 *               reason_lid:
 *                 type: string
 *                 example: Customer requested cancellation
 *     responses:
 *       200:
 *         description: Reason yangilandi
 *       400:
 *         description: Validation xatosi
 *       404:
 *         description: Reason topilmadi
 */
ReasonLid10.patch(
  "/updateReasonLid10/:id",
  validationSchema(updateReasonLid10ValidationSchema),
  updateReasonLid10,
);

/**
 * @swagger
 * /reasonLid10/deleteReasonLid10/{id}:
 *   delete:
 *     summary: Reasonni o'chirish
 *     tags: [ReasonLid10]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Reason o'chirildi
 *       400:
 *         description: Noto'g'ri ID
 *       404:
 *         description: Reason topilmadi
 */
ReasonLid10.delete("/deleteReasonLid10/:id", deleteReasonLid10);

module.exports = { ReasonLid10 };
