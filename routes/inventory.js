const express = require("express");
const Inventory = require("../models/Inventory");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const inventoryItems = await Inventory.find();
    res.json({ success: true, inventory: inventoryItems });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
