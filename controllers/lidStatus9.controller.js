const { lidStatus9 } = require("../model/lid_status9Schema");

// ----------------------Create LidStatus9----------------------//
const createLidStatus9 = async (req, res) => {
  try {
    const { status } = req.body;

    const existingLidStatus9 = await lidStatus9.findOne({ status });

    if (existingLidStatus9) {
      return res.status(400).json({
        success: false,
        message: "Bu nomli status allaqachon mavjud",
      });
    }

    const newLidStatus9 = new lidStatus9({ status });
    await newLidStatus9.save();

    res.status(201).json({
      success: true,
      message: "Status muvaffaqiyatli yaratildi",
      innerData: newLidStatus9,
    });
  } catch (error) {
    console.error("Xato:", error);
    return res.status(500).json({
      success: false,
      message: "Server xatosi: Status yaratishda xatolik yuz berdi",
    });
  }
};

// --------------------------Get LidStatus9------------------------- //
const getLidStatus9 = async (req, res) => {
  try {
    const statuses = await lidStatus9.find({});

    res.json({
      success: true,
      message: "Barcha statuslar ro'yxati olingan",
      innerData: statuses,
    });
  } catch (error) {
    console.error("Xato:", error);
    res.status(500).json({
      success: false,
      message: "Server xatosi: Statuslarni olishda xatolik yuz berdi",
    });
  }
};

// ----------------------------Get LidStatus9 ById------------------//
const getLidStatus9ById = async (req, res) => {
  try {
    const status = await lidStatus9.findById(req.params.id);

    if (!status) {
      return res.status(404).json({
        success: false,
        message: "Status topilmadi",
      });
    }

    res.json({
      success: true,
      message: "Status topildi",
      innerData: status,
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

// ------------------- Update LidStatus9 ------------------- //
const updateLidStatus9 = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const existingLidStatus9 = await lidStatus9.findOne({
      status,
      _id: { $ne: id },
    });

    if (existingLidStatus9) {
      return res.status(400).json({
        success: false,
        message: "Bu nomli status allaqachon mavjud",
      });
    }

    const updatedStatus = await lidStatus9.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true },
    );

    if (!updatedStatus) {
      return res.status(404).json({
        success: false,
        message: "Status topilmadi",
      });
    }

    res.status(200).json({
      success: true,
      message: "Status muvaffaqiyatli yangilandi",
      innerData: updatedStatus,
    });
  } catch (error) {
    console.error("Xato:", error);
    if (error.name === "CastError") {
      return res.status(400).json({ success: false, message: "Noto'g'ri ID" });
    }
    res.status(500).json({
      success: false,
      message: "Internal server error while updating status",
      error: error.message,
    });
  }
};

// --------------Delete LidStatus9 ---------------------//
const deleteLidStatus9 = async (req, res) => {
  try {
    const status = await lidStatus9.findByIdAndDelete(req.params.id);

    if (!status) {
      return res.status(404).json({
        success: false,
        message: "Status topilmadi",
      });
    }

    res.status(200).json({
      success: true,
      message: "Status muvaffaqiyatli o'chirildi",
      innerData: status,
    });
  } catch (error) {
    console.error("Xato:", error);
    if (error.name === "CastError") {
      return res.status(400).json({ success: false, message: "Noto'g'ri ID" });
    }
    res.status(500).json({
      success: false,
      message: "Error deleting status",
      error: error.message,
    });
  }
};

module.exports = {
  createLidStatus9,
  getLidStatus9,
  getLidStatus9ById,
  updateLidStatus9,
  deleteLidStatus9,
};
