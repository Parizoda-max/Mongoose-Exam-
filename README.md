# Mongoose Exam

O'quv markaz (CRM) uchun REST API. Loyiha Node.js, Express va MongoDB (Mongoose) asosida yozilgan. Barcha endpointlar Swagger orqali hujjatlashtirilgan.

## Texnologiyalar

- Node.js
- Express
- MongoDB va Mongoose
- Joi (validatsiya)
- Swagger (`swagger-jsdoc`, `swagger-ui-express`)
- dotenv, cors

## O'rnatish

1. Repozitoriyni yuklab oling:

```bash
git clone https://github.com/username/mongoose-exam.git
cd mongoose-exam
```

2. Kutubxonalarni o'rnating:

```bash
npm install
```

3. Loyiha ildizida `.env` faylini yarating:

```
PORT=3000
MONGODB_URL=mongodb+srv://<user>:<password>@<cluster>/<dbname>
```

4. Serverni ishga tushiring:

```bash
node index.js
```

Server `http://localhost:3000` manzilida ishlaydi.

## Swagger hujjati

Server ishga tushgach, barcha endpointlar shu sahifada ko'rinadi va sinab ko'rish mumkin:

```
http://localhost:3000/api-docs
```

## Loyiha tuzilishi

```
index.js          Server, MongoDB ulanishi va routerlar
routes/           Routerlar va Swagger izohlari
controllers/      CRUD logikasi
validation/       Joi validatsiya sxemalari
model/            Mongoose sxemalari
```

## Jadvallar va yo'llar

| Jadval | Yo'l |
| --- | --- |
| Role1 | `/role1` |
| Stuff2 | `/stuff2` |
| Stuff_role | `/stuff_role` |
| Stage4 | `/stage4` |
| Branch5 | `/branch5` |
| Group6 | `/group6` |
| Group_stuff | `/group_stuff` |
| Lesson8 | `/lesson8` |
| LidStatus9 | `/lidStatus9` |
| ReasonLid10 | `/reasonLid10` |
| Lid11 | `/lid11` |
| Student12 | `/student12` |
| StudentGroup13 | `/studentGroup13` |
| StudentLesson14 | `/studentLesson14` |
| Payment15 | `/payment15` |

## Endpointlar (namuna: Student12)

Har bir jadval uchun CRUD amallari bir xil tuzilmada ishlaydi:

| Metod | Yo'l | Vazifasi |
| --- | --- | --- |
| POST | `/student12/create` | Yangi yozuv yaratish |
| GET | `/student12/getStudent12` | Barcha yozuvlarni olish |
| GET | `/student12/getStudent12ById/:id` | ID bo'yicha olish |
| PATCH | `/student12/updateStudent12/:id` | Yozuvni yangilash |
| DELETE | `/student12/deleteStudent12/:id` | Yozuvni o'chirish |

Boshqa jadvallarda ham xuddi shunday: `/<jadval>/create`, `/<jadval>/get<Jadval>`, `/<jadval>/get<Jadval>ById/:id`, `/<jadval>/update<Jadval>/:id`, `/<jadval>/delete<Jadval>/:id`.

## Javob formati

Muvaffaqiyatli javob:

```json
{
  "success": true,
  "message": "Student12 muvaffaqiyatli yaratildi",
  "innerData": {}
}
```

Xato javobi:

```json
{
  "success": false,
  "message": "Student12 not found"
}
```

Validatsiya xatosi `400` status bilan qaytadi.

## Jadvallar orasidagi bog'lanishlar

- `Student12.lid_id` bog'lanadi `Lid11` ga
- `StudentGroup13.student_id` bog'lanadi `Student12` ga, `group_id` esa `Group6` ga
- `StudentLesson14.student_id` bog'lanadi `Student12` ga, `lesson_id` esa `Lesson8` ga
- `Payment15.student_id` bog'lanadi `Student12` ga

Ro'yxat va ID bo'yicha olishda bog'langan ma'lumotlar `populate` orqali to'liq qaytadi.
