const carros = ['Chevette', 'fusca', 'Opala', 'Maverick', 'Belina', 'Del Rey']

/*
    O metodo includes() testa se um determinado elemento existe em um vetor.
    Retorna true se exetir, ou false, caso contrário
    O método includes() foi adicionado ao JAvascript apenas em setembro 2016
*/

console.log('Tem Fusca?', carros.includes('fusca'))
console.log('Tem Corcel?', carros.includes('Corcel'))
console.log('Tem Belina?', carros.includes('Belina'))

/*
    O metodo indexOf() retorna o indece (pocisão) de um elemento no vetor.
    Caso o elmento não exista, retorno -1
*/

console.log('posição maverick?: ', carros.indexOf('Maverick'))
console.log('posição Chevette?: ', carros.indexOf('Chevette'))
console.log('posição Kombi?: ', carros.indexOf('Kombi'))

/*
    Usando indexOf para testar a existencia de um elemento no vetor
    (como se fazia quando ainda não havia metodo includes)
*/

console.log('Tem Fusca?', carros.indexOf('fusca') >= 0)
console.log('Tem Corcel?', carros.indexOf('Corcel') >= 0)
console.log('Tem Belina?', carros.indexOf('Belina') >= 0)
