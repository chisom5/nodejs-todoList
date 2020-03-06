const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static("public"));

// create todo task
app.post('/createTask', (req, res)=> {

});


app.listen(8080, ()=> console.log('app is running on port 8080'));


/*

2 tables
- todo table
- done table

*/