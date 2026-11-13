const { StudentGroup13 } = require("../model/student_group13Schema");

// ----------------------Create StudentGroup13----------------------//
const createStudentGroup13 = async (req, res) => {
  try {
    const { student_id, group_id } = req.body;

    const existingStudentGroup13 = await StudentGroup13.findOne({
      student_id,
      group_id,
    });

    if (existingStudentGroup13) {
      return res.status(400).json({
        success: false,
        message: "Bu student bu guruhga allaqachon biriktirilgan",
      });
    }

    const newStudentGroup13 = new StudentGroup13({ student_id, group_id });
    await newStudentGroup13.save();

    res.status(201).json({
      success: true,
      message: "StudentGroup13 muvaffaqiyatli yaratildi",
      innerData: newStudentGroup13,
    });
  } catch (error) {
    console.error("Xato:", error);
    return res.status(500).json({
      success: false,
      message: "Server xatosi: StudentGroup13 yaratishda xatolik yuz berdi",
    });
  }
};

// --------------------------Get StudentGroup13------------------------- //
const getStudentGroup13 = async (req, res) => {
  try {
    const studentGroup13 = await StudentGroup13.find({})
      .populate("student_id")
      .populate("group_id");
    res.json({
      success: true,
      message: "Barcha studentGroup13lar ro'yxati olingan",
      innerData: studentGroup13,
    });
  } catch (error) {
    console.error("Error fetching studentGroup13:", error);
    res.status(500).json({
      success: false,
      message: "Server xatosi: StudentGroup13larni olishda xatolik yuz berdi",
    });
  }
};

// ----------------------------Get StudentGroup13 ById------------------//
const getStudentGroup13ById = async (req, res) => {
  try {
    const studentGroup13Id = req.params.id;

    const studentGroup13 = await StudentGroup13.findById(studentGroup13Id)
      .populate("student_id")
      .populate("group_id");
    if (!studentGroup13) {
      return res.status(404).json({
        success: false,
        message: "StudentGroup13 not found",
      });
    }

    res.json({
      success: true,
      message: "StudentGroup13 found",
      studentGroup13,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// --------------Delete StudentGroup13 ---------------------//
const deleteStudentGroup13 = async (req, res) => {
  try {
    const { id } = req.params;

    const studentGroup13 = await StudentGroup13.findByIdAndDelete(id);

    if (!studentGroup13) {
      return res.status(404).json({
        success: false,
        message: "StudentGroup13 not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "StudentGroup13 deleted successfully",
      studentGroup13,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting studentGroup13",
      error: error.message,
    });
  }
};

// ------------------- Update StudentGroup13 ------------------- //
const updateStudentGroup13 = async (req, res) => {
  try {
    const { id } = req.params;

    const studentGroup13 = await StudentGroup13.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true },
    );

    if (!studentGroup13) {
      return res.status(404).json({
        success: false,
        message: "StudentGroup13 not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "StudentGroup13 updated successfully",
      inner_data: studentGroup13,
    });
  } catch (err) {
    console.error(err.message);

    res.status(500).json({
      success: false,
      message: "Internal server error while updating studentGroup13",
      error: err.message,
    });
  }
};

module.exports = {
  createStudentGroup13,
  getStudentGroup13,
  getStudentGroup13ById,
  updateStudentGroup13,
  deleteStudentGroup13,
};
