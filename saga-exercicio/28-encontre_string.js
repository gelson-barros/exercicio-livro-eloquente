// Criar um método para ler propriedades de um objecto e
// exibir somente as propriedades do tipo string que estão neste objecto

const filme = {
    titulo : 'Vingadores',
    ano: 2018,
    director:'Robin',
    personagem:'Thor'
}

exibirPropriedades(filme)
function exibirPropriedades(obj){
    // console.log(
    //     Object.keys(obj).filter(keys=> typeof obj[keys] === 'string')
    // )
    for (const prop in obj) {
        if (typeof obj[prop] == 'string') {
            console.log(prop, obj[prop])           
        }
    }
}