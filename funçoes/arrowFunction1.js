let dobro = function (a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //return implicito

console.log(dobro(Math.PI))


ola = () => 'ola'
ola = _ => 'ola'//possui param

console.log(ola())