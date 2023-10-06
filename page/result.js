const result = function () {
  // Seção de Resultados
  const result = document.createElement("section");
  result.classList.add("result");
  result.style.backgroundColor = "var(--branco)";
  result.style.paddingBottom = "100px";

  // Cotnainer da Seção de Resultados
  const resultContainer = document.createElement("div");
  resultContainer.classList.add("container");
  resultContainer.style.backgroundColor = "var(--preto)";
  resultContainer.style.borderRadius = "37px";
  resultContainer.style.padding = "60px 0";

  // Container do Ícone e Título
  const resultDivTit = document.createElement("div");
  resultDivTit.style.textAlign = "center";
  resultDivTit.style.maxWidth = "90%";
  resultDivTit.style.margin = "0 auto";

  // Ícone
  const resultImgTit = document.createElement("div");
  resultImgTit.innerHTML =
    '<svg width="54" height="54" viewBox="0 0 54 54" fill="var(--branco)" xmlns="http://www.w3.org/2000/svg"><path d="M35.3475 9C37.215 9 38.9925 9.495 40.5 10.485C43.065 12.15 44.64 14.6925 45 17.64C45.1287 19.0677 44.9436 20.5063 44.4578 21.855C43.9719 23.2037 43.1971 24.4298 42.1875 25.4475C40.6125 27 38.61 27.99 36.405 28.215C32.1075 28.665 28.3275 30.375 25.515 33.2325C25.175 33.5643 24.7188 33.75 24.2437 33.75C23.7687 33.75 23.3125 33.5643 22.9725 33.2325L20.745 31.005C20.5875 30.849 20.4627 30.6632 20.3777 30.4585C20.2927 30.2537 20.2493 30.0342 20.25 29.8125C20.25 29.25 20.4975 28.755 20.97 28.2825C23.6925 25.5375 25.3575 21.8925 25.7625 17.7075C26.055 14.715 27.6525 12.15 30.2625 10.4625C31.7475 9.495 33.5025 9 35.3475 9ZM35.3475 4.5C32.715 4.5 30.0825 5.22 27.81 6.6825C23.85 9.225 21.6675 13.185 21.285 17.28C20.9925 20.25 19.8675 23.0175 17.7975 25.0875L17.73 25.155C15.12 27.765 15.12 31.7475 17.5725 34.1775L19.8 36.405C21.0375 37.6425 22.635 38.25 24.2325 38.25C25.83 38.25 27.45 37.6425 28.6875 36.405C30.87 34.2225 33.75 33.03 36.8775 32.6925C39.96 32.355 42.975 31.005 45.36 28.6425C46.8563 27.1482 47.9976 25.3367 48.6993 23.3419C49.4011 21.3471 49.6455 19.22 49.4143 17.118C49.1832 15.016 48.4824 12.9929 47.3639 11.1983C46.2454 9.40362 44.7378 7.88338 42.9525 6.75C40.68 5.2425 38.025 4.5 35.3475 4.5ZM14.085 44.685C14.6925 45.945 14.49 47.475 13.4325 48.51C12.9745 48.9749 12.3907 49.296 11.7529 49.434C11.115 49.5719 10.4507 49.5207 9.84156 49.2866C9.23239 49.0525 8.70478 48.6457 8.32348 48.116C7.94217 47.5864 7.72374 46.957 7.69498 46.305C7.04299 46.2762 6.41358 46.0578 5.88395 45.6765C5.35432 45.2952 4.94749 44.7676 4.71338 44.1584C4.47926 43.5492 4.42804 42.885 4.56599 42.2471C4.70394 41.6092 5.02506 41.0255 5.48998 40.5675C6.52498 39.5325 8.07747 39.3075 9.31497 39.915L14.895 34.4475C15.21 34.875 15.57 35.37 15.975 35.775L18.2025 38.0025C18.675 38.4525 19.125 38.835 19.71 39.1725L14.085 44.685Z" fill="var(--branco)"/></svg>';
  resultImgTit.style.margin = "0 auto 25px auto";

  //Título
  const resultTit = document.createElement("h2");
  resultTit.classList.add("h2", "branco");
  resultTit.innerHTML = "Resultado do Cálculo";

  // Lista de Itens
  const resultList = document.createElement("ul");
  resultList.style.maxWidth = "90%";
  resultList.style.margin = "0 auto";
  const itemsList = [
    {
      name: "Carne",
      man: 0.4,
      woman: 0.32,
      child: 0.2,
      value: "",
      und: " kg",
    },
    {
      name: "Pão de Alho",
      man: 2,
      woman: 2,
      child: 1,
      value: "",
      und: " und",
    },
    {
      name: "Carvão",
      man: 1,
      woman: 1,
      child: 1,
      value: "",
      und: " kg",
    },
    {
      name: "Sal",
      man: 4,
      woman: 4,
      child: 4,
      value: "",
      und: " g",
    },
    {
      name: "Gelo",
      man: 0.5,
      woman: 0.5,
      child: 0.5,
      value: "",
      und: " kg",
    },
    {
      name: "Refrigerante",
      man: 0.4,
      woman: 0.4,
      child: 0.4,
      value: "",
      und: " litros",
    },
    {
      name: "Água",
      man: 0.2,
      woman: 0.2,
      child: 0.2,
      value: "",
      und: " litros",
    },
    {
      name: "Cerveja",
      man: 1.8,
      woman: 1.8,
      child: 0,
      value: "",
      und: " litros",
    },
  ];
  let calculatorInputManValue = "";
  let calculatorInputWomanValue = "";
  let calculatorInputChildValue = "";
  function createListItem(item) {
    const listItem = document.createElement("li");
    listItem.classList.add("result-list-item");

    const itemName = document.createElement("h3");
    itemName.classList.add("h2", "branco");
    itemName.innerHTML = item.name;

    const itemValue = document.createElement("p");
    itemValue.classList.add("h1", "branco");
    const number = (
      item.man * calculatorInputManValue +
      item.woman * calculatorInputWomanValue +
      item.child * calculatorInputChildValue
    ).toFixed(2);
    itemValue.innerHTML = number + item.und;

    listItem.appendChild(itemName);
    listItem.appendChild(itemValue);

    return listItem;
  }
  function applyListStyles() {
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
  }
  function updateList() {
    resultList.innerHTML = ""; // Limpe a lista antes de adicionar os novos itens

    itemsList.forEach((item) => {
      const listItem = createListItem(item);
      resultList.appendChild(listItem);
    });

    applyListStyles();
  }
  itemsList.forEach((item) => {
    const listItem = createListItem(item);
    resultList.appendChild(listItem);
  });
  body.addEventListener(events.CALCULO_RECEBIDO, (e) => {
    calculatorInputManValue = e.detail.man;
    calculatorInputWomanValue = e.detail.woman;
    calculatorInputChildValue = e.detail.child;
    updateList(); // Atualizando a lista com base no novo valor recebido
  });

  // Texto Complementar Final
  const resultAdditionalText = document.createElement("p");
  resultAdditionalText.classList.add("bod1", "branco");
  resultAdditionalText.innerHTML =
    "Faça suas compras e tenha um bom churrasco!";
  resultAdditionalText.style.textAlign = "center";
  resultAdditionalText.style.maxWidth = "90%";
  resultAdditionalText.style.margin = "50px auto 0 auto";

  // Montando a estrutura da Seção
  result.appendChild(resultContainer);
  resultContainer.appendChild(resultDivTit);
  resultDivTit.appendChild(resultImgTit);
  resultDivTit.appendChild(resultTit);
  resultContainer.appendChild(resultList);
  resultContainer.appendChild(resultAdditionalText);

  return result;
};
