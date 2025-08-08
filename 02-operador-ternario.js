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