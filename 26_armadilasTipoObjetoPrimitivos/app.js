// REST PARAMETERS


// SPREAD '...' QUANDO SÃO USADOS DENTRO DE OBJETOS ({} ou [])
const obj = {
  prop: 1,
  prop3: 3
}

const obj2 = {
  ...obj,
  prop2: 2
}

console.log(obj)
console.log(obj2)

// TIPOS OBJETOS (Objetos: { prop: 1 }, Arrays: [1, 2, 3], Funções: () => {}) SÃO MUTÁVEIS EM JAVASCRIPT

/**
 * armazena o mesmo objeto em memória
 * 
 * A está recebendo o valor B por referência
 */
// const a = { prop: 1, prop2: 2}
// const b = a
// console.log(a === b)

// const arr = ['a', 'b', 'c']
// console.log(`Array pré mudança: ${arr}`)
// arr[3] = 'd'
// console.log(`Array pós mudança: ${arr}`)

// const obj = { prop: 1 }
// console.log('Objeto pré mudança:', obj)
// obj.prop2 = 2
// console.log('Objeto pós mudança:', obj)


// TIPOS PRIMITIVOS (number, string, object, boolean, undefined, null, biint e symbol) SÃO IMUTÁVEIS EM JAVASCRIPT

/**
 * em tipos primitivos em Javascript, todo o valor é passado por valor
 */

// armazena objetos diferentes na memória
// const x = { prop: 1, prop2: 2}
// const y = { prop: 1, prop2: 2}
// console.log(x === y)

/**
 * o método replace não altera a string original,
 * ele retorna uma nova string com a alteração 
 * realizada
 */
// const mensagem = 'Oi! Seu pai tem cavalo?'

// const novaMensagem = mensagem.replace('cavalo', 'boi')

// console.log(`MENSAGEM ORIGINAL: ${mensagem}`)
// console.log(`NOVA MENSAGEM: ${novaMensagem}`)


// const trimestres = [
//   ['Janeiro', 'Fevereiro', 'Março'],
//   ['Abril', 'Maio', 'Junho'],
//   ['Julho', 'Agosto', 'Setembro']
// ]

// trimestres[3] = ['Outubro', 'Novembro', 'Dezembro']

/**
 * Não é possível mudar tipos primitivos
 */
// trimestres[3][0][0] = 'O'

// trimestres[3][0] = 'Outubro'
// console.log(trimestres)