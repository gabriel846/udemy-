//funcao em js é First-class Object (citizens)
// Higher-order function

//criar de forma literal 
function fun1(){}

//armazenar em uma variavel
const fun2 = function(){}

//armazenar em array
const array = [function (a,b) { return a + b}, fun1, fun2]
console.log(array[0](2, 3))

//armazenar em um atributo de objeto
const obj = {}
obj.falar = function (){ return 'opa'}
console.log(obj.falar())

//passar funçao como param
function run(fun) {
    fun()
}

run(function () { console.log('executando...')})

//uma funçao pode retornar/conter uma funçao
function soma(a,b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)