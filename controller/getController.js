const  Router  = require('express').Router()
const {getTodosNumeros} = require('../models/getNumeros')
const ordenarNumero = require('../models/sort')



Router.get('/', async (req, res) => {
  try{
    const numeros = await getTodosNumeros(0)
    const numerosOrdenados = ordenarNumero(numeros)
    res.status(200).send(numerosOrdenados)
  }catch(e){
  res.status(500).json({ message: 'Erro de dados'})
}
})

Router.get('/:page', async (req, res) => {
  try{
    const { page } = req.params
    const numeros = await getTodosNumeros(Number(page))
    const numerosOrdenados = ordenarNumero(numeros)
    res.status(200).send(numerosOrdenados)
  }catch(e){
    res.status(500).json({ message: 'Erro de dados'})
  }  
})



module.exports = Router