const { Lesson8 } = require("../model/lesson8Schema");
const { Group6 } = require("../model/group6Schema");

// ----------------------Create Lesson8----------------------//
const createLesson8 = async (req, res) => {
  try {
    const { lesson_theme, lesson_number, group_id, lesson_date } = req.body;

    const group = await Group6.findById(group_id);
    if (!group) {
      return res.status(404).json({
        success: false,
        message: "Bunday guruh topilmadi",
      });
    }

    const newLesson8 = new Lesson8({
      lesson_theme,
      lesson_number,
      group_id,
      lesson_date,
    });

    await newLesson8.save();

    res.status(201).json({
      success: true,
      message: "Dars muvaffaqiyatli yaratildi",
      innerData: newLesson8,
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
      message: "Server xatosi: Dars yaratishda xatolik yuz berdi",
    });
  }
};

// --------------------------Get Lesson8------------------------- //
const getLesson8 = async (req, res) => {
  try {
    const lessons = await Lesson8.find({}).populate("group_id");

    res.json({
      success: true,
      message: "Barcha darslar ro'yxati olingan",
      innerData: lessons,
    });
  } catch (error) {
    console.error("Xato:", error);
    res.status(500).json({
      success: false,
      message: "Server xatosi: Darslarni olishda xatolik yuz berdi",
    });
  }
};

// ----------------------------Get Lesson8 ById------------------//
const getLesson8ById = async (req, res) => {
  try {
    const lesson = await Lesson8.findById(req.params.id).populate("group_id");

    if (!lesson) {
      return res.status(404).json({
        success: false,
        message: "Dars topilmadi",
      });
    }

    res.json({
      success: true,
      message: "Dars topildi",
      innerData: lesson,
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

// ------------------- Update Lesson8 ------------------- //
const updateLesson8 = async (req, res) => {
  try {
    const { id } = req.params;
    const { lesson_theme, lesson_number, group_id, lesson_date } = req.body;

    if (group_id) {
      const group = await Group6.findById(group_id);
      if (!group) {
        return res.status(404).json({
          success: false,
          message: "Bunday guruh topilmadi",
        });
      }
    }

    const lesson = await Lesson8.findByIdAndUpdate(id, {
      lesson_theme,
      lesson_number,
      group_id,
      lesson_date,
    });

    if (!lesson) {
      return res.status(404).json({
        success: false,
        message: "Dars topilmadi",
      });
    }

    res.status(200).json({
      success: true,
      message: "Dars muvaffaqiyatli yangilandi",
      innerData: lesson,
    });
  } catch (error) {
    console.error("Xato:", error);
    if (error.name === "CastError") {
      return res.status(400).json({ success: false, message: "Noto'g'ri ID" });
    }
    res.status(500).json({
      success: false,
      message: "Internal server error while updating lesson",
      error: error.message,
    });
  }
};

// --------------Delete Lesson8 ---------------------//
const deleteLesson8 = async (req, res) => {
  try {
    const lesson = await Lesson8.findByIdAndDelete(req.params.id);

    if (!lesson) {
      return res.status(404).json({
        success: false,
        message: "Dars topilmadi",
      });
    }

    res.status(200).json({
      success: true,
      message: "Dars muvaffaqiyatli o'chirildi",
      innerData: lesson,
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
      message: "Error deleting lesson",
      error: error.message,
    });
  }
};

module.exports = {
  createLesson8,
  getLesson8,
  getLesson8ById,
  updateLesson8,
  deleteLesson8,
};
