import { script } from "./script.js";

// Função para abrir o modal de edição
function abrirModalEditar(produto, preco, id) {
  const modal = document.createElement("div");
  modal.className = "edit-modal";
  modal.innerHTML = `
    <form class="container-edit" edit-formulario>
      <div class="container-items" id="container-items">
        <input type="text" id="edit-produto" name="edit-produto" placeholder="produto..." value="${produto}" minlength="4" maxlength="35">
        <input type="text" id="edit-preco" name="edit-preco" placeholder="preco..." value="${preco}" minlength="4">
        <button type="submit">Salvar</button>
      </div>
    </form>
  `;

  // Adiciona o modal à página
  document.body.appendChild(modal);

  // Adiciona o event listener para validar o preço
  const inputPreco = modal.querySelector("#edit-preco");
  inputPreco.addEventListener("input", function (event) {
    const valor = event.target.value.trim();
    const novoValor = valor.replace(/[^\d.]/g, "");
    const pontos = novoValor.split(".").length - 1;
    if (pontos > 1) {
      event.target.value = novoValor.slice(0, -1);
      return;
    }
    const partes = novoValor.split(".");
    if (partes.length === 2 && partes[1].length > 2) {
      event.target.value = partes[0] + "." + partes[1].slice(0, 2);
      return;
    }
    event.target.value = novoValor;
  });

  // Fecha o modal quando clicado fora dele
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.remove();
    }
  });

  modal.querySelector(".container-edit").addEventListener("click", (event) => {
    event.stopPropagation();
  });

  modal.querySelector("form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const novoProduto = modal.querySelector("#edit-produto").value;
    const novoPreco = modal.querySelector("#edit-preco").value;

    await script.editarCard(novoProduto, novoPreco, id);

    modal.remove();
  });
}

export { abrirModalEditar };
