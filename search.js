// routes/search.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET /api/search?q=query
router.get('/', async (req, res) => {
  const query = req.query.q;

  if (!query || query.trim() === '') {
    return res.status(400).json({ message: 'Search query is required.' });
  }

  try {
    const regex = new RegExp(query, 'i'); // case-insensitive
    const results = await Product.find({
      $or: [
        { name: regex },
        { description: regex },
        { category: regex },
      ],
    });

    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error.' });
  }
});

module.exports = router;
