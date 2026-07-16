const express = require('express');
const router = express.Router()

router.put('/', (req,res) => {
    if ('the element exists'){`replace it with the new ${req.params}`}
    res.send('Update successful'); 
});

module.exports = router; 