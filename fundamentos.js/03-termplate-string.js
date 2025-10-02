const nome = 'Nicolas'
const idade = 23
const cidade = 'Franca/SP'

//Mesaclando strings com variáveis usando concactenação

let msg1 = ('Meu nome é ' + nome + ', tenho ' + idade + ' anos e moro em ' + cidade + '.')
console.log(msg1)

// Mesclando strings e variaveis usando template string
// Template string são obrigatoriamente delibitado por ``
// (acentos grave/backsticks)

let msg2 = (`Meu nome é ${nome} tenho ${idade} anos e moro em ${cidade}.`)
console.log(msg2)

// DEntro de uma templeta string, não estamos limitados a usar  apenas variáveis
// dentro do símbolo ${}. qualquer código javascript válido pode ser empregado ali.

console.log(`Em ${2025 + 7}, ${nome.toUpperCase()} terá ${idade + 7} anos.`)
