--Let me write a route cold from memory and have a real assessment of my understanding so far. 

--a coldly written route for exercise. Starting time 07:53

const db = require('../pamoja.db'); 
const router = require(express.js); 

router.get('/:id', (req, res)=> {
    const {id} = req.params.id;
    const result = db.prepare('SELECT * FROM categories where id = ?').all(id)

    try {
        if (!result){ res.status(400).json({error: error.message})}
        else { res.json(result)}
    }

    catch(error){res.status(500).json({error.error.message})}
});

router.put('/', (req, res)=> {
    let result; 
    const {name, id} = req.body;

    try {
        result = db.prepare('UPDATE categories set name = ? where id = ?').run(name, id);

        if (result.change > 0){res.send('Updated successfully')}
        else {res.status(400).json('Unable to update')}
    }

    catch (error){res.json({error:error.message})}
});

router.delete('/:id', (req, res)=> {
    const {id} = req.params.id;

    try {
        let result = db.prepare('DELETE * FROM categories where id =?').run(id);

        if (result){
            res.json('deleted successfully')
        }
        else { res.status(400).json('Unable to delete')}
    }

    catch (error){
        res.json({error:error.message})
    }
});

router.insert('/', (req,res)=>{

    const {name} = req.params.name; 

    try {
        let result = db.prepare('INSERT INTO categories name VALUES = ?').run(name);

        if (result) {
            res.json('New row inserted')
        }
        else {res.status(400).json({error: error.message})}
    } 

    catch (error) { 
        res.json({error:error.message})
    }
}); 

module.export(router); 

--completed 08:15


--Looking at my code and what we have been trough so far, how much effort do I need to put in in order to have a chance at my first remote job? 
--What could I do every single day, how much effort must be produced, how much focused time everyday could bring the result? 