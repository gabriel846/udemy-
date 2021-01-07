function pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() {
        this.idade++
        console.log(self.idade)

    }/*.bind(this)*/, 1000)//dispara sem parar com ctrl alt n e o mesmo para
}

new pessoa