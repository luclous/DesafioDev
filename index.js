const express = require('express')
const app = express()
const getNumeros = require('./controller/getController')


app.use('/', getNumeros)



app.listen(3000, () => console.log('Eu estou aqui!'))