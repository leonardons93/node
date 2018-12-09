  const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
  const axios = require('axios')

  const chinesses = f => f.pais === 'Russia'
  const mulheres = f => f.genero === 'F'
  const menorSalarios = (func,funcAtual) => {
      return func.salario > funcAtual.salario ? func:funcAtual
  }

  axios.get(url).then(Response =>{
      const funcionarios = Response.data
     
      const func = funcionarios
      .filter(chinesses)
      .filter(mulheres)
      .reduce(menorSalarios)
      console.log(func)
  })

