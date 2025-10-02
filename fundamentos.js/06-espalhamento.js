//encontre o maior e o menorvalor em serie
let maximo = Math.max(2, -5, 8, 0, 11, -1)
let minimo = Math.min(2, -5, 4, 0, 11, -1)

console.log({minimo, maximo})

// E se a serie de números estiver em um vetor?

const nums = [2, -5, 4, 0, 11, -1]

minimo = Math.min(nums)
maximo = Math.max(nums)


console.log('valores de em vetor: ', {maximo, minimo})
//Não dá rapaz, Math.max ou min não consegue trabalhar com vetores

/*
    A sintaxe do espalhamento (spreading), represetando por ...
    antes do nome da variável, é capaz de "desempacotar" um vetor
    em uma serie de valores avulsos
*/

minimo = Math.min(...nums)
maximo = Math.max(...nums)


console.log('valores de em vetor: ', {maximo, minimo})

//outros usos

const carro1 = {
    modelo: 'Fiorino',
    marca: 'Fiat',
    ano: 1984,
    cor: 'bege'
}

//copiando carro1 para carro2

// const carro2 = carro1 // Não funciona

//Forçando a cópia de um objeto usando espalhamento

const carro2 = {...carro1} //... está desmontando o vetor somente neste instante, para facilitar a copia

//mudando o valor das propriedades de carro2
carro2.modelo = 'Fusca'
carro2.marca = 'volskswagen'
carro2.cor = 'preto'
carro2.ano = 1969

// Exibindo ambos carros
console.log({carro1, carro2})

/*
    Problema: juntar dois ou mais vetores em um novo vetor
*/

const frutas = ['maçã', 'banana', 'laranja', 'uva']
const verduras = ['alface', 'couve', 'cenoura', 'repolho']

const hortifruit = [...frutas, ...verduras]

console.log({hortifruit})

/*
    problema: declarar uma função que recebe um número arbitrário de parâmetros
*/

function soma(...nums){
    let resultado = 0
    for(let n of nums) resultado += n
    return resultado
}

console.log(`Soma de 4 numeros ${soma(1, 2, 3, 4)}`)
console.log(`Soma de 7 numeros ${soma(11, 22, 33, 44, 55, 66, 77)}`)