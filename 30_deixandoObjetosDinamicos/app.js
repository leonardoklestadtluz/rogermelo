// const getObj = newProp => ({ prop1: 'value 1', [newProp]: 'value 2'})

// const newProp = 'prop2'
// const obj = getObj(newProp)

// console.log(obj)


// const newProp = 'prop2'
// const props = { prop1: 'value 1', [newProp]: 'value 2' }
// console.log(props)


const getCarSales = car => {
  const cars = {
    strada: 50.526,
    onix: 44.110,
    polo: 37.722
  }

  return cars[car] || 'Não há informações do carro'
}

console.log(getCarSales('polo'))