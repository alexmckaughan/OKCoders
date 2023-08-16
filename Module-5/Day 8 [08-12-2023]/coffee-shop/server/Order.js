import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: Number,
  },
  addressLine1: {
    type: String,
  },
  addressLine2: {
    type: String,
  },
  addressCity: {
    type: String,
  },
  addressState: {
    type: String,
  },
  addressZip: {
    type: String,
  },
  menuItemId: {
    type: String,
  },
});

export default mongoose.models.Order ||
  mongoose.model("Order", OrderSchema, "orders");
