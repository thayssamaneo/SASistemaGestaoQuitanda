// classe produto, permite a criação de novos produtos com seus devidos atributos
export class Produto {
  // construtor
  constructor(id, nome, categoria, preco, quantidade) {
    this.id = id;
    this.nome = nome;
    this.categoria = categoria;
    this.preco = preco;
    this.quantidade = quantidade;
  }
}
