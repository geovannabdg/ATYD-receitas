const header = document.querySelector("header");
window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        header.style.backgroundColor = "rgba(0,0,0,0.85)";
    }
    else{
        header.style.backgroundColor = "rgba(0,0,0,0.2)";
    }
});
const textos = document.querySelectorAll(".caixa-historia p");
textos.forEach((texto, index) => {
    texto.style.opacity = "0";
    setTimeout(() => {
        texto.style.transition = "1.5s";
        texto.style.opacity = "1";
    }, index * 1000);
});
function abrirReceita(botao){
    const receita = botao.nextElementSibling;
    if(receita.style.display === "block"){
        receita.style.display = "none";
        botao.textContent = "Ver Receita";
    }else{
        receita.style.display = "block";
        botao.textContent = "Ocultar Receita";
    }
}
const links = document.querySelectorAll("nav a");
links.forEach(link => {
    if(link.href === window.location.href){
        link.classList.add("ativo");
    }
});