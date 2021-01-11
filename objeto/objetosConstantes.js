// pessoa -> 123 -> {...}
const pessoa = {bome: 'joao'}
pessoa.nome = 'pedro'
console.log(pessoa)

//pessoa -> 456 -> {...}
//pessoa = {nome: 'ana}

Object.freeze(pessoa)

pessoa.nome = 'maria'
pessoa.end = 'rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'joao' })
console.log(pessoaConstante)