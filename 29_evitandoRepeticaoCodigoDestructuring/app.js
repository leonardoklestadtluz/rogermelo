const playlist = {
  nome: 'Javascript do zero (curso para iniciantes)',
  videos: 34,
  visualizacoes: 7059,
  visibilidade: 'Pública'
}

const pegaMensagem = ({ nome, videos, visualizacoes, visibilidade }) => `A playlist ${nome} está com ${videos}, tem ${visualizacoes} visuaizações e tem a visibilidade ${visibilidade}`

const mensagem = pegaMensagem(playlist)

console.log(mensagem)


// const { nome, videos, visualizacoes, visibilidade } = playlist

// const mensagem = `A playlist ${nome} está com ${videos}, tem ${visualizacoes} visuaizações e tem a visibilidade ${visibilidade}`

// console.log(mensagem)


// const obj = {
//   prop: 1,
//   prop2: 2,
//   prop3: [1, 2, 3]
// }

// const obj2 = structuredClone(obj)

// obj2.prop3.push(4)

// console.log(obj2)
// console.log(obj)
// console.log(obj2 === obj)

// const obj2 = {
//   ...obj,
//   prop3: [...obj.prop3, 4]
// }

// console.log(obj2.prop3 === obj.prop3)
// console.log('prop3 do obj2:', obj2.prop3)
// console.log('prop3 do obj:', obj.prop3)