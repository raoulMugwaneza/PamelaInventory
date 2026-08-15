const data = require('../db'); 
const express = require('express');
const router = express.Router()

router.get('/', (req,res) => {
    const result = data.prepare('SELECT * FROM categories').all();
    res.json(result); 
});

module.exports = router; 