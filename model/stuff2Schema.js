const { Schema, model } = require("mongoose");

const stuff2Schema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  phone_number: { type: String, required: true },
  login: { type: String, required: true, unique: true, trim: true },
  parol: { type: String, required: true },
  is_active: { type: Boolean, default: true },
});

module.exports = model("stuff2", stuff2Schema);
