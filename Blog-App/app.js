const express = require("express");
const app = express();
require("dotenv").config();
const expressLayout = require('express-ejs-layouts');

const PORT = 5000 || process.env.PORT;

app.use(express.static('public'));

//Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main.ejs');
app.set('view engine','ejs');


app.use('/', require('./server/routes/main'));


app.get('/', (req,res) =>{
    res.send("hello, Pavan kalyan. This is a blog website")
});

app.listen(PORT, () =>{
    console.log(`app listening at PORT ${PORT}`)
});