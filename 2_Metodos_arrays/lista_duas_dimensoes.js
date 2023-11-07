const alunos = ['joão', 'juliana', 'ana', 'caio']

const medias = [10, 8, 7.5, 9]

const listaDeAlunosEMedias = [alunos, medias]

console.log(listaDeAlunosEMedias)
console.log(listaDeAlunosEMedias[0][1])
console.log(listaDeAlunosEMedias[1][1])

const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat = arrayOriginal.concat("André", "Fernanda")

console.log(arrayConcat)
console.log(arrayOriginal)

const arrayOriginal2 = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat2 = arrayOriginal.concat(["André", "Fernanda"], ["Ricardo", "Ana"], ["Marcelo", "Bia"])

console.log(arrayConcat2)
console.log(arrayOriginal2)

const arrayOriginal3 = [50, 60, 70]
const arrayConcat3 = arrayOriginal.concat([80, [90, 100]])

console.log(arrayConcat3)
console.log(arrayOriginal3)