const notas = [10, 6.5, 8, 7.5];
let soma = 0;
notas.forEach((nota, indice) => {
    //console.log(indice)
    soma += nota;
})

let media = soma / notas.length;
console.log(media);
