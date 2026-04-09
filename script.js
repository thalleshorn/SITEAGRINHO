// MENU RESPONSIVO
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// SCROLL SUAVE
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

// SISTEMA DE BUSCA
function buscar() {
    const termo = document.getElementById("searchInput").value.toLowerCase();
    const resultado = document.getElementById("resultado");

    const dados = {
        "agricultura familiar": "Base da produção alimentar sustentável.",
        "agroecologia": "Modelo agrícola sustentável e ecológico.",
        "produção orgânica": "Alimentos sem uso de agrotóxicos.",
        "sustentabilidade": "Equilíbrio entre produção e meio ambiente."
    };

    if (dados[termo]) {
        resultado.innerHTML = `<p>${dados[termo]}</p>`;
    } else {
        resultado.innerHTML = "<p>Resultado não encontrado.</p>";
    }
}
