import mongoose from "mongoose";

const ProductsSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "Name is required",
  },
  description: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
    required: "Price is required",
    min: [0, "Price can not be less then 0"],
  },

  quantity: {
    type: Number,
    required: "Quantity is required",
    min: [0, "Quantity can not be less then 0"],
    validate: {
      validator: Number.isInteger,
      message: "Quantity must be an integer value.",
    },
  },
  category: {
    type: String,
    trim: true,
  },
});

export default mongoose.model("Products", ProductsSchema);
