// usando a notaçao literal 
const obj1 = {}
console.log(obj1)

//object em js
console.log(typeof Object, typeof new Object)
const obj2 = new Object 
console.log(obj2)

//funçoes construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('caneta', 7.99, 0.15)
const p2 = new Produto('notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto()) 

// funcao factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}