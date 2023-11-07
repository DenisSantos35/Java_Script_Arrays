const notas = [10, 6, 8, 5.5, 10]

const removido = notas.pop()

console.log(notas)
console.log(removido)

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length

console.log(`A média é ${media}`)

let arrayVazia = [];

console.log(arrayVazia)
console.log(arrayVazia.length)


console.log(arrayVazia[0])

arrayVazia = [,,,];
console.log(arrayVazia.length)
console.log(arrayVazia[0])
console.log(arrayVazia[1])
console.log(arrayVazia[2])

console.log(arrayVazia.length)
arrayVazia.push(50)
console.log(arrayVazia)
console.log(arrayVazia.length)

jantarDeHoje = ['🍔', '🌭', '🍕']

jantarDeHoje.pop()
jantarDeHoje.pop()

jantarDeHoje.push('🍳')
jantarDeHoje.push('🥗')
jantarDeHoje.push('🍏')

console.log(jantarDeHoje)