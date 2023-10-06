const header = function () {
  // Seção Header
  const header = document.createElement("header");
  header.style.backgroundColor = "var(--preto)";
  header.style.padding = "30px 0";

  // Header Container
  const headerContainer = document.createElement("div");
  headerContainer.classList.add("container");
  headerContainer.style.display = "flex";
  headerContainer.style.flexWrap = "wrap";
  headerContainer.style.justifyContent = "space-between";
  headerContainer.style.alignItems = "center";
  headerContainer.style.gap = "30px";
  function updateFlexDirection() {
    if (window.innerWidth <= 1030) {
      headerContainer.style.justifyContent = "center";
    } else {
      headerContainer.style.justifyContent = "space-between";
    }
  }
  window.addEventListener("resize", updateFlexDirection);
  updateFlexDirection();

  // Container do Ícone e Título
  const headerTitle = document.createElement("div");
  headerTitle.classList.add("title");
  headerTitle.style.display = "flex";
  headerTitle.style.flexWrap = "wrap";
  headerTitle.style.gap = "15px";
  headerTitle.style.alignItems = "center";
  headerTitle.style.justifyContent = "center";
  headerTitle.style.flex = "1 1 500px";
  headerTitle.style.maxWidth = "max-content";

  // Ícone do Título
  const headerIconTitle = document.createElement("div");
  headerIconTitle.innerHTML =
    '<svg width="54" height="54" viewBox="0 0 54 54" fill="var(--branco)" xmlns="http://www.w3.org/2000/svg"><path d="M35.3475 9C37.215 9 38.9925 9.495 40.5 10.485C43.065 12.15 44.64 14.6925 45 17.64C45.1287 19.0677 44.9436 20.5063 44.4578 21.855C43.9719 23.2037 43.1971 24.4298 42.1875 25.4475C40.6125 27 38.61 27.99 36.405 28.215C32.1075 28.665 28.3275 30.375 25.515 33.2325C25.175 33.5643 24.7188 33.75 24.2437 33.75C23.7687 33.75 23.3125 33.5643 22.9725 33.2325L20.745 31.005C20.5875 30.849 20.4627 30.6632 20.3777 30.4585C20.2927 30.2537 20.2493 30.0342 20.25 29.8125C20.25 29.25 20.4975 28.755 20.97 28.2825C23.6925 25.5375 25.3575 21.8925 25.7625 17.7075C26.055 14.715 27.6525 12.15 30.2625 10.4625C31.7475 9.495 33.5025 9 35.3475 9ZM35.3475 4.5C32.715 4.5 30.0825 5.22 27.81 6.6825C23.85 9.225 21.6675 13.185 21.285 17.28C20.9925 20.25 19.8675 23.0175 17.7975 25.0875L17.73 25.155C15.12 27.765 15.12 31.7475 17.5725 34.1775L19.8 36.405C21.0375 37.6425 22.635 38.25 24.2325 38.25C25.83 38.25 27.45 37.6425 28.6875 36.405C30.87 34.2225 33.75 33.03 36.8775 32.6925C39.96 32.355 42.975 31.005 45.36 28.6425C46.8563 27.1482 47.9976 25.3367 48.6993 23.3419C49.4011 21.3471 49.6455 19.22 49.4143 17.118C49.1832 15.016 48.4824 12.9929 47.3639 11.1983C46.2454 9.40362 44.7378 7.88338 42.9525 6.75C40.68 5.2425 38.025 4.5 35.3475 4.5ZM14.085 44.685C14.6925 45.945 14.49 47.475 13.4325 48.51C12.9745 48.9749 12.3907 49.296 11.7529 49.434C11.115 49.5719 10.4507 49.5207 9.84156 49.2866C9.23239 49.0525 8.70478 48.6457 8.32348 48.116C7.94217 47.5864 7.72374 46.957 7.69498 46.305C7.04299 46.2762 6.41358 46.0578 5.88395 45.6765C5.35432 45.2952 4.94749 44.7676 4.71338 44.1584C4.47926 43.5492 4.42804 42.885 4.56599 42.2471C4.70394 41.6092 5.02506 41.0255 5.48998 40.5675C6.52498 39.5325 8.07747 39.3075 9.31497 39.915L14.895 34.4475C15.21 34.875 15.57 35.37 15.975 35.775L18.2025 38.0025C18.675 38.4525 19.125 38.835 19.71 39.1725L14.085 44.685Z" fill="var(--branco)"/></svg>';

  // Título
  const headerH1 = document.createElement("h1");
  headerH1.classList.add("h1", "branco");
  headerH1.innerHTML = "Churrascometro - Calcule seu churrasco";
  headerH1.style.textAlign = "center";

  // Botão do Tema
  const headerbuttonTheme = document.createElement("button");
  headerbuttonTheme.classList.add("btn", "btn-2", "dark-mode-button");
  headerbuttonTheme.innerHTML = "Mudar Tema";
  headerbuttonTheme.style.flex = "1 1 400px";
  headerbuttonTheme.style.display = "flex";
  headerbuttonTheme.style.justifyContent = "center";

  // Montando a estrutura da Seção
  header.appendChild(headerContainer);
  headerContainer.appendChild(headerTitle);
  headerTitle.appendChild(headerIconTitle);
  headerTitle.appendChild(headerH1);
  headerContainer.appendChild(headerbuttonTheme);

  return header;
};
