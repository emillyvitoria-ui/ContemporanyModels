// Script feito para permitir a reutilização do header em todas as paginas

async function carregarHeader() {
    const alvo = document.getElementById("header-placeholder");
    if (!alvo) return;

    try {
        const resposta = await fetch("./header.html");
        if (!resposta.ok) throw new Error("Erro ao carregar o header");
        alvo.innerHTML = await resposta.text();
    } catch (erro) {
        console.error(erro);
        return;
    }

    // Só carrega o menu.js depois que o header já está no DOM
    const script = document.createElement("script");
    script.src = "./scripts/menu.js";
    document.body.appendChild(script);
}

carregarHeader();