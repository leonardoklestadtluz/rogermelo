// FOREACH

/**
 * forEach não retorna valores
 */
const numeros = [1, 2, 3, 4]
let resultado = 0
numeros.forEach(numero => {
  resultado += numero
})
console.log(`Resultado: ${resultado}`)

/**
 * os parâmetros 'index e 'array', são opcionais.
 */
// const numeros = [1, 2, 3, 4]
// numeros.forEach((numero, index, array) => {
//   console.log(`Posição: ${index} | Número: ${numero} | Array: ${array}`)

// })

// EFEITO COLATERAL
// const obj = {prop: 'x'}

// const y = () => {
//   obj.prop = 'H'
// }

// y()

// console.log(obj.prop)