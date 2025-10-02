/*
    Ometodo de vetores find() encontra o Primeiro Elemento que corresponde
    ao retorno de uma função passada como parâmetro
*/

const numeros = [12, 19, 3, -4, 13, -11, 15, -1, 0]
const frutas = ['laranja', ' Abacaxi', 'maçã', 'uva', 'jacuticaba', 'maracujá']

// Encontrando o primeiro numero negativo no vetor de números
console.log('Primeiro número negativo: ', numeros.find(n => n < 0))

// Encontrando o primeiro numero mútiplo de 5
console.log('Primeiro número multiplo de cinco: ', numeros.find(x => x % 5 === 0))

//encontrando o primeiro número maior que 20
console.log('Primeiro número negativo: ', numeros.find(i => i > 20))

//encontrando o primeira fruta que comece em "m"
console.log('primeira fruta que comece em "m": ', frutas.find(f => f.charAt(0) === 'm'))

//encontrando o primeira fruta que termina em "r"
console.log('primeira fruta que termina em "r": ', frutas.find(f => f.slice(-1) === 'r'))