/*função tradicional com um parâmetro e 1 linha se corpo com return */
function quadrado(n){
    return n * n
}

console.log('[tradi] o quadrado de 7 é', quadrado(7))

const quadradoA = n => n * n
/*quadradoA= nome da função; n= é o parentese(n); => = é a função; e o conteudo depois da arrow é o conteudo
função equivalente, usando a sintaxe arrow function
~>não necesita de chaves
~>não necesita de parênteses em volta do parâmeto
~>não necesita da palavra-chave "return"
~>a palavra-chave "function" é subistiduida pela flecha => 
*/

console.log('[arrow] o quadrado de 7 é', quadradoA(7))

function calc(a, b, c){
    return a * b + c
}

console.log('[tradi] o resultado de calculo é', calc(10, 20, 30))

/*
equivalente em sintaxe arrow function
~> quando o numero de parâmetro é diferente de 1, os  parênteses voltam a ser obrigatorios
*/

const calcA = (a, b, c) => a * b + c

console.log('[ARROW] o resultado de calculo é', calcA(10, 20, 30))

/*
    Função tradicional sem parâmetros e uma linha de corpo com return
*/

function msg(){
    return `Erro fatal!`
}

console.log('[tradi] Mensagem de erro', msg())

/*
    Equivalente na sintaxe arrow function
    ~>parenteses vazios devem ser usados para marca o lugar do paramentro
*/

const msgerroA = () => `Erro fatal!`
console.log('[Arrow] Mensagem de erro', msgerroA())

/*
    função tradicional com um Parâmentro e varias linhas
*/

function fatorial(x){
    let resultado = 1
    for(let i = x; i > 1; i--) resultado *= i
    return resultado
}

console.log('[tradi] o fatorial de 8 é', fatorial(8))

const fatorialA = x => {
    let resultado = 1
    for(let i = x; i > 1; i--) resultado *= i
    return resultado
}

console.log('[ARROW] o fatorial de 8 é', fatorialA(8))
/*
    obs: não vale muito apena para o usso de arrow nexte aqui
*/