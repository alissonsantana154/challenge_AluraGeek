import { script } from "./script.js";

const formulario = document.querySelector("[data-formulario]");

async function criarCard(evento){
    evento.preventDefault();

    const imagem = document.querySelector("[data-imagem]").value;
    const produto = document.querySelector("[data-produto]").value;
    const preco = document.querySelector("[data-preco]").value;

    await script.criaCard(imagem, produto, preco);

    alert("Card Adicionado com Sucesso!");
}

formulario.addEventListener('submit', evento => criarCard(evento));