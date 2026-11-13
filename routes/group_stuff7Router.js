const { Router } = require("express");
const groupStuff = Router();
const {
  createGroupStuff,
  getGroupStuff,
  getGroupStuffById,
  updateGroupStuff,
  deleteGroupStuff,
} = require("../controllers/group_stuff7.controller");

const validationSchema = (schema) => (req, res, next) => {
  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).send(validationResult.error.details[0].message);
  }
  next();
};

const {
  createGroupStuffValidationSchema,
  updateGroupStuffValidationSchema,
} = require("../validation/group_stuff7Validation");

/**
 * @swagger
 * tags:
 *   name: GroupStuff
 *   description: Guruh va xodim bog'lanishlarini boshqarish
 */

/**
 * @swagger
 * /group_stuff/createGroupStuff:
 *   post:
 *     summary: Yangi guruh-xodim bog'lanishini yaratish
 *     tags: [GroupStuff]
 *     description: Guruh (group) va xodim (stuff) o'rtasida yangi bog'lanish yaratadi.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - group_id
 *               - stuff_id
 *             properties:
 *               group_id:
 *                 type: string
 *                 description: Guruh ID si
 *                 example: "6aeb6b52e7af7d83fed9bd2a"
 *               stuff_id:
 *                 type: string
 *                 description: Xodim ID si
 *                 example: "6aeb6b78e7af7d83fed9bd2b"
 *     responses:
 *       '201':
 *         description: Guruh-xodim bog'lanishi muvaffaqiyatli yaratildi
 *       '400':
 *         description: Yaroqsiz so'rov
 *       '500':
 *         description: Ichki server xatosi
 */
groupStuff.post(
  "/createGroupStuff",
  validationSchema(createGroupStuffValidationSchema),
  createGroupStuff,
);

/**
 * @swagger
 * /group_stuff/getGroupStuff:
 *   get:
 *     summary: Barcha guruh-xodim bog'lanishlarini olish
 *     tags: [GroupStuff]
 *     description: Barcha guruh-xodim bog'lanishlari ro'yxatini olish
 *     responses:
 *       '200':
 *         description: Guruh-xodim bog'lanishlari ro'yxati muvaffaqiyatli qaytarildi
 *       '500':
 *         description: Ichki server xatosi
 */
groupStuff.get("/getGroupStuff", getGroupStuff);

/**
 * @swagger
 * /group_stuff/getGroupStuffById/{id}:
 *   get:
 *     summary: Guruh-xodim bog'lanishini ID bo'yicha olish
 *     tags: [GroupStuff]
 *     description: Guruh-xodim bog'lanishini ID bo'yicha olish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Olinadigan guruh-xodim bog'lanishi ID si
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Guruh-xodim bog'lanishi muvaffaqiyatli qaytarildi
 *       '404':
 *         description: Guruh-xodim bog'lanishi topilmadi
 *       '500':
 *         description: Ichki server xatosi
 */
groupStuff.get("/getGroupStuffById/:id", getGroupStuffById);

/**
 * @swagger
 * /group_stuff/updateGroupStuff/{id}:
 *   patch:
 *     summary: Guruh-xodim bog'lanishini yangilash
 *     tags: [GroupStuff]
 *     description: Guruh-xodim bog'lanishi ma'lumotlarini yangilash
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Yangilanadigan guruh-xodim bog'lanishi ID si
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
 *               group_id:
 *                 type: string
 *                 description: Yangi guruh ID si
 *               stuff_id:
 *                 type: string
 *                 description: Yangi xodim ID si
 *     responses:
 *       '200':
 *         description: Guruh-xodim bog'lanishi muvaffaqiyatli yangilandi
 *       '400':
 *         description: Yomon so'rov, validatsiya xatosi
 *       '404':
 *         description: Guruh-xodim bog'lanishi topilmadi
 *       '500':
 *         description: Ichki server xatosi
 */
groupStuff.patch(
  "/updateGroupStuff/:id",
  validationSchema(updateGroupStuffValidationSchema),
  updateGroupStuff,
);

/**
 * @swagger
 * /group_stuff/deleteGroupStuff/{id}:
 *   delete:
 *     summary: Guruh-xodim bog'lanishini o'chirish
 *     tags: [GroupStuff]
 *     description: Berilgan ID bo'yicha guruh-xodim bog'lanishini o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: O'chiriladigan guruh-xodim bog'lanishi ID si
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Guruh-xodim bog'lanishi muvaffaqiyatli o'chirildi
 *       '404':
 *         description: Guruh-xodim bog'lanishi topilmadi
 *       '500':
 *         description: Ichki server xatosi
 */
groupStuff.delete("/deleteGroupStuff/:id", deleteGroupStuff);

module.exports = { groupStuff };
