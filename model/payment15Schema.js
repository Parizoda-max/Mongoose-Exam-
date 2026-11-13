const { Schema, model } = require("mongoose");

const payment15Schema = new Schema({
  student_id: { type: Schema.Types.ObjectId, ref: "student12", required: true },
  payment_last_date: { type: Date, required: true },
  payment_date: { type: Date, default: null },
  price: { type: Number, required: true, min: 0 },
  is_paid: { type: Boolean, default: false },
  total_attent: { type: Number, default: 0, min: 0 },
});

const Payment15 = model("payment15", payment15Schema);

module.exports = { Payment15 };
