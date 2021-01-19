const alunos = [
    {nome: 'joao', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
]

//desafio 1: todos os alunos sao bolsistas?
const todosBolsistas = (resusltado, bolsisitas) => resusltado && bolsisitas
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//desafio2: algum aluno é bolsista?
const algumBolsista = (resusltado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))