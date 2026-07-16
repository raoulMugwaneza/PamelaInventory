const express = require('express');
const router = express.Router()

router.delete('/:id', (req,res) => {
    if ('the element exists'){`delete ${req.id}`}
    res.send('Succesfully deleted'); 
});

module.exports = router; 