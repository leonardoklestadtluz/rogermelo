// FOR LOOP
const numeros = [1, 2, 3, 4, 5]
console.log(numeros)
let resultado = 0
for (let i = 0; i < numeros.length; i++) {
  resultado = resultado + numeros[i]
}

console.log('Soma de todos os números:', resultado)

// MÉTODOS
// const numeros = [1, 2, 3, 2, 3]
// console.log('Comprimento do array:', numeros.length)

// const str = 'abcdefghij'
// console.log('Quantidade de caracteres:', str.length)


// const resultado = numeros[0] + numeros[1] + numeros[2] + numeros[3] + numeros[4]


// MÉTODO PUSH
const numeros2 = [1, 2, 3]
numeros2[numeros2.length] = 4

numeros2.push(5)

console.log(numeros2)