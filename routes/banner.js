const express = require('express');
const router = express.Router();
const Banner = require('../models/banner');

// Get Banner Data
router.get('/', async (req, res) => {
  try {
    const banner = await Banner.findOne();
    res.json(banner);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add or Update Banner Data
router.post('/add', async (req, res) => {
  try {
    const { description, timer, link } = req.body;

    let banner = await Banner.findOne();

    if (banner) {
      // Update existing banner
      banner.description = description;
      banner.timer = timer;
      banner.link = link;
   
    } else {
      // Create a new banner
      banner = new Banner({ description, timer, link });
    }

    const savedBanner = await banner.save();
    res.json(savedBanner);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add or update banner' });
  }
});

module.exports = router;
