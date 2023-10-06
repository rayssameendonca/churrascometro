// COMPONENTES DE ESTILOS

// Mudando o tema

const darkModeButton = document.querySelector(".dark-mode-button");
darkModeButton.addEventListener("click", function () {
  document.documentElement.classList.toggle("dark-mode");
});

// Inputs Formulário

const inputs = document.querySelectorAll(".inputs");
inputs.forEach((element) => {
  element.classList.add("bod2", "preto");
  element.style.textAlign = "center";
  element.style.padding = "20px";
  element.style.borderRadius = "16px";
  element.style.border = "2px solid var(--preto)";
  element.style.backgroundColor = "var(--branco)";
  element.setAttribute("required", true);
});

// Botões

const btn = document.querySelectorAll(".btn");
btn.forEach((element) => {
  element.classList.add("tex-but", "branco");
  element.style.backgroundColor = "var(--preto)";
  element.style.padding = "20px";
  element.style.border = "2px solid var(--preto)";
  element.style.borderRadius = "16px";
  element.style.width = "100%";
  element.style.maxWidth = "385px";
  element.style.margin = "0 auto";
  element.style.cursor = "pointer";
  element.style.transition = "all .3s ease-in-out";
  element.addEventListener("mouseover", function () {
    element.style.backgroundColor = "var(--branco)";
    element.style.color = "var(--preto)";
    element.style.borderColor = "var(--preto)";
  });
  element.addEventListener("mouseout", function () {
    element.style.backgroundColor = "var(--preto)";
    element.style.color = "var(--branco)";
    element.style.borderColor = "var(--preto)";
  });
});
const btn2 = document.querySelectorAll(".btn-2");
btn2.forEach((element) => {
  element.classList.remove("branco");
  element.classList.add("preto");
  element.style.backgroundColor = "var(--branco)";
  element.style.border = "2px solid var(--branco)";
  element.style.margin = "0";
  element.addEventListener("mouseover", function () {
    element.style.backgroundColor = "var(--preto)";
    element.style.color = "var(--branco)";
    element.style.borderColor = "var(--branco)";
  });
  element.addEventListener("mouseout", function () {
    element.style.backgroundColor = "var(--branco)";
    element.style.color = "var(--preto)";
    element.style.borderColor = "var(--branco)";
  });
});

// Calculador de Homens, Mulheres e Crianças

const calculatorLi = document.querySelectorAll(".calculator-li");
calculatorLi.forEach((element) => {
  element.style.display = "flex";
  element.style.alignItems = "center";
  element.style.justifyContent = "center";
  element.style.flex = "1 1 300px";
  element.style.gap = "40px";
});

// Input do Calculador de Homens, Mulheres e Crianças

const inputPeople = document.querySelectorAll(".input-people");
inputPeople.forEach((element) => {
  element.classList.add("h2", "preto");
  element.style.border = "none";
  element.style.textAlign = "center";
  element.style.maxWidth = "50px";
  element.style.background = "none";
  element.disabled = true;
});

// Botão "-" do Calculador de Homens, Mulheres e Crianças

const buttonLess = document.querySelectorAll(".button-less");
buttonLess.forEach((element) => {
  element.style.border = "none";
  element.style.background = "none";
  element.style.cursor = "pointer";
  element.innerHTML = `<svg width='33' height='33' viewBox='0 0 33 33' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M9.83061 15.4214C9.47663 15.4214 9.13715 15.562 8.88684 15.8123C8.63654 16.0626 8.49592 16.4021 8.49592 16.7561C8.49592 17.1101 8.63654 17.4496 8.88684 17.6999C9.13715 17.9502 9.47663 18.0908 9.83061 18.0908H23.1775C23.5315 18.0908 23.871 17.9502 24.1213 17.6999C24.3716 17.4496 24.5122 17.1101 24.5122 16.7561C24.5122 16.4021 24.3716 16.0626 24.1213 15.8123C23.871 15.562 23.5315 15.4214 23.1775 15.4214H9.83061ZM16.5041 0.739838C14.4008 0.739838 12.3181 1.15411 10.3749 1.959C8.43171 2.76389 6.66609 3.94364 5.17885 5.43089C3.6916 6.91814 2.51185 8.68376 1.70696 10.6269C0.902066 12.5701 0.487793 14.6528 0.487793 16.7561C0.487793 18.8594 0.902066 20.9421 1.70696 22.8853C2.51185 24.8284 3.6916 26.5941 5.17885 28.0813C6.66609 29.5685 8.43171 30.7483 10.3749 31.5532C12.3181 32.3581 14.4008 32.7724 16.5041 32.7724C20.7518 32.7724 24.8256 31.0849 27.8293 28.0813C30.8329 25.0777 32.5203 21.0039 32.5203 16.7561C32.5203 12.5083 30.8329 8.43452 27.8293 5.43089C24.8256 2.42726 20.7518 0.739838 16.5041 0.739838ZM3.15717 16.7561C3.15717 13.2163 4.56335 9.82145 7.06638 7.31843C9.56941 4.8154 12.9642 3.40921 16.5041 3.40921C20.0439 3.40921 23.4387 4.8154 25.9417 7.31843C28.4448 9.82145 29.8509 13.2163 29.8509 16.7561C29.8509 20.2959 28.4448 23.6907 25.9417 26.1938C23.4387 28.6968 20.0439 30.103 16.5041 30.103C12.9642 30.103 9.56941 28.6968 7.06638 26.1938C4.56335 23.6907 3.15717 20.2959 3.15717 16.7561Z' fill='var(--preto)'/></svg>`;
});

// Botão "+" do Calculador de Homens, Mulheres e Crianças

const buttonMore = document.querySelectorAll(".button-more");
buttonMore.forEach((element) => {
  element.style.border = "none";
  element.style.background = "none";
  element.style.cursor = "pointer";

  element.innerHTML =
    "<svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M15.943 0.140259C7.33266 0.140259 0.327148 7.14577 0.327148 15.7561C0.327148 24.3665 7.33266 31.372 15.943 31.372C24.5533 31.372 31.5589 24.3665 31.5589 15.7561C31.5589 7.14577 24.5533 0.140259 15.943 0.140259ZM15.943 2.5427C23.2548 2.5427 29.1564 8.44429 29.1564 15.7561C29.1564 23.0679 23.2548 28.9695 15.943 28.9695C8.63118 28.9695 2.72959 23.0679 2.72959 15.7561C2.72959 8.44429 8.63118 2.5427 15.943 2.5427ZM14.7418 8.5488V14.5549H8.73569V16.9573H14.7418V22.9634H17.1442V16.9573H23.1503V14.5549H17.1442V8.5488H14.7418Z' fill='var(--preto)'/></svg>";
});

// Itens da lista de quantidades

const resultListItem = document.querySelectorAll(".result-list-item");
resultListItem.forEach((element) => {
  element.classList.add("flex-column");
  element.style.display = "flex";
  element.style.justifyContent = "space-between";
  element.style.alignItems = "center";
  element.style.gap = "30px";
  element.style.marginTop = "30px";
  element.style.paddingBottom = "30px";
  element.style.borderBottom = "1px solid var(--branco)";
});
