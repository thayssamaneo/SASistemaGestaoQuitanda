import { QuitandaModel } from "./model/quitandaModel.js";
import { QuitandaController } from "./controller/quitandaController.js";
import { QuitandaView } from "./view/quitandaView.js";

// Criar instâncias
const model = new QuitandaModel();
const view = new QuitandaView();
const controller = new QuitandaController(model, view);

// Cadastro de produto
document.getElementById("btnCadastrar").addEventListener("click", () => {
  const id = parseInt(document.getElementById("id").value);
  const nome = document.getElementById("nome").value;
  const categoria = document.getElementById("categoria").value;
  const preco = parseFloat(document.getElementById("preco").value);
  const quantidade = parseInt(document.getElementById("quantidade").value);

  controller.handleAddProduto(id, nome, categoria, preco, quantidade);
});

// Listar estoque
document.getElementById("btnListarEstoque").addEventListener("click", () => {
  controller.handleListarEstoque();
});

// Listar movimentações
document.getElementById("btnListarMov").addEventListener("click", () => {
  controller.handleListarMovimentacoes();
});

// Registrar venda
document.getElementById("btnVenda").addEventListener("click", () => {
  const nome = document.getElementById("nomeVenda").value;
  const quantidade = parseInt(document.getElementById("quantidadeVenda").value);

  controller.handleVenderProduto(nome, quantidade);
});

// Atualizar produto (quantidade e preço)
document.getElementById("btnUpdate").addEventListener("click", () => {
  const nome = document.getElementById("nomeUpdate").value;
  const novaQuantidade = parseInt(
    document.getElementById("quantidadeUpdate").value,
  );
  const novoPreco = parseFloat(document.getElementById("precoUpdate").value);

  controller.handleUpdateProduto(nome, novaQuantidade, novoPreco);
});
