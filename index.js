// app.js
const express = require('express');
const {memberTable,responseTable } = require('./models/User');
const router = require('./routes/route');
const app = express();

app.use(express.json());

memberTable.sync({force:true});
responseTable.sync({force:true});

app.get('/', (req, res) => {
    res.send("<h1>hello everyone<h1/>")
})

app.use(router)

app.listen(3001, () => {
    console.log("app started at localhost 3001");
});
