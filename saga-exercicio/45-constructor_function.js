// Constructor Function

// Criar um objecto postagem
// titulo, mensagem, autor,visualizacoes,comentarios,estadoaovivo

function Postagem(titulo, mensagem, autor){
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor
    this.visualizações = 0,
    this.comentarios = [],
    this.estadoAoVivo = true
}

let postagem = new Postagem('a', 'b', 'c');
console.log(postagem)