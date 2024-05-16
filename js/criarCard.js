import { script } from "./script.js";

const formulario = document.querySelector("[data-formulario]");

/**
 *
 * @param {{imagem, produto, preco}} evento Cria um novo card recebendo
 * os argumentos `imagem`, `produto` e `preco`
 *
 * @returns {Promise<void>}
 */
async function criarCard(evento) {
  evento.preventDefault();

  const imagem = document.querySelector("[data-imagem]").value;
  const produto = document.querySelector("[data-produto]").value;
  const preco = document.querySelector("[data-preco]").value;

  const response = await script.criaCard(imagem, produto, preco);

  if (!response) {
    alert("Card não adicionado!");
    return;
  }

  alert("Card Adicionado com Sucesso!");

  // Recarrega a pagina quando um item é salvo
  location.reload();
}

formulario.addEventListener("submit", (evento) => criarCard(evento));