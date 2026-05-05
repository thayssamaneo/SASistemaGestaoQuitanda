import { QuitandaModel } from "./model/quitandaModel.js";
import { QuitandaController } from "./controller/quitandaController.js";
import { QuitandaView } from "./view/quitandaView.js";
import { Produto } from "./model/produtoModel.js"; // Adicionado

const model = new QuitandaModel();
const view = new QuitandaView();
const controller = new QuitandaController(model, view);

// Cadastro de produto
document.getElementById("btnCadastrar").addEventListener("click", () => {
  const nome = document.getElementById("nome").value;
  const categoria = document.getElementById("categoria").value;
  const preco = parseFloat(document.getElementById("preco").value);
  const quantidade = parseInt(document.getElementById("quantidade").value);

  // Criamos o objeto Produto antes de enviar ao controller
  const novoProduto = new Produto(nome, categoria, preco, quantidade);
  const resultado = model.addProduto(novoProduto);
  view.renderMensagem(resultado);

  controller.handleAddProduto(nome, categoria, preco, quantidade);
  view.limparFormularios(); // Limpa após cadastrar
});

// Listar estoque
document.getElementById("btnListarEstoque").addEventListener("click", () => {
    const estoque = model.listarEstoque();
    view.renderEstoque(estoque);
});

// Listar movimentações
document.getElementById("btnListarMov").addEventListener("click", () => {
    const movimentacoes = model.listarMovimentacoes();
    view.renderMovimentacoes(movimentacoes);
});

// Registrar venda
document.getElementById("btnVenda").addEventListener("click", () => {
  const nome = document.getElementById("nomeVenda").value;
  const quantidade = parseInt(document.getElementById("quantidadeVenda").value);
  const resultado = model.venderProduto(nome, quantidade);
  view.renderMensagem(resultado);

  controller.handleVenderProduto(nome, quantidade);
  view.limparFormularios(); // Limpa após vender
});

// Atualizar produto
document.getElementById("btnUpdate").addEventListener("click", () => {
  const nome = document.getElementById("nomeUpdate").value; // Usa o campo do topo
  const novaQuantidade = parseInt(
    document.getElementById("quantidadeUpdate").value,
  );
  const novoPreco = parseFloat(document.getElementById("precoUpdate").value);

  const resultado = model.atualizarProduto(nome, novaQuantidade, novoPreco);
  view.renderMensagem(resultado);

  controller.handleUpdateProduto(nome, novaQuantidade, novoPreco);
  view.limparFormularios(); // Limpa após atualizar
});

