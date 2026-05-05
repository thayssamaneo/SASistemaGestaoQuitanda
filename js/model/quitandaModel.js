import { Movimentacao } from "./movimentacaoModel.js";
// classe que cadastra os produtos, atualiza o estoque, lista os produtos atuais
export class QuitandaModel {
    // criação dos vetores de produtos e movimentações, eles devem permitir que acessemos qualquer produto e listemos todas as modificações realizadas
    constructor(){
        this.produtos = [];
        this.movimentacoes =[];
    }

    addProduto(produto){
      // procura no array produtos o nome do produto e se existe um igual
      const existe = this.produtos.find((p) => p.nome === produto.nome);
      const existe1 = this.produtos.find(
        (p) => p.nome.replace(/\s+/g,  "") === produto.nome,
      );

      if (produto.nome == ""){
        return "Informe o nome do produto";
      }

      // validar para que não existam dois produtos cadastrados iguais
      if (existe) {
        return "Produto já cadastrado!";
      }
      if (existe1) {
        return "Produto já cadastrado!";
      }

      produto.nome.toLowerCase();

      this.produtos.push(produto); // adciona o produto no array se ele não estiver cadastrado
      return "Produto cadastrado com sucesso!";
    }

    // método para atualizar o produto e o estoque, muda preço e quantidade
    atualizarProduto(nome, novaQuantidade, novoPreco){
        const produto = this.produtos.find(
          (produto) =>
            produto.nome.trim().toLowerCase() === nome.trim().toLowerCase(),
        ); // procura o produto na lista

        if (!produto){
            return "Produto não encontrado!";
        } // caso o produto não esteja no array

        if (
          isNaN(novaQuantidade) ||
          novaQuantidade === null ||
          novaQuantidade < 0
        ) {
          return "Quantidade inválida!";
        }

        // validar se a quantidade a ser adicionada é maior que 0
        if (novaQuantidade < 0){
            return "Quantidade inválida!";
        }

        // validar se o novo preço é maior que 0
        if (novoPreco < 0){
            return "Preço inválido!";
        }

        // atribuir as novas informações ao produto
        produto.quantidade = novaQuantidade;
        produto.preco = novoPreco;

        // registrar as alterações como uma nova modificação
        const mov = new Movimentacao("Atualização de preço e estoque", produto, novaQuantidade, new Date());
        this.movimentacoes.push(mov);

        return "Produto atualizado com sucesso!";
    }

    // método para registrar as vendas e vender
    venderProduto(nome, quantidade){
        const produto = this.produtos.find(
          (produto) =>
            produto.nome.toLowerCase() === nome ||
            produto.nome === nome ||
            produto.nome.replace(/\s+/g, "")
         === nome);
        
        if (!produto){
            return "Produto não encontrado!";
        }

        if (!quantidade || quantidade <= 0 || isNaN(quantidade)) {
          return "Informe uma quantidade válida para a venda.";
        }

        // checa se a quantidade de produtos disponível é suficiente para que a venda seja realizada
        if (produto.quantidade < quantidade){
            return "Estoque insuficiente";
        }

        produto.quantidade -= quantidade;

        const mov = new Movimentacao("Venda realizada", produto, quantidade, new Date());
        this.movimentacoes.push(mov);

        return "Venda registrada!";
    }

    listarEstoque(){
        return this.produtos;
    }

    listarMovimentacoes(){
        return this.movimentacoes;
    }
}