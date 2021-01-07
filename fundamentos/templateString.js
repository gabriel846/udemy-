const nome = 'Rebeca'
const concatenaçao = 'Olá' + nome + '!'
const template = `
    olá
    ${nome}!`
console.log(concatenaçao, template)

//expressoes
console.log(`1 + 1 = ${1 + 1}`)
const up = texto => texto.toUpperCase()
console.log(`ei...${up('cuidado')}!`)