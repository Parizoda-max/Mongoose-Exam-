const { Schema, model } = require("mongoose");

const group6Schema = new Schema({
  group_name: { type: String, required: true },
  lesson_start_time: { type: String, required: true },
  lesson_continuous: { type: String, required: true },
  lesson_week_day: { type: String, required: true },
  group_stage_idint: {
    type: Schema.Types.ObjectId,
    ref: "stage4",
    required: true,
  },
  room_number: { type: String, required: true },
  room_floor: { type: Number, required: true },
  branch_id: {
    type: Schema.Types.ObjectId,
    ref: "branch5",
    required: true,
  },
  lessons_quant: { type: Number, required: true },
  is_active: { type: Boolean, default: true },
});

const Group6 = model("group6", group6Schema);
module.exports = { Group6 };
