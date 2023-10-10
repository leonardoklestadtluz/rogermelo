const obj = {
  prop: 'valor',
  prop2: 'valor2'
}

const obj2 = { 
  ...obj,
  prop: 1
}
console.log('Objeto 2:', obj2)
console.log('Objeto:', obj)

// const obj = {
//   prop: 'valor',
//   metodo: function (x) {
//     console.log(this.prop)
//   }
// }

// obj.metodo(7)