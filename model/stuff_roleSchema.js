const { Schema, model } = require("mongoose");

const stuff_roleSchema = new Schema({
  stuff_id: { type: Schema.Types.ObjectId, ref: "stuff2", default: null },
  role1_id: { type: Schema.Types.ObjectId, ref: "role1", default: null },
});

module.exports = model("stuff_role", stuff_roleSchema);
