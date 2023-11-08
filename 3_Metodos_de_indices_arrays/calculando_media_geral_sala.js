const salaJs = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

function calculaMedia(salas){
    const result = salas.reduce((acc, sala)=> acc + sala, 0);

    return result / salas.length
}

const mediaJs = calculaMedia(salaJs)
console.log(mediaJs)

const mediaJava = calculaMedia(salaJava)
console.log(mediaJava)

const mediaPython = calculaMedia(salaPython)
console.log(mediaPython)