// Criar função para mostrar os números primos


// Primos
// Compostos

// Ex: 10, 11
// (divisivel por 1 ou por ele mesmo)
// 10 - 1,2,5,10
// 11 - 1,11
exibirNumerosPrimos(15);

// function exibirNumerosPrimos(limite){
//     for (let numero = 0; numero < limite; numero++) {
//         let ehPrimo = true;
//         for(let divisor = 2; divisor < numero; divisor++){
//             if (numero % divisor === 0) {
//                 ehPrimo = false;
//                 break;
//             }
//         }
//         if (ehPrimo) console.log(numero);
//     }    
// }

function exibirNumerosPrimos(limite) {
    for (let numero = 0; numero < limite; numero++) {
        if (numeroPrimo(numero)) console.log(numero);
    }
}

function numeroPrimo(numero) {
    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            return false;
        }
    }
    return true;
}