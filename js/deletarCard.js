import { script } from "./script.js"; 

const cardsContainer = document.querySelector("[data-cards]"); 

cardsContainer.addEventListener("click", async (event) => { 
    if (event.target.id === "lixo") { 
        const cardDiv = event.target.closest(".card"); 
        const produto = cardDiv.querySelector(".produto").textContent; 
        try { 
            await deletarCard(produto); 
            cardDiv.remove(); 
            alert("Card deletado com sucesso!"); 
        } catch (error) { 
            console.error("Erro ao deletar card", error); 
            alert("Erro ao deletar card."); 
        } 
    } 
}); 

async function deletarCard(produto) {
    const cards = await script.listaCards(); 
    const card = cards.find(card => card.produto === produto); 
    if (!card) { throw new Error("Card não encontrado"); 
    } 
    
    const url = `https://json-server-vercel-beta-five.vercel.app/cards/${card.id}`; 
    const response = await fetch(url, { method: 'DELETE' }); 
    if (!response.ok) { 
        throw new Error(`Erro ao deletar o card: ${response.statusText}`); 
    } 
    
    return response.json(); 
} 

export default deletarCard;