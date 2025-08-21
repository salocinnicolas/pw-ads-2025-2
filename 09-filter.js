/*
    O metodo de vetores filter () cria un novo vetor contendo apenas os
    elementos que atendam ao criterio apresentado pela função passado como parâmetro
*/

const numeros = [12, 19, 3, -4, 13, -11, 15, -1, 0]
const frutas = ['laranja', ' Abacaxi', 'maçã', 'uva', 'jacuticaba', 'maracujá']

//Cria um novo vetor apenas com os números negativos
console.log('Apenas números negativos: ', 
    numeros.filter(n => n < 0)
)

//Cria um novo vetor apenas com os números pares
console.log('Apenas números pares: ', 
    numeros.filter(p => p % 2 === 0)
)

//Cria um novo vetor apenas com os números mairores que 20
console.log('Apenas números maiores que 20: ', 
    numeros.filter(m => m > 20)
)

//Cria um novo vetor com apenas as frutas que comecem com "m"
console.log('Apenas frutas que comecem com "m": ', 
    frutas.filter(r => r.charAt(0) === "m")
)

//Cria um novo vetor com apenas as frutas que terminem com "r"
console.log('Apenas frutas que terminem com "r": ', 
    frutas.filter(q => q.slice(-1) === "r")
)