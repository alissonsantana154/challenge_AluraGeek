async function listaCards (){
    const conexao = await fetch("https://json-server-vercel-beta-five.vercel.app/cards");
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;
}

async function criaCard(imagem, produto, preco){
    const conexao = await fetch("https://json-server-vercel-beta-five.vercel.app/cards",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            imagem: imagem,
            produto: produto,
            preco: preco
        })
    });

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

export const script = {
    listaCards,
    criaCard
}