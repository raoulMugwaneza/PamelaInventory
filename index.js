const express = require('express');
const app = express();
const greetRouter = require('./routes/greet'); 
const searchRouter = require('./routes/search'); 

app.use('/search', searchRouter); 
app.use('/greet', greetRouter); 

app.get('/', (req, res) => {
    res.send('Pamoja says hello')
});

app.listen(3001, () => {
    console.log('Pamoja server running on port 3001')
}); 


