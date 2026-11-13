const { Schema, model } = require("mongoose");

const lidStatus9Schema = new Schema({
  status: { type: String, required: true, unique: true, trim: true },
});

const lidStatus9 = model("lidStatus", lidStatus9Schema);
module.exports = { lidStatus9 };
