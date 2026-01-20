const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const Product = require("../models/Product");

// 🗂️ Multer config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

/**
 * CREATE PRODUCT
 * POST /api/products
 */
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { name, price, description } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: "Image is required" });
    }

    const imagePath = `/uploads/${req.file.filename}`;
    const product = new Product({ name, price, description, image: imagePath });
    await product.save();

    res.status(201).json(product);
  } catch (error) {
    console.error("❌ Error uploading product:", error);
    res.status(500).json({ error: "Failed to upload product" });
  }
});

/**
 * GET ALL PRODUCTS
 * GET /api/products
 */
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

/**
 * DELETE PRODUCT (and image file)
 * DELETE /api/products/:id
 */
router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) return res.status(404).json({ error: "Product not found" });

    // 🧹 Delete image file from /uploads folder
    if (product.image) {
      const imagePath = path.join(__dirname, "..", product.image);
      fs.unlink(imagePath, (err) => {
        if (err) {
          console.error("⚠️ Failed to delete image file:", err.message);
        } else {
          console.log("🗑️ Image file deleted:", product.image);
        }
      });
    }

    await product.deleteOne();

    res.json({ message: "Product and image deleted", product });
  } catch (err) {
    console.error("❌ Delete failed:", err);
    res.status(500).json({ error: "Failed to delete product" });
  }
});

/**
 * UPDATE PRODUCT
 * PUT /api/products/:id
 */
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const product = await Product.findById(req.params.id);

    if (!product) return res.status(404).json({ error: "Product not found" });

    // If new image uploaded, delete old image
    if (req.file) {
      if (product.image) {
        const oldImagePath = path.join(__dirname, "..", product.image);
        fs.unlink(oldImagePath, (err) => {
          if (err) console.error("⚠️ Failed to delete old image:", err.message);
        });
      }

      product.image = `/uploads/${req.file.filename}`;
    }

    product.name = name;
    product.price = price;
    product.description = description;

    const updated = await product.save();

    res.json(updated);
  } catch (err) {
    console.error("❌ Update failed:", err);
    res.status(500).json({ error: "Failed to update product" });
  }
});

module.exports = router;
