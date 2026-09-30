const express = require('express');
const app = express();
const productsRouter = require('./routes/products');
const ordersRouter = require('./routes/orders'); 
const categoriesRouter = require('./routes/categories');
const cors = require('cors');
app.use(cors()); 
app.use(express.json()); 
app.use('/products', productsRouter); 
app.use('/orders', ordersRouter); 
app.use('/categories', categoriesRouter); 
app.get('/', (req, res) => {
    res.send('Pamoja says hello')
});

app.listen(3001, () => {
    console.log('Pamoja server running on port 3001')
}); 

