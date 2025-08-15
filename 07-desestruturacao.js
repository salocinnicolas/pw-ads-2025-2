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