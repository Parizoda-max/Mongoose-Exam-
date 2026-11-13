const { Schema, model } = require("mongoose");

const groupStuffSchema = new Schema({
  group_id: { type: Schema.Types.ObjectId, ref: "group6", default: null },
  stuff_id: { type: Schema.Types.ObjectId, red: "stuff2", default: null },
});

module.exports = model("group_stuff", groupStuffSchema);
