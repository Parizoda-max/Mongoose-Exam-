const { Group6 } = require("../model/group6Schema");
const { Stage4 } = require("../model/stage4Schema");
const { branch5 } = require("../model/branch5Schema");

// ----------------------Create Group6----------------------//
const createGroup6 = async (req, res) => {
  try {
    const {
      group_name,
      lesson_start_time,
      lesson_continuous,
      lesson_week_day,
      group_stage_idint,
      room_number,
      room_floor,
      branch_id,
      lessons_quant,
      is_active,
    } = req.body;

    const stage = await Stage4.findById(group_stage_idint);
    if (!stage) {
      return res.status(404).json({
        success: false,
        message: "Bunday stage topilmadi",
      });
    }

    const branch = await branch5.findById(branch_id);
    if (!branch) {
      return res.status(404).json({
        success: false,
        message: "Bunday filial topilmadi",
      });
    }

    const newGroup6 = new Group6({
      group_name,
      lesson_start_time,
      lesson_continuous,
      lesson_week_day,
      group_stage_idint,
      room_number,
      room_floor,
      branch_id,
      lessons_quant,
      is_active,
    });

    await newGroup6.save();

    res.status(201).json({
      success: true,
      message: "Guruh muvaffaqiyatli yaratildi",
      innerData: newGroup6,
    });
  } catch (error) {
    console.error("Xato:", error);
    if (error.name === "CastError") {
      return res.status(400).json({
        success: false,
        message: "Noto'g'ri ID",
      });
    }
    return res.status(500).json({
      success: false,
      message: "Server xatosi: Guruh yaratishda xatolik yuz berdi",
    });
  }
};

// --------------------------Get Group6------------------------- //
const getGroup6 = async (req, res) => {
  try {
    const groups = await Group6.find({})
      .populate("group_stage_idint")
      .populate("branch_id");

    res.json({
      success: true,
      message: "Barcha guruhlar ro'yxati olingan",
      innerData: groups,
    });
  } catch (error) {
    console.error("Xato:", error);
    res.status(500).json({
      success: false,
      message: "Server xatosi: Guruhlarni olishda xatolik yuz berdi",
    });
  }
};

// ----------------------------Get Group6 ById------------------//
const getGroup6ById = async (req, res) => {
  try {
    const group = await Group6.findById(req.params.id)
      .populate("group_stage_idint")
      .populate("branch_id");

    if (!group) {
      return res.status(404).json({
        success: false,
        message: "Guruh topilmadi",
      });
    }

    res.json({
      success: true,
      message: "Guruh topildi",
      innerData: group,
    });
  } catch (error) {
    console.error("Xato:", error);
    if (error.name === "CastError") {
      return res.status(400).json({ success: false, message: "Noto'g'ri ID" });
    }
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// ------------------- Update Group6 ------------------- //
const updateGroup6 = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      group_name,
      lesson_start_time,
      lesson_continuous,
      lesson_week_day,
      group_stage_idint,
      room_number,
      room_floor,
      branch_id,
      lessons_quant,
      is_active,
    } = req.body;

    const group = await Group6.findByIdAndUpdate(
      id,
      {
        group_name,
        lesson_start_time,
        lesson_continuous,
        lesson_week_day,
        group_stage_idint,
        room_number,
        room_floor,
        branch_id,
        lessons_quant,
        is_active,
      },
      { new: true, runValidators: true },
    );

    if (!group) {
      return res.status(404).json({
        success: false,
        message: "Guruh topilmadi",
      });
    }

    res.status(200).json({
      success: true,
      message: "Guruh muvaffaqiyatli yangilandi",
      innerData: group,
    });
  } catch (error) {
    console.error("Xato:", error);
    if (error.name === "CastError") {
      return res.status(400).json({ success: false, message: "Noto'g'ri ID" });
    }
    res.status(500).json({
      success: false,
      message: "Internal server error while updating group",
      error: error.message,
    });
  }
};

// --------------Delete Group6 ---------------------//
const deleteGroup6 = async (req, res) => {
  try {
    const group = await Group6.findByIdAndDelete(req.params.id);

    if (!group) {
      return res.status(404).json({
        success: false,
        message: "Guruh topilmadi",
      });
    }

    res.status(200).json({
      success: true,
      message: "Guruh muvaffaqiyatli o'chirildi",
      innerData: group,
    });
  } catch (error) {
    console.error("Xato:", error);
    if (error.name === "CastError") {
      return res.status(400).json({
        success: false,
        message: "Noto'g'ri ID",
      });
    }
    res.status(500).json({
      success: false,
      message: "Error deleting group",
      error: error.message,
    });
  }
};

module.exports = {
  createGroup6,
  getGroup6,
  getGroup6ById,
  updateGroup6,
  deleteGroup6,
};
