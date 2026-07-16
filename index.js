const express = require('express');
const app = express();
const greetRouter = require('./routes/greet'); 
const searchRouter = require('./routes/search'); 
const updateRouter = require('./routes/update');
const deleteRouter = require('./routes/delete'); 


app.use('/search', searchRouter); 
app.use('/greet', greetRouter); 
app.use('/put', updateRouter);
app.use('/delete', deleteRouter); 

app.get('/', (req, res) => {
    res.send('Pamoja says hello')
});

app.listen(3001, () => {
    console.log('Pamoja server running on port 3001')
}); 

