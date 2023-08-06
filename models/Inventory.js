const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InventorySchema = new Schema({
  _id: {
    type: Number,
  },
  sku: {
    type: String,
  },
  description: {
    type: String,
  },
  instock: {
    type: Number,
  },
});

module.exports = mongoose.model("inventory", InventorySchema);
