const express = require('express');
const app = express();
const productsRouter = require('./routes/products')

app.use(express.json()); 
app.use('/products', productsRouter); 
app.get('/', (req, res) => {
    res.send('Pamoja says hello')
});

app.listen(3001, () => {
    console.log('Pamoja server running on port 3001')
}); 

