const { Stage4 } = require("../model/stage4Schema");

// ----------------------Create Stage4----------------------//
const createStage4 = async (req, res) => {
  try {
    const { name } = req.body;

    const existingStage4 = await Stage4.findOne({ name });

    if (existingStage4) {
      return res.status(400).json({
        success: false,
        message: "Bu nom bilan ro'yxatdan o'tgan stage4 mavjud",
      });
    }

    const newStage4 = new Stage4({ name });
    await newStage4.save();

    res.status(201).json({
      success: true,
      message: "Stage4 muvaffaqiyatli yaratildi",
      innerData: newStage4,
    });
  } catch (error) {
    console.error("Xato:", error);
    return res.status(500).json({
      success: false,
      message: "Server xatosi: Stage4 yaratishda xatolik yuz berdi",
    });
  }
};

// --------------------------Get Stage4------------------------- //
const getStage4 = async (req, res) => {
  try {
    const stage4 = await Stage4.find({});
    res.json({
      success: true,
      message: "Barcha stage4lar ro'yxati olingan",
      innerData: stage4,
    });
  } catch (error) {
    console.error("Error fetching stage4:", error);
    res.status(500).json({
      success: false,
      message: "Server xatosi: Stage4larni olishda xatolik yuz berdi",
    });
  }
};

// ----------------------------Get Stage4 ById------------------//
const getStage4ById = async (req, res) => {
  try {
    const stage4Id = req.params.id;

    const stage4 = await Stage4.findById(stage4Id);
    if (!stage4) {
      return res.status(404).json({
        success: false,
        message: "Stage4 not found",
      });
    }

    res.json({
      success: true,
      message: "Stage4 found",
      stage4,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// --------------Delete Stage4 ---------------------//
const deleteStage4 = async (req, res) => {
  try {
    const { id } = req.params;

    const stage4 = await Stage4.findByIdAndDelete(id);

    if (!stage4) {
      return res.status(404).json({
        success: false,
        message: "Stage4 not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Stage4 deleted successfully",
      stage4,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting stage4",
      error: error.message,
    });
  }
};

// ------------------- Update Stage4 ------------------- //
const updateStage4 = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const stage4 = await Stage4.findByIdAndUpdate(
      id,
      { name },
      { new: true, runValidators: true },
    );

    if (!stage4) {
      return res.status(404).json({
        success: false,
        message: "Stage4 not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Stage4 updated successfully",
      inner_data: stage4,
    });
  } catch (err) {
    console.error(err.message);

    res.status(500).json({
      success: false,
      message: "Internal server error while updating stage4",
      error: err.message,
    });
  }
};

module.exports = {
  createStage4,
  getStage4,
  getStage4ById,
  updateStage4,
  deleteStage4,
};
