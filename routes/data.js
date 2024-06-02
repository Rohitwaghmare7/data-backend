const express = require('express');
const router = express.Router();
const Data = require('../models/Data');

router.get('/', async (req, res) => {
  try {
 
    const allData = await Data.find();
    if (!allData || allData.length === 0) {
      return res.status(404).json({ message: 'No data found' });
    }
    res.json(allData);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
