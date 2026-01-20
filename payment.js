const express = require("express");
const router = express.Router();

// Dummy payment methods
const paymentMethods = [
  { id: "card", name: "Credit Card" },
  { id: "paypal", name: "PayPal" },
  { id: "cash", name: "Cash on Delivery" },
];

// GET /api/payment/methods
router.get("/methods", (req, res) => {
  res.json(paymentMethods);
});

module.exports = router;
