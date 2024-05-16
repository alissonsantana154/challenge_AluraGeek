import { script } from "./script.js";

const cardsContainer = document.querySelector("[data-cards]");

async function onLixoClick(event) {
  if (event.target.id === "lixo") {
    const cardDiv = event.target.closest(".card");
    const produto = cardDiv.querySelector(".produto").textContent;
    try {
      await deletarCard(produto);
      cardDiv.remove();
    } catch (error) {
      console.error("Erro ao deletar card", error);
      alert("Erro ao deletar card.");
    }
  }
}

/**
 *
 * @param {} produto
 * @returns {Promise<>}
 */
async function deletarCard(produto) {
  const cards = await script.listaCards();
  const card = cards.find((card) => card.produto === produto);
  if (!card) throw new Error("Card não encontrado");

  const url = `${script.url}/cards/${card.id}`;
  const response = await fetch(url, { method: "DELETE" });
  if (!response.ok)
    throw new Error(`Erro ao deletar o card: ${response.statusText}`);

  setTimeout(() => {
    return response.json();
  }, 2000);
}

cardsContainer.addEventListener("click", (event) => onLixoClick(event));

export default deletarCard;
