const url = "http://localhost:3000";

/**
 *
 * @returns
 */
async function listaCards() {
  const response = await fetch(`${url}/cards`);
  const data = await response.json();

  return data;
}

/**
 * @param {any} imagem
 * @param {string} preco
 * @param {string} produto
 * @returns {boolean}
 */
async function criaCard(imagem, produto, preco) {
  if (!produto) return false;
  if (!preco) return false;
  if (!imagem) return false;

  const response = await fetch(`${url}/cards`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      imagem: imagem,
      produto: produto,
      preco: preco,
    }),
  });

  const data = await response.json();
  console.log(data);
  if (!data) throw new Error(`Erro ao criar card: ${newCard.produto}`);

  return data;
}

async function editarCard(produto, preco, id) {
  const data = await listaCards();
  
  let card;
  if (Array.isArray(data)) {
    data.find((element) => {
      if (element.id == id) {
        card = {
          ...element,
          produto: produto,
          preco: preco,
        }
      }
    })
  }

  console.log(card)

  const response = await fetch(`${url}/cards/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({...card}),
  });

  console.log(response.data);
}

export const script = {
  listaCards,
  criaCard,
  editarCard,
  url,
};
