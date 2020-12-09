const express = require('express')
const path = require('path')

const app = express();

app.get('/hurricane', (req, res) => {
    res.download(__dirname + '/hurricanes.csv');
})
app.get('/earthquake', (req, res) => {
    res.download(__dirname + '/2.5_week.csv');
})
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/view.html")
})
app.listen(process.env.PORT || 5000);