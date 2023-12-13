/*
Se o exercício não especificou nome do identificador (variável, 
parâmetro, propriedade, função), declare ele com o nome de sua 
preferência. 

Quando um exercício pedir para você criar uma função, escolha 
a forma de declaração de função que você preferir.

Mas arrow function é mais legal 😉
*/

/*
01

Crie uma função que recebe dois parâmetros e retorna o resultado 
da multiplicação deles.
*/
const multiplicar = (param1, param2) => param1 * param2
resultadoMultiplicacao = multiplicar(3, 3)
// console.log('Resultado:', resultadoMultiplicacao)


/*
02

Declare um objeto e armazene-o em uma const.

O objeto deve ter uma propriedade armazenando 7 e outra 
armazenando 3.

Invoque a função que você criou acima e passe como argumentos 
os números do objeto. 

A invocação da função deve retornar 21.
*/
const objeto = {
  prop1: 7,
  prop2: 3
}
const multiplicaProps = multiplicar(7, 3)
// console.log('Multiplicação das propriedades:', multiplicaProps)


/*
03

Declare um array e armazene-o em uma const.

O array deve ter os itens 5 e 7.

Invoque a função que você criou no exercício 01 e passe como 
argumentos os números do array. 

A invocação da função deve retornar 35.
*/
const array = [5, 7]
const multiplicaIndex = multiplicar(5, 7)
// console.log('Multiplicação dos indíces:', multiplicaIndex)


/*
04

Crie uma função pegaNumerosImpares que retorna um array com os 
números 5, 3 e 9.

Invoque a função que você criou no exercício 01 e passe como 
argumentos os números 3 e 9 do array. 

Não armazene os retornos da invocação de pegaNumerosImpares 
em consts.

A invocação da função que você criou no exercício 01 deve 
retornar 27.
*/
const pegaNumerosImpares = () => {
  return arr = [5, 3, 9]
}
// console.log('Resultado:', multiplicar(3, 9))


/*
05

Crie uma função pegaObj que retorna um array com 3 objetos. 

Cada objeto deve ter uma propriedade numero.

A propriedade numero do primeiro objeto deve armazenar 2.

A propriedade numero do segundo objeto deve armazenar 4.

E a propriedade numero do terceiro objeto deve armazenar 6.

Invoque a função que você criou no exercício 01 e passe como 
argumentos os números 2 e 6 dos objetos. 

Não armazene os retornos da invocação de pegaObj em consts.

A invocação da função que você criou no exercício 01 deve 
retornar 12.
*/
const pegaObj = () => {
  const arr = [
    {numero: 2},
    {numero: 4},
    {numero: 6}
  ]
}
// console.log('Resultado:', multiplicar(2, 6))

/*
06

Crie uma função pegaRespostasUsuario que retorna um array com os 
itens 'A', 'B', 'A' e 'D'.
*/
const pegaRespostasUsuario = () => {
  return respostas = ['A', 'B', 'A', 'D']
}
// console.log(pegaRespostasUsuario())


/*
07

Crie uma função pegaPontuacao que contém um parâmetro 
respostasUsuario.

Na primeira linha da função, crie uma const que armazena o último 
item do array que você declarou no exercício acima. Armazene o 
item usando o parâmetro respostasUsuario e sintaxe de colchetes. 
Não invoque a função que você criou no exercício anterior. 

Abaixo da const, crie uma let pontuacao que recebe zero. 

Se a const que você declarou na primeira linha da função é igual 
a 'A', atribua a pontuacao o valor que ela tem somado a 50.

Senão, se a const é igual a 'C', atribua a pontuacao o valor que 
ela tem somado a 25.

Senão, atribua a pontuacao o valor que ela tem somado a 100.

Na última linha dentro do bloco da função, retorne pontuacao.
*/



/*
08

Crie uma const respostasUsuario que armazena o retorno da 
invocação de pegaRespostasUsuario.

Invoque pegaPontuacao e passe respostasUsuario como argumento.

A invocação de pegaPontuacao deve retornar 100.
*/



/*
09

Faça o código da função pegaPontuacao ser imutável. 

Isto é, elimine da função qualquer ocorrência de reatribuição. 

Dicas: 

A palavra-chave return pode ser inserida dentro de bloco de if, 
else if ou else. 

O único requisito para você usar return é ele estar dentro de uma 
função.
*/
