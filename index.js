const express = require('express')
const path = require('path')
var cors = require('cors')

const app = express();

app.use(cors())

app.get('/hurricane', (req, res) => {
    res.download(__dirname + '/hurricanes.csv');
})
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/view.html")
})

app.use(express.static(path.join(__dirname,"public")))

app.listen(process.env.PORT || 5000);