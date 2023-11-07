const alunos = ['joão', 'juliana', 'ana', 'caio']

const medias = [10, 8, 7.5, 9]

const listaDeAlunosEMedias = [alunos, medias]

function exibeNomeENota(aluno){
    const [alunos, medias] = listaDeAlunosEMedias 
    if(alunos.includes(aluno)){ //o includes verifica se um determinado objeto seta incluso dentro de outro         
        const indice = alunos.indexOf(aluno)
        const media = medias[indice]
        console.log(`${aluno} tem a media ${media}`)
    }else{
        console.log(`${aluno} não está cadastrado`)
    }
}

exibeNomeENota('juliana')