const GroupStuff = require("../model/group_stuffSchema");

// ----------------------Create GroupStuff----------------------//
const createGroupStuff = async (req, res) => {
  try {
    const { group_id, stuff_id } = req.body;

    const existingGroupStuff = await GroupStuff.findOne({ group_id, stuff_id });

    if (existingGroupStuff) {
      return res.status(400).json({
        success: false,
        message: "Bu xodim bu guruhga allaqachon biriktirilgan",
      });
    }

    const newGroupStuff = new GroupStuff({
      group_id,
      stuff_id,
    });

    await newGroupStuff.save();
    res.status(201).json({
      success: true,
      message: "Xodim guruhga muvaffaqiyatli biriktirildi",
    });
  } catch (error) {
    console.error("Xato:", error);
    return res.status(500).json({
      success: false,
      message: "Server xatosi: Xodimni guruhga biriktirishda xatolik yuz berdi",
    });
  }
};

// --------------------------Get GroupStuff------------------------- //
const getGroupStuff = async (req, res) => {
  try {
    const groupStuffs = await GroupStuff.find({})
      .populate("group_id")
      .populate("stuff_id", "-parol");
    res.json({
      success: true,
      message: "Guruhlarga biriktirilgan xodimlar ro'yxati olingan",
      innerData: groupStuffs,
    });
  } catch (error) {
    console.error("Error fetching groupStuff:", error);
    res.status(500).json({
      success: false,
      message: "Server xatosi: Ma'lumotlarni olishda xatolik yuz berdi",
    });
  }
};

// ----------------------------Get GroupStuff ById------------------//
const getGroupStuffById = async (req, res) => {
  try {
    const groupStuffId = req.params.id;

    const groupStuff = await GroupStuff.findById(groupStuffId)
      .populate("group_id")
      .populate("stuff_id", "-parol");
    if (!groupStuff) {
      return res.status(404).json({
        success: false,
        message: "GroupStuff not found",
      });
    }

    res.json({
      success: true,
      message: "GroupStuff found",
      groupStuff,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// -----------------Update GroupStuff-----------------//
const updateGroupStuff = async (req, res) => {
  try {
    const { id } = req.params;
    const { group_id, stuff_id } = req.body;
    const updateData = {};
    if (group_id !== undefined) updateData.group_id = group_id;
    if (stuff_id !== undefined) updateData.stuff_id = stuff_id;

    const groupStuff = await GroupStuff.findByIdAndUpdate(id, updateData, {
      returnDocument: "after",
    })
      .populate("group_id")
      .populate("stuff_id", "-parol");

    if (!groupStuff) {
      return res.status(404).json({
        success: false,
        message: "GroupStuff not found",
      });
    }

    res.json({
      success: true,
      message: "GroupStuff updated successfully",
      groupStuff,
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

// --------------Delete GroupStuff ---------------------//
const deleteGroupStuff = async (req, res) => {
  try {
    const { id } = req.params;

    const groupStuff = await GroupStuff.findByIdAndDelete(id);

    if (!groupStuff) {
      return res.status(404).json({
        success: false,
        message: "GroupStuff not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "GroupStuff deleted successfully",
      groupStuff,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting groupStuff",
      error: error.message,
    });
  }
};

module.exports = {
  createGroupStuff,
  getGroupStuff,
  getGroupStuffById,
  updateGroupStuff,
  deleteGroupStuff,
};
