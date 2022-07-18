const alunos = [
    {
        nome: 'A',
        nota: 4
    },
    {
        nome: 'B',
        nota: 7
    },
    {
        nome: 'C',
        nota: 3
    },
    {
        nome: 'D',
        nota: 5
    }
]
function alunosQpassaram(arr, media) {
    let aprovados =[];
    for(i=0 ;i< arr.length;i++){
        const {nome, nota} = arr[i];
        if(arr[i].nota >= media) {
            aprovados.push(arr[i].nome);
        }
    }
    return aprovados;
}
console.log(alunosQpassaram(alunos, 5));
