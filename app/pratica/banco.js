const sequence = {
    _id:1,
    get id(){return this._id++}
}
const produtos = {}
function salvarproduto(produto){
    if(!produto.id) produto.id = sequence.id
    produtos[produto.id]=produto
    return produto
}
function getproduto(id){
    return[id] || {}

}
function getprodutos(){
    return Object.values(Produtos)
}