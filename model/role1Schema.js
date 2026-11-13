const { Schema, model } = require("mongoose");

const role1Schema = new Schema({
  name: { type: String, required: true, unique: true, trim: true },
});

const Role1 = model("role1", role1Schema);
module.exports = { Role1 };
