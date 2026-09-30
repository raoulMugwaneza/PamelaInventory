const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/', (req, res) => {
    const newer = db.prepare('SELECT * FROM categories').all();
    res.json(newer); 

});

router.get('/:id', (req, res)=>{
    const {id}  = req.params

    const newer = db.prepare('SELECT * FROM categories where id = ?').get(id); 

    try { if (!newer) {
        return res.status(404).json('We do not have such an ID in categories')
        
    }

    else {res.json(newer)}
}

    

    catch (error) { res.status(500).json({error: error.message})}
});


router.post('/', (req, res)=>{
    const {name} = req.body;

    const newer = db.prepare('INSERT INTO categories (name) values(?)').run(name);

    try { res.status(201).json({id: newer.lastInsertRowid, name})
        

        
    }
    
    catch (error){res.status(400).json({error: error.message})}
})

router.put('/',(req, res)=>{
    const {id} = req.params.id; 
    const {target, newValue} = req.body;

  try {

    let newer = db.prepare(`UPDATE categories set ${target} = ?  WHERE id = ?`).run(newValue, id); 

    if (newer.changes > 0 ) { res.json(`${target} updated successfully`)}
    else {
        res.status(404).json({error: 'Id not found, please try again.'})
    } }
  
    catch (error){res.status(500).json({error:error.message})}
    
});

router.delete('/:id', (req, res)=>{

    const {id} = req.params.id;
    let newer = db.prepare('DELETE FROM  categories WHERE id = ?').run(id); 

    try { 
        if (newer.changes > 0){
            res.json(`Deleted successfully`)
        } 
    
        else { res.status(400).json({error: "We can't find the requested ID"})}
    }

    catch (error){res.json({error:error.message})}
}); 


module.exports = router; 