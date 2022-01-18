const axios = require('axios')


async function getNumeros(Index){
  const numeros =  await axios({
    method: 'get',
    url: `http://challenge.dienekes.com.br/api/numbers?page=${Index}`
  })
    .then(function (response) {
      return response.data
    });
    return numeros
}
  

async function getTodosNumeros(inicialPage){
  let todosNumeros = []
  let possuiNumeros = true
  let pageIndex = 1
  while(possuiNumeros){
    let numeros = await getNumeros(inicialPage + pageIndex)
    if(!numeros.numbers || pageIndex === 50 ){
        possuiNumeros = false
    } else{
      todosNumeros = [...todosNumeros, ...numeros.numbers]    
      pageIndex += 1
    }
  }
  return todosNumeros
}

module.exports = {
  getTodosNumeros
}
