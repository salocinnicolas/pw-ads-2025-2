//alguns dados de usario
const fullname =  'Nícolas de Oliveira e Melo'
const username =  'Nícolas'
const group =  'alunos'

// Crioando um objeto a partir das variáveis acima
const user1 = {
    fullname : fullname,
    username : username,
    group : group
}
console.log(user1)

/*
    Quando o nome das propriedades do objeto é identico à da variavel
    que lhe dará o valor, é possivel usar a sintaxe chamada Propriedade
    Abreviada, que permite não repetir os nomes das variaveis à frente do
    nome das propriedades
*/

const user2 = {
    fullname,
    username,
    group
}
console.log(user2)

// Um objeto pode mesclar propriedades abreviadas e não abrevidas
const user3 = {
    fullname,
    username,
    password : 'carralho',
    group,
    lastLogin : '2025-08-01 10:46:09'
}
console.log(user3)

/*
    Depurado usando propriedades abreviadas
*/

const x = 10, y = 'batata'

/*
    Exibindo o valor das duas variaveis com consle.log().
    Observe que os valores serão mostrados, mas a saida não informa
    quais as variaveis de onde provem os valores
*/

console.log(x, y)

/*
    Saida melhorada: passando um objeto formado pelas variaveis como
    propreidades abreviadas para console.log(), conseguimos identificar
    de onde vêm os valores
*/

console.log({x, y})
