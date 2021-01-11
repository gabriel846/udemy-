const sequencia ={
    _Valor: 1, //convençao
    get Valor() {return this._Valor++ },
    set Valor(Valor) {
        if(Valor > this._Valor) {
            this._Valor = Valor
        }
    }
}

console.log(sequencia.Valor, sequencia.Valor)
sequencia.Valor = 1000
console.log(sequencia.Valor, sequencia.Valor)
sequencia.Valor = 900
console.log(sequencia.Valor, sequencia.Valor)