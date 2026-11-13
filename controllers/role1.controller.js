const { Role1 } = require("../model/role1Schema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// ----------------------Create Role1----------------------//
const createRole1 = async (req, res) => {
  try {
    const { name } = req.body;

    const existingRole1 = await Role1.findOne({ name });

    if (existingRole1) {
      return res.status(400).json({
        success: false,
        message: "Bu nom bilan ro'yxatdan o'tgan role mavjud",
      });
    } else {
      const newRole1 = new Role1({
        name,
      });

      await newRole1.save();
      res.status(201).json({
        success: true,
        message: "Ro'yxatdan o'tish muvaffaqiyatli yakunlandi",
      });
    }
  } catch (error) {
    console.error("Xato:", error);
    return res.status(500).json({
      success: false,
      message: "Server xatosi: Ro'yxatdan o'tish jarayoni xatolik yuz berdi",
    });
  }
};
// --------------------------Get Role1------------------------- //
const getRole1 = async (req, res) => {
  try {
    const role1 = await Role1.find({});
    res.json({
      success: true,
      message: "Barcha role1lar ro'yxati olingan",
      innerData: role1,
    });
  } catch (error) {
    console.error("Error fetching role1:", error);
    res.status(500).json({
      success: false,
      message: "Server xatosi: Role1larni  olishda xatolik yuz berdi",
    });
  }
};
// ----------------------------Get Role1 ById------------------//

const getRole1ById = async (req, res) => {
  try {
    const role1Id = req.params.id;

    const role1 = await Role1.findById(role1Id);
    if (!role1) {
      return res.status(404).json({
        success: false,
        message: "Role1 not found",
      });
    }

    res.json({
      success: true,
      message: "Role1 found",
      role1,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// --------------Delete Role1 ---------------------//
const deleteRole1 = async (req, res) => {
  try {
    const { id } = req.params;

    const role1 = await Role1.findByIdAndDelete(id).select("-password");

    if (!role1) {
      return res.status(404).json({
        success: false,
        message: "Role1 not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Role1 deleted successfully",
      role1,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting role1",
      error: error.message,
    });
  }
};

// ------------------- Update Role1 ------------------- //
const updateRole1 = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const role1 = await Role1.findByIdAndUpdate(id, {
      name,
    });

    if (!role1) {
      return res.status(404).json({
        success: false,
        message: "Role1 not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Role1 updated successfully",
      inner_data: role1,
    });
  } catch (err) {
    console.error(err.message);

    res.status(500).json({
      success: false,
      message: "Internal server error while updating role1",
      error: err.message,
    });
  }
};

module.exports = {
  createRole1,
  getRole1,
  getRole1ById,
  updateRole1,
  deleteRole1,
};
