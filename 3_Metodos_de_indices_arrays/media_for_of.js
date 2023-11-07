const notas = [10, 6.5, 8, 7.5]

let soma = 0;
for(let valor of notas){
    soma += valor;
}
let media = soma / notas.length
console.log(media)
