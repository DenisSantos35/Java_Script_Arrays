const chamada = ['Ana', 'Clara', 'Maria', 'Maria', 'Joao', 'Joao', 'Joao']

//const meuSet = new Set(chamada);

//const nomesAtualizados = [...meuSet];

const nomesAtualizados = [...new Set(chamada)]

console.log(nomesAtualizados)
