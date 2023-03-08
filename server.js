
const express = require('express')
const app = express()
const path = require('path')


app.use('/public', express.static(path.join(__dirname, '/public')))


app.use('/public2', express.static(path.join(__dirname, '/public2')))

app.get('/', function (req, res) {
    var duongDanFile = path.join(__dirname, 'home.html')
    console.log(duongDanFile)
    res.sendFile(duongDanFile);
})

app.listen(3000, function () {

})