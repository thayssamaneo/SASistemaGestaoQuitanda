// classe produto, permite a criação de novos produtos com seus devidos atributos
export class Produto {
  // construtor
  constructor(nome, categoria, preco, quantidade) {
    this.nome = nome;
    this.categoria = categoria;
    this.preco = preco;
    this.quantidade = quantidade;
  }
}
