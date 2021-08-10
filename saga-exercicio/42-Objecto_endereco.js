// JavaScript

// Criar um objecto endereço que contém:
// Rua 
// Cidade
// CEP
// exibirEndereco(endereco)

let endereco = {
    rua: 'Do Cota',
    cidade: 'Viana',
    cep: 2423434,
}

function exibirEndereco(endereco){
    for(let chave in endereco){
        console.log(chave, endereco[chave]);
    }
}
exibirEndereco(endereco);