const { StudentLesson14 } = require("../model/studentLesson14Schema");

// ----------------------Create StudentLesson14----------------------//
const createStudentLesson14 = async (req, res) => {
  try {
    const { lesson_id, student_id, is_there, reason, be_paid } = req.body;

    const existingStudentLesson14 = await StudentLesson14.findOne({
      lesson_id,
      student_id,
    });

    if (existingStudentLesson14) {
      return res.status(400).json({
        success: false,
        message: "Bu student uchun bu darsda yozuv allaqachon mavjud",
      });
    }

    const newStudentLesson14 = new StudentLesson14({
      lesson_id,
      student_id,
      is_there,
      reason,
      be_paid,
    });
    await newStudentLesson14.save();

    res.status(201).json({
      success: true,
      message: "StudentLesson14 muvaffaqiyatli yaratildi",
      innerData: newStudentLesson14,
    });
  } catch (error) {
    console.error("Xato:", error);
    return res.status(500).json({
      success: false,
      message: "Server xatosi: StudentLesson14 yaratishda xatolik yuz berdi",
    });
  }
};

// --------------------------Get StudentLesson14------------------------- //
const getStudentLesson14 = async (req, res) => {
  try {
    const studentLesson14 = await StudentLesson14.find({})
      .populate("lesson_id")
      .populate("student_id");
    res.json({
      success: true,
      message: "Barcha studentLesson14lar ro'yxati olingan",
      innerData: studentLesson14,
    });
  } catch (error) {
    console.error("Error fetching studentLesson14:", error);
    res.status(500).json({
      success: false,
      message: "Server xatosi: StudentLesson14larni olishda xatolik yuz berdi",
    });
  }
};

// ----------------------------Get StudentLesson14 ById------------------//
const getStudentLesson14ById = async (req, res) => {
  try {
    const studentLesson14Id = req.params.id;

    const studentLesson14 = await StudentLesson14.findById(studentLesson14Id)
      .populate("lesson_id")
      .populate("student_id");
    if (!studentLesson14) {
      return res.status(404).json({
        success: false,
        message: "StudentLesson14 not found",
      });
    }

    res.json({
      success: true,
      message: "StudentLesson14 found",
      studentLesson14,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// --------------Delete StudentLesson14 ---------------------//
const deleteStudentLesson14 = async (req, res) => {
  try {
    const { id } = req.params;

    const studentLesson14 = await StudentLesson14.findByIdAndDelete(id);

    if (!studentLesson14) {
      return res.status(404).json({
        success: false,
        message: "StudentLesson14 not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "StudentLesson14 deleted successfully",
      studentLesson14,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting studentLesson14",
      error: error.message,
    });
  }
};

// ------------------- Update StudentLesson14 ------------------- //
const updateStudentLesson14 = async (req, res) => {
  try {
    const { id } = req.params;

    const studentLesson14 = await StudentLesson14.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true },
    );

    if (!studentLesson14) {
      return res.status(404).json({
        success: false,
        message: "StudentLesson14 not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "StudentLesson14 updated successfully",
      inner_data: studentLesson14,
    });
  } catch (err) {
    console.error(err.message);

    res.status(500).json({
      success: false,
      message: "Internal server error while updating studentLesson14",
      error: err.message,
    });
  }
};

module.exports = {
  createStudentLesson14,
  getStudentLesson14,
  getStudentLesson14ById,
  updateStudentLesson14,
  deleteStudentLesson14,
};
