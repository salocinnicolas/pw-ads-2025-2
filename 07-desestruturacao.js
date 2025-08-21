/*
    desestruturação é a operação pela qual é possivel extrair valores individuais
    de vetores e objetos, atribuindo-os a variaveis avulsas
*/

// 1) desestruturação de vetor
const carros = ['Fusca', 'chevete', 'Opala']

//desestruturação
const [c1, c2, c3] = carros

/*
    sem a desetruturação, seria necessario fazer
    const c1 = carros[0]
    const c2 = carros[1]
    const c3 = carros[2]
*/

console.log({c1, c2, c3})

//desetruturação parcial: 1° e 2° valores
const [x, y]= carros
console.log('primeiro e segundo carros: ', {x, y})

//desetruturação parcial: 1° e 3° valores
const [a, , b]= carros
console.log('primeiro e terceiro carros: ', {a, b})

//desetruturação parcial: 1° e 3° valores
const [, m, n]= carros
console.log('segundo e terceiro carros: ', {m, n})

console.log('-'.repeat(80))//traço separador

//Problema: troca de valores de variáveis entre si (swap)

let v1 = 10, v2 = 20
console.log('Valores originais: ', {v1, v2})

//Modo classico de fazer swap (usando variavel auxiliar)
// let aux = v1
// v1 = v2
// v2 = aux

//swap usando desetruturação
{[v1, v2] = [v2, v1]}

console.log('Valores trocados: ', {v1, v2})

console.log('-'.repeat(80))

// 2) desestruturação de obejetos

const pessoa = {
    nome : 'Nicolau stvepank',
    genero : 'M',
    dataNas : '2002-08-01',
    email : 'xxShadowlord69xx@gmail.com'
} 

/*
    Na desestruturação de objetos , as variaveis avulsas:
    ~> Devem ter mo mesmo nome das propriedades do objetos
    ~> Podem ser especificadas em qualquer ordem
    ~> Pode der feita a desedtruturação parcial
*/

const { genero, nome, email} = pessoa

console.log('Nome: ', nome)
console.log('Genero: ', genero)
console.log('Email: ', email)