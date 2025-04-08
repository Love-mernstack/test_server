const express = require('express');
const app = express();


app.get("/",(req,res)=>{
    res.json("Hello World");
})

app.listen(7000,()=>{
    console.log("App is listening to port 7000")
})