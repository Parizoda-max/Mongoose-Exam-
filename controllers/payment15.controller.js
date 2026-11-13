const { Payment15 } = require("../model/payment15Schema");

// ----------------------Create Payment15----------------------//
const createPayment15 = async (req, res) => {
  try {
    const {
      student_id,
      payment_last_date,
      payment_date,
      price,
      is_paid,
      total_attent,
    } = req.body;

    const newPayment15 = new Payment15({
      student_id,
      payment_last_date,
      payment_date,
      price,
      is_paid,
      total_attent,
    });
    await newPayment15.save();

    res.status(201).json({
      success: true,
      message: "Payment15 muvaffaqiyatli yaratildi",
      innerData: newPayment15,
    });
  } catch (error) {
    console.error("Xato:", error);
    return res.status(500).json({
      success: false,
      message: "Server xatosi: Payment15 yaratishda xatolik yuz berdi",
    });
  }
};

// --------------------------Get Payment15------------------------- //
const getPayment15 = async (req, res) => {
  try {
    const payment15 = await Payment15.find({}).populate("student_id");
    res.json({
      success: true,
      message: "Barcha payment15lar ro'yxati olingan",
      innerData: payment15,
    });
  } catch (error) {
    console.error("Error fetching payment15:", error);
    res.status(500).json({
      success: false,
      message: "Server xatosi: Payment15larni olishda xatolik yuz berdi",
    });
  }
};

// ----------------------------Get Payment15 ById------------------//
const getPayment15ById = async (req, res) => {
  try {
    const payment15Id = req.params.id;

    const payment15 =
      await Payment15.findById(payment15Id).populate("student_id");
    if (!payment15) {
      return res.status(404).json({
        success: false,
        message: "Payment15 not found",
      });
    }

    res.json({
      success: true,
      message: "Payment15 found",
      payment15,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// --------------Delete Payment15 ---------------------//
const deletePayment15 = async (req, res) => {
  try {
    const { id } = req.params;

    const payment15 = await Payment15.findByIdAndDelete(id);

    if (!payment15) {
      return res.status(404).json({
        success: false,
        message: "Payment15 not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Payment15 deleted successfully",
      payment15,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting payment15",
      error: error.message,
    });
  }
};

// ------------------- Update Payment15 ------------------- //
const updatePayment15 = async (req, res) => {
  try {
    const { id } = req.params;

    const payment15 = await Payment15.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!payment15) {
      return res.status(404).json({
        success: false,
        message: "Payment15 not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Payment15 updated successfully",
      inner_data: payment15,
    });
  } catch (err) {
    console.error(err.message);

    res.status(500).json({
      success: false,
      message: "Internal server error while updating payment15",
      error: err.message,
    });
  }
};

module.exports = {
  createPayment15,
  getPayment15,
  getPayment15ById,
  updatePayment15,
  deletePayment15,
};
