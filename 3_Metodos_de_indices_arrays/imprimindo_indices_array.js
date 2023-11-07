const numeros  = [100, 200, 300, 400, 500, 600]

for(let i = 0; i < numeros.length; i++){
    console.log(`indice ${i}: numero ${numeros[i]}`)
    
}
console.log("")
for (let i of numeros){
    let indice = numeros.indexOf(i)
    console.log(`indice ${indice}: numero ${i}`)
}
console.log("")
for(let i in numeros){
    console.log(`indice ${i}: numero ${numeros[i]}`)
}
console.log("")
numeros.forEach((numero)=>{
    let indice = numeros.indexOf(numero)
    console.log(`indice ${indice}: numero ${numero}`)
})