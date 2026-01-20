const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// POST /api/orders
router.post("/", async (req, res) => {
  try {
    const { formData, cartItems, totalPrice, paymentIntentId } = req.body;

    const order = new Order({
      fullName: formData.fullName,
      email: formData.email,
      address: formData.address,
      country: formData.country,
      province: formData.province,
      city: formData.city,
      district: formData.district,
      postcode: formData.postcode,
      phone: formData.phone,
      products: cartItems,
      totalPrice,
      paymentIntentId,
    });

    await order.save();
    res.status(201).json({ message: "Order saved successfully" });
  } catch (error) {
    console.error("Error saving order:", error);
    res.status(500).json({ error: "Failed to save order" });
  }
});

module.exports = router;
