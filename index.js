const express=require('express');
const { user } = require('./models/User');
const router = require('./routes/route');
const app=express();

app.use(express.json())
user.sync();


app.get('/',(req,res)=>{
    res.send("<h1>hello everyone<h1/>")
})

app.use(router)

app.listen(3000,()=>{
    console.log("app started at localhost 3000");
})