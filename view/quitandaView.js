export class QuitandaView {
  renderMensagem(msg) {
    const divMsg = document.getElementById("mensagens");
    divMsg.innerText = msg;
  }

  renderEstoque(estoque) {
    const divEstoque = document.getElementById("estoque");
    divEstoque.innerHTML = ""; // limpa antes de renderizar

    estoque.forEach((produto) => {
      const item = document.createElement("p");
      item.textContent = `ID: ${produto.id} | Nome: ${produto.nome} | Categoria: ${produto.categoria} | Preço: R$${produto.preco} | Quantidade: ${produto.quantidade}`;
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
