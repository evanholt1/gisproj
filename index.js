const express = require('express')
const path = require('path')

const app = express();

app.get('/csv', (req, res) => {
    res.download(__dirname + '/hurricanes.csv');
})
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/view.html")
})
app.listen(5000);