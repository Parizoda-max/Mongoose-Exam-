const StuffRole = require("../model/stuff_roleSchema");

// ----------------------Create StuffRole----------------------//
const createStuffRole = async (req, res) => {
  try {
    const { stuff_id, role1_id } = req.body;

    const existingStuffRole = await StuffRole.findOne({ stuff_id, role1_id });

    if (existingStuffRole) {
      return res.status(400).json({
        success: false,
        message: "Bu xodimga bu role allaqachon biriktirilgan",
      });
    }

    const newStuffRole = new StuffRole({
      stuff_id,
      role1_id,
    });

    await newStuffRole.save();
    res.status(201).json({
      success: true,
      message: "Role xodimga muvaffaqiyatli biriktirildi",
    });
  } catch (error) {
    console.error("Xato:", error);
    return res.status(500).json({
      success: false,
      message: "Server xatosi: Role biriktirishda xatolik yuz berdi",
    });
  }
};

// --------------------------Get StuffRole------------------------- //
const getStuffRole = async (req, res) => {
  try {
    const stuffRoles = await StuffRole.find({})
      .populate("stuff_id", "-parol")
      .populate("role1_id");
    res.json({
      success: true,
      message: "Barcha biriktirilgan rolelar ro'yxati olingan",
      innerData: stuffRoles,
    });
  } catch (error) {
    console.error("Error fetching stuffRole:", error);
    res.status(500).json({
      success: false,
      message: "Server xatosi: Ma'lumotlarni olishda xatolik yuz berdi",
    });
  }
};

// ----------------------------Get StuffRole ById------------------//
const getStuffRoleById = async (req, res) => {
  try {
    const stuffRoleId = req.params.id;

    const stuffRole = await StuffRole.findById(stuffRoleId)
      .populate("stuff_id", "-parol")
      .populate("role1_id");
    if (!stuffRole) {
      return res.status(404).json({
        success: false,
        message: "StuffRole not found",
      });
    }

    res.json({
      success: true,
      message: "StuffRole found",
      stuffRole,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// -----------------Update StuffRole-----------------//
const updateStuffRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { stuff_id, role1_id } = req.body;
    const updateData = {};
    if (stuff_id !== undefined) updateData.stuff_id = stuff_id;
    if (role1_id !== undefined) updateData.role1_id = role1_id;

    const stuffRole = await StuffRole.findByIdAndUpdate(id, updateData, {
      returnDocument: "after",
    })
      .populate("stuff_id", "-parol")
      .populate("role1_id");

    if (!stuffRole) {
      return res.status(404).json({
        success: false,
        message: "StuffRole not found",
      });
    }

    res.json({
      success: true,
      message: "StuffRole updated successfully",
      stuffRole,
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

// --------------Delete StuffRole ---------------------//
const deleteStuffRole = async (req, res) => {
  try {
    const { id } = req.params;

    const stuffRole = await StuffRole.findByIdAndDelete(id);

    if (!stuffRole) {
      return res.status(404).json({
        success: false,
        message: "StuffRole not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "StuffRole deleted successfully",
      stuffRole,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting stuffRole",
      error: error.message,
    });
  }
};

module.exports = {
  createStuffRole,
  getStuffRole,
  getStuffRoleById,
  updateStuffRole,
  deleteStuffRole,
};
