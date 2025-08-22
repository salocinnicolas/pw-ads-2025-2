/*
    reduce() é um método de vetores que reduz o vetor a um unico valor. Para isso, aplica uma
    função a cada elemento do valor, a qual efetua uma operação sobre o elemento e acumula o resultado
    a cada passado
*/

const numeros = [12, 19, 3, -4, 13, -11, 15, -1, 0]
const frutas = ['laranja', ' Abacaxi', 'maçã', 'uva', 'jacuticaba', 'maracujá']
const nums2 = [1, 2, 3, 4, 5, 6]

/*
    Usando reduce() para somar todos os elementos so vetor numeros a função de callback do reduce(),
    em sua forma mais simples, possui dois parâmetros
    1° ~> é o acumulador, que armazena o resultado das operações sobre elementos anteriores
    2° ~> corresponde ao elemento que está sendo processado no momento 
*/
const soma = numeros.reduce((acum, el) => acum + el)
console.log('Soma de todos os elementos do vetor "numeros": ', soma)

//reduce() para multiplicar os elementos do nums2
const produto = nums2.reduce((a, e) => a * e)
console.log('Produto de todos os elementos do vetor "nums2": ', produto)
console.log('-'.repeat(80))

// Constenando o vetor de frutas em uma única string, separando os elementos po ';' e convertendo em maiúsculas
const stringFrutas = frutas.reduce(
    (acc, el) => acc.toUpperCase() + '; ' + el.toUpperCase()
)
console.log(stringFrutas)
console.log('-'.repeat(80))

//refazendo  a soma de todos os elementos do vetor intermediarios do acumulae
const soma2= numeros.reduce((acum, el) => {
    console.log(`Acumalador: ${acum}; elementos : ${el}`)
    return acum + el
})
console.log('Soma de todos os elementos do vetor "numeros": ', soma2)
console.log('Produto de todos os elementos do vetor "nums2": ', produto)
console.log('-'.repeat(80))

//refazendo a conctenação das frutas, mostrando as valores intermediarios do acumalor
const strFrutas = frutas.reduce((acc, el) => {
    console.log(`Acumalador: ${acc} ; Elemento: ${el}`)
    return acc.toUpperCase() + ';' + el.toUpperCase()
})
console.log(strFrutas)