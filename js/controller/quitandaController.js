// importa as classes do model
import { Produto } from "../model/produtoModel.js";
import { QuitandaModel } from "../model/quitandaModel.js";

export class QuitandaController {
    // coloca o model e o view para poder realizar a integração
    constructor(model, view){
        this.model = model;
        this.view = view;
    }

    // criando um novo produto
    handleAddProduto(nome, categoria, preco, quantidade){
        const novoProduto = new Produto(nome, categoria, preco, quantidade);
        const resultado = this.model.addProduto(novoProduto);
        this.view.renderMensagem(resultado); // vai mostrar a mensagem de sucesso se for bem sucedido
    }

    // atualizando um Produto
    handleUpdateProduto(nome, novaQuantidade, novoPreco){
        const resultado = this.model.atualizarProduto(nome, novaQuantidade, novoPreco);
        this.view.renderMensagem(resultado);
    }

    handleVenderProduto(nome, quantidade){
        const resultado = this.model.venderProduto(nome, quantidade);
        this.view.renderMensagem(resultado);
    }

    handleListarEstoque(){
        const estoque = this.model.listarEstoque();
        this.view.renderEstoque(estoque);
    }

    handleListarMovimentacoes(){
        const movs = this.model.listarMovimentacoes();
        this.view.renderMovimentacoes(movs);
    }
}