function rand([min=0, max=1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log(rand(([50, 40])))//entre 50 e 40
console.log(rand(([ , 10])))// de 0 a 10
console.log(rand(([])))//entre 0 e 1000
console.log(rand())//erro nao consegue ler propriedades de undefined