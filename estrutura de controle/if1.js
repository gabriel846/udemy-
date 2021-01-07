function soBoaNoticia(nota) {
    if (nota >= 7 ){
        console.log('aprovado com ' + nota)
    }
}
soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(Valor){
    if(Valor){
        console.log('é verdade...' + Valor)
    }
}
seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})