let media =  7.6, situcao

if(media >= 6){
    situcao = 'Aprovado'
}
else{
    situcao = 'Reprovado'
}

console.log('Situação do aluno com média ', media, ' é', situcao)

media = 5.1

/*
    decidindo a situação do aluno usando o operador ternário
*/

situcao = media >= 6 ? 'Aprovado' : 'Reprovado'

console.log('Situação do aluno com média ', media, ' é', situcao)

let user = 'guest', msg
//decedindo se o usuario pode entrar, usando if... else
/*
    quando há apenas uma linha após um if, um while, etc., podemos omitir as chaves
*/

if(user === 'admin') msg = 'Bem vindo! '
else msg = 'Acesso negado'

console.log(user, msg)

// Tomado a mesma decisão, mas usando o operador ternário

msg = user === 'admin' ? 'Bem-vindo!' : 'Acesso negado! '

console.log(user, msg)
