require('./config/config')
const express = require('express')
const app = express()

var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded reivind parametro
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/', function(req, res) {
    res.json('Hola mundo')
})

app.put('/usuario/:id', function(req, res) {
    let id = req.params.id
    res.json({
        id
    })
})

app.post('/', function(req, res) {

    let body = req.body
    res.json({
        body
    })
})
app.delete('/', function(req, res) {
    res.json('delete Usuario')
})

app.listen(process.env.PORT, () => {
    console.log('Escuchando en el puerto 3000', process.env.PORT);
})