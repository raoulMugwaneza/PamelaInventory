const db = require('../db'); 
const express = require('express'); 
const router = express.Router(); 



router.post( '/', (req, res) => {
    let placeOrder; 

    const {userId, items} = req.body;

    try {

    placeOrder = db.transaction(
    (userId, items) => {
        const orderResult = db.prepare(
'INSERT INTO orders (user_id) VALUES (?)').run(userId);
const orderId = orderResult.lastInsertRowid;

for (const item of items){
    db.prepare('INSERT INTO order_items (order_id, product_id, quantity) VALUES(?,?,?)').
    run(orderId, item.product_id, item.quantity);
}

return orderId; 

}); 

res.status(201).json({orderId: placeOrder(userId, items)}); 


    }

    catch(error){ res.status(400).json({error: error.message})}


}

)
module.exports = router; 