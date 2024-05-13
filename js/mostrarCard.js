import { script } from "./script.js";

const cards = document.querySelector("[data-cards]");

function constroiCard (imagem, produto, preco){
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
    <img class="imagem" src="${imagem}" alt="Imagem Capacete">
    <div class="card-container--info">
        <p class="produto">${produto}</p>
        <div class="card-container--value">
            <p class="preco">R$${preco}</p>
            <img id="lixo" src="./assets/lixeira.png" alt="Lixeira">
        </div>
    </div>
    `

    return card;
}

async  function listaCard(){
    const listaApi = await script.listaCards();
    listaApi.forEach(elemento => cards.appendChild
        (constroiCard(elemento.imagem, elemento.produto, elemento.preco)));
}

listaCard();