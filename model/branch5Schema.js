const { required } = require("joi");
const { Schema, model } = require("mongoose");

const branch5Schema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  call_number: { type: String, required: true, unique: true, trim: true },
});

const branch5 = model("branch5", branch5Schema);
module.exports = { branch5 };
