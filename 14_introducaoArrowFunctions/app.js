// RETORNO IMPLICITO DE UM OBJETO COM ARROW FUNCTION
const pegaObj = (param1, param2) => ({
  prop1: param1,
  prop2: param2
})
console.log(pegaObj(1, 2))

// ARROW FUNCTION
const pegaMensagem2 = (nome) => `Meu nome é ${nome}`
console.log(pegaMensagem2('Astolfo'))

// TRADITIONAL FUNCTION
function pegaMensagem (nome) {
  return `Meu nome é ${nome}`
}
console.log(pegaMensagem('Leonardo'))