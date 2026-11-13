const { Schema, model } = require("mongoose");

const reasonLid10Schema = new Schema({
  reason_lid: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
});

const ReasonLid10 = model("reasonLid10", reasonLid10Schema);

module.exports = { ReasonLid10 };
