-- this helps you check what will show in the terminal
--console.log(db.prepare('SELECT * FROM categories').all());
--there are many prepared statements and those include and not limited to:
-- .all() which runs it and returns every matching row as an array.
-- .get() which returns just the first matching row, not an array
-- .run() which is meant for INSERT/UPDATE/DELETE. 

--FOR SECURITY, BE CAREFUL: Instead of building a query by gluing a variable into a string, you write a ? where a value goes, and pass the actual value as a separate argument:
--EXAMPLE FOR GOOD PRACTIVE WOULD BE: 
--db.prepare('SELECT * FROM categories WHERE name = ?').get('Fanta)
--EXAMPLE FOR BAD PRACTIVE WOULD BE:
--db.prepare(`SELECT * FROM categories WHERE name = '${userInput}').get()

--this security feature is called sql injection; using the ? stops user from 
--inserting or changing the shape of your query. 

--to operate properly. the search route is modified as so:

const data = require('../db'); 
const express = require('express');
const router = express.Router()

router.get('/', (req,res) => {
    const result = data.prepare('SELECT * FROM categories').all();
    res.json(result); 
});

module.exports = router; 