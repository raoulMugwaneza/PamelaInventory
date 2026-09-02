const data = require('../db'); 
const express = require('express');
const router = express.Router()

router.put('/:id', (req,res) => {
    const id = req.params.id;
    const {name} = req.body; 
    
    try{
        let multitude = data.prepare('UPDATE products SET name = ? WHERE id = ?')
        .run(name, id); 

        if (multitude.changes >0){
            res.send('Update successful')
        }

        else {
            res.status(404).json({error: 'not found'})
        }
    }
            
    catch (error) {res.status(500).json({error: error.message}) }
     
});

router.delete('/:id', (req,res) => {
    const id = req.params.id;
    
    try {
        let result = data.prepare('DELETE FROM products WHERE id = ?').run(id);

        if (result.changes > 0) {
            res.send('Succesfully deleted')
        }

        else {res.status(404).json({error:'not found'})}
    }

    catch (error) {
        res.status(500).json({error:error.message})
    }

    
});



router.get('/', (req,res) => {
    const result = data.prepare('SELECT * FROM products').all();
    res.json(result); 
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    let numero; 

    try{ numero = data.prepare('SELECT * FROM products WHERE id = ?').get(id);
        if (!numero) {
            return res.status(404).json({error: 'not found'})
        }

        else {return res.status(200).json(numero)}
        
    }
    
    catch (error) {res.status(500).json({error:error.message})}
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