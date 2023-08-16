import mongoose from "mongoose";

const MenuItemSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  imageUrl: {
    type: String,
  },
});

export default mongoose.models.MenuItem ||
  mongoose.model("MenuItem", MenuItemSchema, "menuItems");
