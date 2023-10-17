// OPERADOR && = E

/**
 * QUANDO O VALOR À ESQUERDA DO && É TRUTHY O VALOR À DIREITA DO && É RETORNADO
 */
const resultado = true && false
console.log(resultado)

/**
 * QUANDO O VALOR À ESQUERDA DO && É FALSY O VALOR A ESQUERDA DO && É RETORNADO
 */
const resultado2 = true && false
console.log(resultado2)


// OPERADOR || = OU

/**
 * QUANDO O VALOR À ESQUERDA DO || É UM VALOR TRUTHY O VALOR À DIREITA DO || É RETORNADO
 */
const resultado3 = true || false
console.log(resultado3)

/**
 * QUANDO O VALOR À ESQUERDA DO || É IM VALOR FALSY O VALOR À DIREITA DO || É RETORNADO
 */
const resultado4 = false || true
console.log(resultado4)


// TERNÁRIO
const x = 1
const y = 1

// SINTAXE DE OPERADOR TERNÁRIO
// condição ? 'valor 1' : 'valor 2'

const comparaXeY = x === y ? `X: ${x} e Y: ${y}, são iguais.` : `X: ${x} e Y: ${y}, são diferentes.`

console.log(comparaXeY)

const pessoa = {
  nome: "João",
  sexo: "Masculino"
}

const agradecimento = pessoa.sexo === "Masculino" ? "Obrigado" : "Obrigada"

console.log(agradecimento)

