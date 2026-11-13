const { ReasonLid10 } = require("../model/reason_lid10Schema");

// ---------------------- Create ReasonLid10 ---------------------- //
const createReasonLid10 = async (req, res) => {
  try {
    const { reason_lid } = req.body;

    const existingReasonLid10 = await ReasonLid10.findOne({ reason_lid });

    if (existingReasonLid10) {
      return res.status(400).json({
        success: false,
        message: "Bu nomli reason allaqachon mavjud",
      });
    }

    const newReasonLid10 = new ReasonLid10({ reason_lid });
    await newReasonLid10.save();

    res.status(201).json({
      success: true,
      message: "Reason muvaffaqiyatli yaratildi",
      innerData: newReasonLid10,
    });
  } catch (error) {
    console.error("Xato:", error);
    return res.status(500).json({
      success: false,
      message: "Server xatosi: Reason yaratishda xatolik yuz berdi",
    });
  }
};

// ---------------------- Get ReasonLid10 ---------------------- //
const getReasonLid10 = async (req, res) => {
  try {
    const reasons = await ReasonLid10.find({});

    res.status(200).json({
      success: true,
      message: "Barcha reasonlar ro'yxati olingan",
      innerData: reasons,
    });
  } catch (error) {
    console.error("Xato:", error);
    res.status(500).json({
      success: false,
      message: "Server xatosi: Reasonlarni olishda xatolik yuz berdi",
    });
  }
};

// ---------------------- Get ReasonLid10 ById ---------------------- //
const getReasonLid10ById = async (req, res) => {
  try {
    const reason = await ReasonLid10.findById(req.params.id);

    if (!reason) {
      return res.status(404).json({
        success: false,
        message: "Reason topilmadi",
      });
    }

    res.status(200).json({
      success: true,
      message: "Reason topildi",
      innerData: reason,
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
      message: "Internal Server Error",
    });
  }
};

// ---------------------- Update ReasonLid10 ---------------------- //
const updateReasonLid10 = async (req, res) => {
  try {
    const { id } = req.params;
    const { reason_lid } = req.body;

    const existingReasonLid10 = await ReasonLid10.findOne({
      reason_lid,
      _id: { $ne: id },
    });

    if (existingReasonLid10) {
      return res.status(400).json({
        success: false,
        message: "Bu nomli reason allaqachon mavjud",
      });
    }

    const updatedReason = await ReasonLid10.findByIdAndUpdate(
      id,
      { reason_lid },
      { new: true, runValidators: true },
    );

    if (!updatedReason) {
      return res.status(404).json({
        success: false,
        message: "Reason topilmadi",
      });
    }

    res.status(200).json({
      success: true,
      message: "Reason muvaffaqiyatli yangilandi",
      innerData: updatedReason,
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
      message: "Internal server error while updating reason",
      error: error.message,
    });
  }
};

// ---------------------- Delete ReasonLid10 ---------------------- //
const deleteReasonLid10 = async (req, res) => {
  try {
    const reason = await ReasonLid10.findByIdAndDelete(req.params.id);

    if (!reason) {
      return res.status(404).json({
        success: false,
        message: "Reason topilmadi",
      });
    }

    res.status(200).json({
      success: true,
      message: "Reason muvaffaqiyatli o'chirildi",
      innerData: reason,
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
      message: "Error deleting reason",
      error: error.message,
    });
  }
};

module.exports = {
  createReasonLid10,
  getReasonLid10,
  getReasonLid10ById,
  updateReasonLid10,
  deleteReasonLid10,
};
