export class QuitandaView {
  renderMensagem(msg) {
    const divMsg = document.getElementById("mensagens");
    divMsg.innerText = msg;
    setTimeout(() => {
      divMsg.innerText = "";
    }, 3000);
  }

  limparFormularios() {
    const todosInputs = document.querySelectorAll("input");
    todosInputs.forEach((input) => (input.value = ""));
  }

  renderEstoque(estoque) {
    const divEstoque = document.getElementById("estoque");
    divEstoque.innerHTML = ""; // limpa antes de renderizar

    estoque.forEach((produto) => {
      const item = document.createElement("p");
      item.textContent = `Nome: ${produto.nome} | Categoria: ${produto.categoria} | Preço: R$${produto.preco} | Quantidade: ${produto.quantidade}`;
      divEstoque.appendChild(item);
    });
  }

  renderMovimentacoes(movimentacoes) {
    const divMov = document.getElementById("movimentacoes");
    divMov.innerHTML = "";

    movimentacoes.forEach((mov) => {
      const item = document.createElement("p");
      item.textContent = `${mov.tipo.toUpperCase()} - Produto: ${mov.produto.nome} | Quantidade: ${mov.quantidade} | Data: ${mov.data}`;
      divMov.appendChild(item);
    });
  }
}


