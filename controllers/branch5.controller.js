const { branch5 } = require("../model/branch5Schema");
// ----------------------Create Branch5----------------------//
const createBranch5 = async (req, res) => {
  try {
    const { name, address, call_number } = req.body;

    const existingBranch5 = await branch5.findOne({ call_number });

    if (existingBranch5) {
      return res.status(400).json({
        success: false,
        message: "Bu telefon raqami bilan filial mavjud",
      });
    }

    const newBranch5 = new branch5({
      name,
      address,
      call_number,
    });

    await newBranch5.save();

    res.status(201).json({
      success: true,
      message: "Filial muvaffaqiyatli yaratildi",
    });
  } catch (error) {
    console.error("Xato:", error);
    return res.status(500).json({
      success: false,
      message: "Server xatosi: Filial yaratishda xatolik yuz berdi",
    });
  }
};

// ---------------------- Get branch5 ---------------------- //
const getBranch5 = async (req, res) => {
  try {
    const branches = await branch5.find({});
    res.json({
      success: true,
      message: "Barcha filiallar ro'yxati olingan",
      innerData: branches,
    });
  } catch (error) {
    console.error("Xato:", error);
    res.status(500).json({
      success: false,
      message: "Server xatosi: Filiallarni olishda xatolik yuz berdi",
    });
  }
};

// ---------------------- Get by id ---------------------- //
const getBranch5ById = async (req, res) => {
  try {
    const branch = await branch5.findById(req.params.id);

    if (!branch) {
      return res.status(404).json({
        success: false,
        message: "Filial topilmadi",
      });
    }

    res.json({
      success: true,
      message: "Filial topildi",
      innerData: branch,
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

// ---------------------- Update ---------------------- //
const updateBranch5 = async (req, res) => {
  try {
    const { name, address, call_number } = req.body;

    const branch = await branch5.findByIdAndUpdate(req.params.id, {
      name,
      address,
      call_number,
    });

    if (!branch) {
      return res.status(404).json({
        success: false,
        message: "Filial topilmadi",
      });
    }

    res.status(200).json({
      success: true,
      message: "Filial muvaffaqiyatli yangilandi",
      innerData: branch,
    });
  } catch (error) {
    console.error("Xato:", error);
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Bu telefon raqami boshqa filialda mavjud",
      });
    }
    if (error.name === "CastError") {
      return res.status(400).json({ success: false, message: "Noto'g'ri ID" });
    }
    res.status(500).json({
      success: false,
      message: "Internal server error while updating branch",
      error: error.message,
    });
  }
};

// ---------------------- Delete ---------------------- //
const deleteBranch5 = async (req, res) => {
  try {
    const branch = await branch5.findByIdAndDelete(req.params.id);

    if (!branch) {
      return res.status(404).json({
        success: false,
        message: "Filial topilmadi",
      });
    }

    res.status(200).json({
      success: true,
      message: "Filial muvaffaqiyatli o'chirildi",
      innerData: branch,
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
      message: "Error deleting branch",
      error: error.message,
    });
  }
};

module.exports = {
  createBranch5,
  getBranch5,
  getBranch5ById,
  updateBranch5,
  deleteBranch5,
};
