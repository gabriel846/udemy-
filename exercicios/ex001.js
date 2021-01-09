//01)​ Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores. 

const valor1 = 50
const valor2 = 5

const soma = valor1 + valor2
const sub = valor1 - valor2
const mult = valor1 * valor2
const div = valor1/valor2

console.log(`${soma} soma entre os valores 1 e 2`)
console.log(`${sub} subtraçao entre os valores 1 e 2`)
console.log(`${mult} multiplicaçao entre os valores 1 e 2`)
console.log(`${div} divisao entre os valores 1 e 2`)

function soma(a ,b) {
    console.log(a + b)
}
soma(1,2)
//soma 
