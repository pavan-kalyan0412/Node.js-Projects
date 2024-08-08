const express = require("express");
const app = express();
require("dotenv").config();

const PORT = 5000 || process.env.PORT;

app.get('/', (req,res) =>{
    res.send("hello, Pavan kalyan. This is a blog website")
});

app.listen(PORT, () =>{
    console.log(`app listening at PORT ${PORT}`)
});