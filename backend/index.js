// app.js
const express = require('express');
const {memberTable,responseTable } = require('./models/User');
const router = require('./routes/route');
const app = express();
const cros =require('cors')

app.use(express.json());

memberTable.sync();
responseTable.sync();

app.get('/', (req, res) => {
    res.send("<h1>hello everyone<h1/>")
})

app.use(cros());

app.use(router)

app.listen(3001, () => {
    console.log("app started at localhost 3001");
});
