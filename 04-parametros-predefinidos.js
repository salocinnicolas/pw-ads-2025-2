/*
    calcArea() é uma função que calcula a área de uma fisura geométrica
    plana, dadas a base, a altura e o tipo da forma
*/

// O parâmentro 'tipo' foi transformado em predefinido com valor padrão 'R'
// Se a função for chamada com apenas dois parâmetros, o terceiro omrtido será intrerpretado com 'R'

function calcArea(base, altura, tipo = 'R') {
        switch(tipo){
            case 'R': //retangulo
                return base * altura
            case 'T': //triangulo
                return base * altura /2
            case 'E': // elipse/circulo
                return (base/2) * (altura/2) * Math.PI
            default:
                return undefined
        }
}

console.log(`área triangulo 10x30: ${calcArea(10, 30, 'T')}`)
console.log(`área elipse(circulo) 7,5x7,5: ${calcArea(7.5, 7.5, 'E')}`)
console.log(`área retangulo 12,5x15,5: ${calcArea(12.5, 15.5, 'R')}`)
console.log(`área invalida 10x30: ${calcArea(10, 30, 't')}`)

//chamando com apenas dois parâmetros
console.log(`área retangulo 12x15: ${calcArea(12, 15)}`)

/*
    regras de uso de parâmetros predefinidos
    1) O parâmetro predefinido deve vir sempre por último
    2) Pode haver mais de um parâmetro predefinido, mas eles devem ser
*/