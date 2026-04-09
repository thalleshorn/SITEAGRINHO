// MENU RESPONSIVO
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// SCROLL SUAVE
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

// FORMULÁRIO
const form = document.getElementById("formContato");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    mensagem.textContent = "Mensagem enviada com sucesso!";
    mensagem.style.color = "green";
    form.reset();
});
