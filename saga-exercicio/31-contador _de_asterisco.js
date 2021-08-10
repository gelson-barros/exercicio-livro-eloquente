// Criar um a função que exibe a quantidade de * que aquela linha possui

exibirAsteriscos(5);

function exibirAsteriscos(linhas){
    // let asterisco = '';
    // for (let i = 0; i < linhas; i++) {
    //     asterisco += '*';
    //     console.log(asterisco);
    // }

    for (let linha = 1; linha < linhas; linha++) {
        let padrao = '';
        for (let i = 0; i < linha; i++) {
            padrao += '*';            
        }
        console.log(padrao);
        
    }
    
}