const { Lid11 } = require("../model/lid11Schema");

// ----------------------Create Lid11----------------------//
const createLid11 = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      phone_number,
      lid_stage_id,
      test_date,
      trial_lesson_date,
      trial_lesson_time,
      trial_lesson_group_id,
      lid_status_id,
      cancel_reson_id,
    } = req.body;

    const existingLid11 = await Lid11.findOne({ phone_number });

    if (existingLid11) {
      return res.status(400).json({
        success: false,
        message: "Bu telefon raqami bilan ro'yxatdan o'tgan lid11 mavjud",
      });
    }

    const newLid11 = new Lid11({
      first_name,
      last_name,
      phone_number,
      lid_stage_id,
      test_date,
      trial_lesson_date,
      trial_lesson_time,
      trial_lesson_group_id,
      lid_status_id,
      cancel_reson_id,
    });
    await newLid11.save();

    res.status(201).json({
      success: true,
      message: "Lid11 muvaffaqiyatli yaratildi",
      innerData: newLid11,
    });
  } catch (error) {
    console.error("Xato:", error);
    return res.status(500).json({
      success: false,
      message: "Server xatosi: Lid11 yaratishda xatolik yuz berdi",
    });
  }
};

// --------------------------Get Lid11------------------------- //
const getLid11 = async (req, res) => {
  try {
    const lid11 = await Lid11.find({});
    res.json({
      success: true,
      message: "Barcha lid11lar ro'yxati olingan",
      innerData: lid11,
    });
  } catch (error) {
    console.error("Error fetching lid11:", error);
    res.status(500).json({
      success: false,
      message: "Server xatosi: Lid11larni olishda xatolik yuz berdi",
    });
  }
};

// ----------------------------Get Lid11 ById------------------//
const getLid11ById = async (req, res) => {
  try {
    const lid11Id = req.params.id;

    const lid11 = await Lid11.findById(lid11Id);
    if (!lid11) {
      return res.status(404).json({
        success: false,
        message: "Lid11 not found",
      });
    }

    res.json({
      success: true,
      message: "Lid11 found",
      lid11,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// --------------Delete Lid11 ---------------------//
const deleteLid11 = async (req, res) => {
  try {
    const { id } = req.params;

    const lid11 = await Lid11.findByIdAndDelete(id);

    if (!lid11) {
      return res.status(404).json({
        success: false,
        message: "Lid11 not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Lid11 deleted successfully",
      lid11,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting lid11",
      error: error.message,
    });
  }
};

// ------------------- Update Lid11 ------------------- //
const updateLid11 = async (req, res) => {
  try {
    const { id } = req.params;

    const lid11 = await Lid11.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!lid11) {
      return res.status(404).json({
        success: false,
        message: "Lid11 not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Lid11 updated successfully",
      inner_data: lid11,
    });
  } catch (err) {
    console.error(err.message);

    res.status(500).json({
      success: false,
      message: "Internal server error while updating lid11",
      error: err.message,
    });
  }
};

module.exports = {
  createLid11,
  getLid11,
  getLid11ById,
  updateLid11,
  deleteLid11,
};
