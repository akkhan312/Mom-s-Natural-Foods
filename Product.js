const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  image: {
    type: String, // e.g. "/uploads/filename.jpg"
    required: false,
  },
  imageSource: {
    type: String,
    default: "item", // you can change this as needed
  },
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
