/*
    O metodo de vetores map() cria um novo vetor qual cada elemento corresponde a uma
    transformação do elemento do vetor original. A transformação é controlada pela função
    passada pelo parâmetro. O novo vetor gerado pelo map terá sempre o mesmo número de elementos
    do vetor original
*/

const numeros = [12, 19, 3, -4, 13, -11, 15, -1, 0]
const frutas = ['laranja', ' Abacaxi', 'maçã', 'uva', 'jacuticaba', 'maracujá']

//gerando um novo vetor em cada elemento corresponde ao valor do elemento original elevado ao quadrado

const quadrado = numeros.map(n => n ** 2)
console.log('Vetor com número ao quadrado: ', quadrado)

//map() que transforma os elementos do elementos do vetor original em itens de lista para uso em uma pagina HTML (aplicação frequente em React)
const itensLista = frutas.map(f => `<li>${f}</li>`)
console.log("Vetor com itens de lista:", itensLista)

console.log('-'.repeat(80))

console.log(`<h1>Frutas encontradas no Brasil</h1>`)
console.log('<ul>')
for(const item of itensLista) console.log('  ', item)
console.log('</ul>')
//codeshare.io/faustocintra