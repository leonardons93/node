const passo1 = (objeto,next)=>{
    objeto.valor1 = 'mid1'
    next()
}
const passo2 = (objeto,next)=>{
    objeto.valor2 = 'mid2'
    next()
}
const passo3 = (objeto)=>{
    objeto.valor3 = 'mid3'

}
const exect = (objeto, ...middlewares) => {
    const executpasso = indice =>{
        middlewares && indice < middlewares.length &&
        middlewares[indice](objeto, () => executpasso(indice+1))
    }
    executpasso(0)
}
const objeto = {}
exect(objeto,passo2,passo1)
console.log(objeto)