const { Student12 } = require("../model/student12Schema");

// ----------------------Create Student12----------------------//
const createStudent12 = async (req, res) => {
  try {
    const { lid_id, first_name, last_name, phone_number, bithday, gender } =
      req.body;

    const existingStudent12 = await Student12.findOne({ phone_number });

    if (existingStudent12) {
      return res.status(400).json({
        success: false,
        message: "Bu telefon raqami bilan ro'yxatdan o'tgan student12 mavjud",
      });
    }

    const newStudent12 = new Student12({
      lid_id,
      first_name,
      last_name,
      phone_number,
      bithday,
      gender,
    });
    await newStudent12.save();

    res.status(201).json({
      success: true,
      message: "Student12 muvaffaqiyatli yaratildi",
      innerData: newStudent12,
    });
  } catch (error) {
    console.error("Xato:", error);
    return res.status(500).json({
      success: false,
      message: "Server xatosi: Student12 yaratishda xatolik yuz berdi",
    });
  }
};

// --------------------------Get Student12------------------------- //
const getStudent12 = async (req, res) => {
  try {
    const student12 = await Student12.find({}).populate("lid_id");
    res.json({
      success: true,
      message: "Barcha student12lar ro'yxati olingan",
      innerData: student12,
    });
  } catch (error) {
    console.error("Error fetching student12:", error);
    res.status(500).json({
      success: false,
      message: "Server xatosi: Student12larni olishda xatolik yuz berdi",
    });
  }
};

// ----------------------------Get Student12 ById------------------//
const getStudent12ById = async (req, res) => {
  try {
    const student12Id = req.params.id;

    const student12 = await Student12.findById(student12Id).populate("lid_id");
    if (!student12) {
      return res.status(404).json({
        success: false,
        message: "Student12 not found",
      });
    }

    res.json({
      success: true,
      message: "Student12 found",
      student12,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// --------------Delete Student12 ---------------------//
const deleteStudent12 = async (req, res) => {
  try {
    const { id } = req.params;

    const student12 = await Student12.findByIdAndDelete(id);

    if (!student12) {
      return res.status(404).json({
        success: false,
        message: "Student12 not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Student12 deleted successfully",
      student12,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting student12",
      error: error.message,
    });
  }
};

// ------------------- Update Student12 ------------------- //
const updateStudent12 = async (req, res) => {
  try {
    const { id } = req.params;

    const student12 = await Student12.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!student12) {
      return res.status(404).json({
        success: false,
        message: "Student12 not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Student12 updated successfully",
      inner_data: student12,
    });
  } catch (err) {
    console.error(err.message);

    res.status(500).json({
      success: false,
      message: "Internal server error while updating student12",
      error: err.message,
    });
  }
};

module.exports = {
  createStudent12,
  getStudent12,
  getStudent12ById,
  updateStudent12,
  deleteStudent12,
};
