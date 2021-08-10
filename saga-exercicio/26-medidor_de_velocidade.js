// velocidade máxima de até 70
// a cada 5km acima ao limte você ganha 1 ponto
// Math.Floor()
// caso pontos maior que 12 -> "Carteira Suspendida"

verificarVelocidade(81);

function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const KmPorPontos = 5;
    const limitesCarteira = 12;
    if(velocidade <= velocidadeMaxima){
        console.log('OK');
    }else{
        const pontos = (velocidade - velocidadeMaxima) / KmPorPontos;
        if (pontos >= limitesCarteira) {
            console.log("Carteira suspensa");
        } else {
            console.log("Pontos ", Math.floor(pontos));
        }
    }

}