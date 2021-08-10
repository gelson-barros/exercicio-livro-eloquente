// Receber uma quantidade de valores para avaliar
// função exibe se cada valor é par ou impar

exibirTipo(4);

function exibirTipo(limite){
    for(let i = 0; i <= limite; i++){
        console.log(i % 2 === 0 ? `PAR ${i}`: `IMPAR ${i}` )
    }
}