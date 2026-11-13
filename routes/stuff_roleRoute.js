const stuffRole = require("express").Router();
const {
  createStuffRole,
  getStuffRole,
  getStuffRoleById,
  updateStuffRole,
  deleteStuffRole,
} = require("../controllers/stuff_role.controller");

/**
 * @swagger
 * tags:
 *   name: StuffRole
 *   description: Xodim va rol bog'lanishlarini boshqarish
 */

/**
 * @swagger
 * /stuff_role/createStuffRole:
 *   post:
 *     summary: Yangi xodim roli yaratish
 *     tags: [StuffRole]
 *     description: Xodim (stuff) va rol (role1) o'rtasida yangi bog'lanish yaratadi.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - stuff_id
 *               - role1_id
 *             properties:
 *               stuff_id:
 *                 type: string
 *                 description: Xodim ID si
 *                 example: "6aeb6b78e7af7d83fed9bd2b"
 *               role1_id:
 *                 type: string
 *                 description: Rol ID si
 *                 example: "6aeb6b52e7af7d83fed9bd2a"
 *     responses:
 *       '201':
 *         description: Xodim roli muvaffaqiyatli yaratildi
 *       '400':
 *         description: Yaroqsiz so'rov
 *       '500':
 *         description: Ichki server xatosi
 */
stuffRole.post("/createStuffRole", createStuffRole);

/**
 * @swagger
 * /stuff_role/getStuffRole:
 *   get:
 *     summary: Barcha xodim rollarini olish
 *     tags: [StuffRole]
 *     description: Barcha xodim-rol bog'lanishlari ro'yxatini olish
 *     responses:
 *       '200':
 *         description: Xodim rollari ro'yxati muvaffaqiyatli qaytarildi
 *       '500':
 *         description: Ichki server xatosi
 */
stuffRole.get("/getStuffRole", getStuffRole);

/**
 * @swagger
 * /stuff_role/getStuffRoleById/{id}:
 *   get:
 *     summary: Xodim rolini ID bo'yicha olish
 *     tags: [StuffRole]
 *     description: Xodim-rol bog'lanishini ID bo'yicha olish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Olinadigan xodim roli ID si
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Xodim roli muvaffaqiyatli qaytarildi
 *       '404':
 *         description: Xodim roli topilmadi
 *       '500':
 *         description: Ichki server xatosi
 */
stuffRole.get("/getStuffRoleById/:id", getStuffRoleById);

/**
 * @swagger
 * /stuff_role/updateStuffRole/{id}:
 *   patch:
 *     summary: Xodim rolini yangilash
 *     tags: [StuffRole]
 *     description: Xodim-rol bog'lanishi ma'lumotlarini yangilash
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Yangilanadigan xodim roli ID si
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
 *               stuff_id:
 *                 type: string
 *                 description: Yangi xodim ID si
 *               role1_id:
 *                 type: string
 *                 description: Yangi rol ID si
 *     responses:
 *       '200':
 *         description: Xodim roli muvaffaqiyatli yangilandi
 *       '400':
 *         description: Yomon so'rov, validatsiya xatosi
 *       '404':
 *         description: Xodim roli topilmadi
 *       '500':
 *         description: Ichki server xatosi
 */
stuffRole.patch("/updateStuffRole/:id", updateStuffRole);

/**
 * @swagger
 * /stuff_role/deleteStuffRole/{id}:
 *   delete:
 *     summary: Xodim rolini o'chirish
 *     tags: [StuffRole]
 *     description: Berilgan ID bo'yicha xodim-rol bog'lanishini o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: O'chiriladigan xodim roli ID si
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Xodim roli muvaffaqiyatli o'chirildi
 *       '404':
 *         description: Xodim roli topilmadi
 *       '500':
 *         description: Ichki server xatosi
 */
stuffRole.delete("/deleteStuffRole/:id", deleteStuffRole);

module.exports = { stuffRole };
