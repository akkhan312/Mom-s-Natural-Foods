const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  address: String,
  phone: String,
  country: String,
  province: String,
  city: String,
  district: String,
  postcode: String,
  products: [
    {
      id: String,
      name: String,
      image: String,
      quantity: Number,
      price: String,
    },
  ],
  totalPrice: Number,
  paymentIntentId: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);
