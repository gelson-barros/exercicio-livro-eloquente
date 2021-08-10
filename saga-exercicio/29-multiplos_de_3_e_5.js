// Criar função somar que retorna a 
// soma de todos os multiplos de 3 e 5

// Multiplos de 3
// 3, 6, 9
// multiplos de 5
// 5, 10

// Somandos os multiplos

somar(10);
function somar(limte){
    let multiplo3 = 0;
    let multiplo4 = 0;
    for (let i = 0; i <= limte; i++) {
        if (i % 3 === 0 ) {
            multiplo3 += i;
        }else if(i % 5 === 0){
            multiplo4 += i
        }
    }
    console.log(multiplo4, multiplo3, multiplo3 + multiplo4);
}