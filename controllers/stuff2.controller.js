const Stuff2 = require("../model/stuff2Schema");
const bcrypt = require("bcrypt");

// ----------------------Create Stuff2----------------------//
const createStuff2 = async (req, res) => {
  try {
    const { first_name, last_name, phone_number, login, parol, is_active } =
      req.body;

    const existingStuff2 = await Stuff2.findOne({ login });

    if (existingStuff2) {
      return res.status(400).json({
        success: false,
        message: "Bu login bilan xodim mavjud",
      });
    }

    const hashedPassword = await bcrypt.hash(parol, 10);

    const newStuff2 = new Stuff2({
      first_name,
      last_name,
      phone_number,
      login,
      parol: hashedPassword,
      is_active,
    });

    await newStuff2.save();

    res.status(201).json({
      success: true,
      message: "Xodim muvaffaqiyatli yaratildi",
    });
  } catch (error) {
    console.error("Xato:", error);
    return res.status(500).json({
      success: false,
      message: "Server xatosi: Xodim yaratishda xatolik yuz berdi",
    });
  }
};

// --------------------------Get Stuff2------------------------- //
const getStuff2 = async (req, res) => {
  try {
    const stuff2 = await Stuff2.find({}).select("-parol");
    res.json({
      success: true,
      message: "Barcha xodimlar ro'yxati olingan",
      innerData: stuff2,
    });
  } catch (error) {
    console.error("Error fetching stuff2:", error);
    res.status(500).json({
      success: false,
      message: "Server xatosi: Xodimlarni olishda xatolik yuz berdi",
    });
  }
};

// ----------------------------Get Stuff2 ById------------------//
const getStuff2ById = async (req, res) => {
  try {
    const stuff2Id = req.params.id;

    const stuff2 = await Stuff2.findById(stuff2Id).select("-parol");
    if (!stuff2) {
      return res.status(404).json({
        success: false,
        message: "Xodim topilmadi",
      });
    }

    res.json({
      success: true,
      message: "Xodim topildi",
      stuff2,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// -----------------Update Stuff2-----------------//
const updateStuff2 = async (req, res) => {
  try {
    const { id } = req.params;
    const { first_name, last_name, phone_number, login, parol, is_active } =
      req.body;
    const updateData = {};
    if (first_name !== undefined) updateData.first_name = first_name;
    if (last_name !== undefined) updateData.last_name = last_name;
    if (phone_number !== undefined) updateData.phone_number = phone_number;
    if (login !== undefined) updateData.login = login;
    if (is_active !== undefined) updateData.is_active = is_active;

    if (parol) {
      updateData.parol = await bcrypt.hash(parol, 10);
    }

    const stuff2 = await Stuff2.findByIdAndUpdate(id, updateData, {
      returnDocument: "after",
    }).select("-parol");

    if (!stuff2) {
      return res.status(404).json({
        success: false,
        message: "Stuff2 not found",
      });
    }

    res.json({
      success: true,
      message: "Stuff2 updated successfully",
      stuff2,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
// --------------Delete Stuff2 ---------------------//
const deleteStuff2 = async (req, res) => {
  try {
    const { id } = req.params;

    const stuff2 = await Stuff2.findByIdAndDelete(id).select("-parol");

    if (!stuff2) {
      return res.status(404).json({
        success: false,
        message: "Xodim topilmadi",
      });
    }

    res.status(200).json({
      success: true,
      message: "Xodim muvaffaqiyatli o'chirildi",
      stuff2,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting stuff2",
      error: error.message,
    });
  }
};

module.exports = {
  createStuff2,
  getStuff2,
  getStuff2ById,
  updateStuff2,
  deleteStuff2,
};
