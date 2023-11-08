const getCarSales = car => {
  const cars = {
    strada: 50.526,
    onix: 44.110,
    polo: 37.722
  }
  return cars[car] || 'Não há informações do carro'
}
console.log(getCarSales('strada'))
console.log(getCarSales('jetta'))

// const props = {prop1: 'value 1'}
// const propName = 'prop'
// console.log(props[propName + 1])


// const getFullName = ([name, middleName, lastName]) => `${name} ${middleName} ${lastName}`;
// const arr = ['Leonardo', 'Klestadt', 'Luz']
// const fullName = getFullName(arr)
// console.log('Nome completo:', fullName)


// const arr = [5, num = num => num * 2]
// const [number, double] = arr
// // const number = arr[0]
// // const double = arr[1]
// const result = double(number)
// console.log(result)


// const arr = ['João', 'da Silva']
// const name = arr[0]
// const surname = arr[1]
// const fullName = `${name} ${surname}`
// console.log('Nome completo:', fullName)








// const config = {
//   formatoModulo: 'esm',
//   futuro: {
//     v2Headers: true,
//     v2Meta: true
//   }
// }

// const x = ({ futuro }) => {
//   return { ...futuro, v2Meta: false }
// }

// const y = x(config)

// console.log(config.futuro.v2Meta)
// console.log(y.v2Meta)