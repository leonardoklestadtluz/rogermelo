/*
Durante a resolução desta bateria de exercícios você verá erros 
no console do navegador. 

Fazer os erros desaparecerem é parte da resolução dos exercícios. 

Importante: ainda que haja um erro no console do navegador, você pode escrever e executar seu código normalmente antes da linha do erro. 

Exemplo: se a mensagem do erro no console diz que o erro está na linha 81, você pode ir resolvendo os exercícios e escrever seu código acima da linha 81 normalmente, ok? =)
*/

/*
01

Vincule este arquivo (app.js) ao index.html desta mesma pasta.
*/

/*
02
 
Conserte o nome da let abaixo.
*/

let numeroImpar = 7
// console.log(numeroImpar)

/* 
03

Faça a let acima receber o número 3. 

Não modifique a declaração da let. 

O código que você escrever deve estar abaixo deste comentário.
*/
numeroImpar = 3
// console.log(numeroImpar)


/*
04

Faça a const abaixo ser exibida no console do navegador.

Após ver o valor da const no console, remova do código o comando 
que exibiu a const no console.
*/
const meExiba = 123
// console.log(meExiba)

/*
05

A const abaixo foi nomeada como uma abreviação.

Apenas lendo a declaração dela, você sabe o que a abreviação "np" 
significa?

Provavelmente, não. Certo?

O objetivo deste exercício é exatamente este. Deixar claro que 
abreviações podem prejudicar o entendimento de um código. 

O nome correto da const (sem abreviação) será revelado na próxima 
aula. 
*/
const numeroPar = 2
// console.log(numeroPar)

/* 
06

O código abaixo está lançando um erro no console. 

O que você pode ajustar na declaração de "videoGame" para que o 
erro não seja mais exibido?

Leia a mensagem do erro no console. Ela já está te dando a dica 
do que deve ser ajustado.

Dica: o ajuste deve ser feito apenas na linha da declaração de 
"videoGame". 
*/
let videoGame = 'Xbox'
videoGame = 'Playstation'
// console.log(videoGame)

/*
07

Apenas lendo o código abaixo, você consegue saber qual valor a 
const "final" armazenou?

Após calcular o resultado em sua mente, exiba a const "final" no 
console para conferir se o valor que você imaginou está certo. 
*/
const x = 0
let y = 3
let w = x

w = 15 - y
y = 5

const final = x + y + 7 + w
//            0   5       12 = 24 
// console.log(final)

/*
08

Conserte a declaração da variável abaixo. 
*/
const umNumeroQualquer = 9
// console.log(umNumeroQualquer)

/*
09

Abaixo da declaração da const "curso", declare uma nova constante 
chamada "sigla".

O valor desta nova constante deve ser "CJRM". 

Não insira manualmente nenhum dos caracteres da sigla "CJRM".

Isto é, você não deve inserir diretamente o caractere "C", por 
exemplo.

O valor da constante "sigla" deve ser gerado através do valor 
que a const "curso" armazena.

Após gerar o valor da constante "sigla", exiba-a no console para 
checar se você realmente gerou o valor certo ("CJRM"). 

Após ver o valor no console, remova o console.log() do seu código.

Leia a dica abaixo apenas se não conseguir fazer o exercício com 
as informações acima. 

Dica: use concatenação e sintaxe de acesso de caractere de string 
para gerar o valor da constante "sigla".
*/

const curso = 'Curso de JavaScript Roger Melo'
const sigla = curso[0] + curso[9] + curso[20] + curso[26]
// console.log(sigla)

/*
10

Conserte o que está errado na string abaixo.
*/
const likes = 197
const mensagem = `Sua foto recebeu ${likes} likes`
// console.log(mensagem)


/*
11

Crie uma const "serie".

Esta const deve armazenar um objeto com as seguintes propriedades:

- nome, sendo o valor do tipo string
- temporadas, sendo o valor do tipo number
- episodios, sendo o valor do tipo number
- emissora, sendo o valor do tipo string

Os valores das propriedades acima ficam ao seu critério. Use uma 
série que você curta =)
*/
const serie = {
  nome: 'Fear The Walking Dead',
  temporadas: 6,
  episodios: 350,
  emissora: 'AMC'
}
// console.log(serie)


/*
12

Obtenha o valor de cada propriedade do objeto "serie" e exiba-o 
no console.
*/
const serieUm = `
  Nome: ${serie.nome}
  Temporadas: ${serie.temporadas}
  Episódios: ${serie.episodios}
  Emissora:${serie.emissora}
`
// console.log(serieUm)


/*
13

Sobrescreva o valor de cada propriedade do objeto.

Após sobrescrever, exiba o novo valor de cada uma no console.
*/
const serieDois = {
  nome: 'Lupin',
  temporadas: 3,
  episodios: 60,
  emissora: 'Netflix'
}

const resposta = `
  Nome: ${serieDois.nome}
  Temporadas: ${serieDois.temporadas}
  Episódios: ${serieDois.episodios}
  Emissora:${serieDois.emissora}
`
// console.log(resposta)