document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-tab-button]");
  const question = document.querySelectorAll("[data-faq-question]");
  const heroSection = document.querySelector(".hero");
  const alturaHero = heroSection.clientHeight;

  window.addEventListener("scroll", function () {
    const posicaoAtual = window.scrollY;

    if (posicaoAtual < alturaHero) {
      ocultaElementosDoHeader();
    } else {
      exibeElemntosDoHeader();
    }
  });

  // PARA SECÃO DE ATRACÕES, PROGRAMACÃO DAS ABAS
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (ev) {
      const abaAlvo = ev.target.dataset.tabButton;
      const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
      escondeTodosAbas();
      aba.classList.add("shows__list--is-active");
      removeBotaoAtivo();
      ev.target.classList.add("shows__tabs__button--is-active");
    });
  }
  // SECAO FAQ, ACCORDION
  for (let i = 0; i < question.length; i++) {
    question[i].addEventListener("click", abreOuFechaResposta);
  }
});

function abreOuFechaResposta(element) {
  const classe = "faq__questions__item--is-open";
  const elementoPai = element.target.parentNode;

  elementoPai.classList.toggle(classe);
}

function removeBotaoAtivo() {
  const buttons = document.querySelectorAll("[data-tab-button]");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("shows__tabs__button--is-active");
  }
}

function escondeTodosAbas() {
  const tabsContainer = document.querySelectorAll("[data-tab-id]");

  for (let i = 0; i < tabsContainer.length; i++) {
    tabsContainer[i].classList.remove("shows__list--is-active");
  }
}

function ocultaElementosDoHeader() {
  const header = document.querySelector(".header");
  header.classList.add("header--is-hidden");
}
function exibeElemntosDoHeader() {
  const header = document.querySelector(".header");
  header.classList.remove("header--is-hidden");
}
