//pegar o botão de selecao de plataformas, para verificar se o usuario clicou
const botao = document.querySelector(".btn-plataforma");
//pegar o elemento do conteudo que vai ser mostrado
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");
//pegar o clique do usuario
botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
   
});