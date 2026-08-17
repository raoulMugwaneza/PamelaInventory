--today I moved my logic to products.js which encapsulated all data that 
--I need. 

const data = require('../db'); 
const express = require('express');
const router = express.Router()

router.put('/', (req,res) => {
    if ('the element exists'){`replace it with the new ${req.params}`}
    res.send('Update successful'); 
});

router.delete('/:id', (req,res) => {
    if ('the element exists'){`delete ${req.id}`}
    res.send('Succesfully deleted'); 
});

router.get('/', (req,res) => {
    const result = data.prepare('SELECT * FROM products').all();
    res.json(result); 
});

router.get('/:name', (req, res) => {
    res.send(`Hello ${req.params.name}`)
});

router.post('/', (req, res) => {
    let result; 

    const {name, category_id} = req.body; 
    
    try {result = data.prepare('INSERT INTO products (name, category_id) VALUES (?,?)').run(name, category_id);
        res.status(201).json({id: result.lastInsertRowid, name})
    }
    catch (error) { res.status(400).json({error: error.message})}
    
    
}); 

module.exports = router; 

--router becomes the portal through which I can access all needed data. 
--one important element remains how to handle post