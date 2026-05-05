// classe que cria uma nova movimentação, sempre que um produto é cadastrado ou atualizado essa ação é registrada aqui
export class Movimentacao {
  constructor(tipo, produto, quantidade, data) {
    this.tipo = tipo;
    this.produto = produto;
    this.quantidade = quantidade;
    this.data = data;
  }
}
