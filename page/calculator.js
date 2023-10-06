const calculator = function () {
  // Seção da quantidade de Homens, Mulheres e Crianças
  const calculator = document.createElement("section");
  calculator.classList.add("calculator");
  calculator.style.backgroundColor = "var(--branco)";
  calculator.style.textAlign = "center";
  calculator.style.paddingTop = "100px";
  calculator.style.paddingBottom = "100px";
  calculator.addEventListener(events.INCREMENTAR_MAN, () => {
    document.querySelector(".input-man").value++;
  });
  calculator.addEventListener(events.DECREMENTAR_MAN, () => {
    if (document.querySelector(".input-man").value > 0) {
      document.querySelector(".input-man").value--;
    }
  });
  calculator.addEventListener(events.INCREMENTAR_WOMAN, () => {
    document.querySelector(".input-woman").value++;
  });
  calculator.addEventListener(events.DECREMENTAR_WOMAN, () => {
    if (document.querySelector(".input-woman").value > 0) {
      document.querySelector(".input-woman").value--;
    }
  });
  calculator.addEventListener(events.INCREMENTAR_CHILD, () => {
    document.querySelector(".input-child").value++;
  });
  calculator.addEventListener(events.DECREMENTAR_CHILD, () => {
    if (document.querySelector(".input-child").value > 0) {
      document.querySelector(".input-child").value--;
    }
  });
  calculator.addEventListener(events.CALCULO_ENVIADO, () => {
    let man = document.querySelector(".input-man").value;
    let woman = document.querySelector(".input-woman").value;
    let child = document.querySelector(".input-child").value;
    calculator.dispatchEvent(
      new CustomEvent(events.CALCULO_RECEBIDO, {
        detail: {
          man: man,
          woman: woman,
          child: child,
        },
        bubbles: true,
      })
    );
  });

  // Container da Seção da quantidade de Homens, Mulheres e Crianças
  const calculatorContainer = document.createElement("div");
  calculatorContainer.classList.add("container");

  // Título
  const calculatorTitle = document.createElement("h2");
  calculatorTitle.classList.add("h2", "preto");
  calculatorTitle.style.maxWidth = "595px";
  calculatorTitle.style.margin = "0 auto";
  calculatorTitle.innerHTML =
    "Quantos convidados você está esperando para o churrasco?";
  calculatorTitle.style.marginBottom = "24px";

  // Subtítulo
  const calculatorText = document.createElement("p");
  calculatorText.classList.add("bod1", "preto");
  calculatorText.style.maxWidth = "595px";
  calculatorText.style.margin = "0 auto";
  calculatorText.innerHTML = "Defina a quantidade de pessoas";

  // Lista de váriáveis de pessoas (Homens, Mulheres e Crianças)
  const calculatorPeople = document.createElement("ul");
  calculatorPeople.classList.add("people");
  calculatorPeople.style.display = "flex";
  calculatorPeople.style.justifyContent = "space-between";
  calculatorPeople.style.flexWrap = "wrap";
  calculatorPeople.style.gap = "30px";
  calculatorPeople.style.margin = "60px auto 60px auto";
  calculatorPeople.style.maxWidth = "1083px";

  // Homens
  const calculatorMan = document.createElement("li");
  calculatorMan.classList.add("calculator-li");
  const calculatorImgMan = document.createElement("div");
  calculatorImgMan.innerHTML = `<svg width='86' height='197' viewBox='0 0 86 197' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M24.3524 79.3881V181.808C24.3391 183.035 24.5572 184.252 24.9938 185.388C25.4304 186.524 26.0767 187.556 26.8947 188.423C27.7127 189.29 28.686 189.976 29.7573 190.439C30.8286 190.902 31.9764 191.133 33.1331 191.119C34.2899 191.133 35.4377 190.902 36.509 190.439C37.5803 189.976 38.5535 189.29 39.3716 188.423C40.1896 187.556 40.8359 186.524 41.2725 185.388C41.7091 184.252 41.9271 183.035 41.9139 181.808' stroke='var(--preto)' stroke-width='7' stroke-miterlimit='10' stroke-linecap='round'/>  <path d='M41.9151 129.046V181.808C41.8996 183.035 42.1541 184.252 42.6634 185.388C43.1728 186.524 43.9268 187.556 44.8811 188.423C45.8355 189.29 46.971 189.976 48.2208 190.439C49.4707 190.902 50.8097 191.133 52.1593 191.119C53.5089 191.133 54.8479 190.902 56.0978 190.439C57.3477 189.976 58.4831 189.29 59.4375 188.423C60.3918 187.556 61.1459 186.524 61.6552 185.388C62.1646 184.252 62.419 183.035 62.4035 181.808V79.3881' stroke='var(--preto)' stroke-width='7' stroke-miterlimit='10' stroke-linecap='round'/><path d='M25.0839 74.3893V108.349C25.0983 109.57 24.8714 110.781 24.4168 111.911C23.9622 113.041 23.289 114.068 22.4367 114.931C21.5845 115.794 20.5704 116.475 19.4542 116.936C18.3379 117.396 17.1421 117.626 15.9369 117.611C14.7317 117.626 13.5358 117.396 12.4196 116.936C11.3034 116.475 10.2893 115.794 9.43704 114.931C8.58479 114.068 7.91156 113.041 7.45695 111.911C7.00233 110.781 6.77551 109.57 6.78982 108.349V74.3893C6.78982 69.4766 8.71723 64.765 12.148 61.2911C15.5789 57.8173 20.232 55.8657 25.0839 55.8657H61.6722C66.5241 55.8657 71.1773 57.8173 74.6081 61.2911C78.0389 64.765 79.9663 69.4766 79.9663 74.3893V108.349C79.9806 109.57 79.7538 110.781 79.2992 111.911C78.8446 113.041 78.1713 114.068 77.3191 114.931C76.4668 115.794 75.4528 116.475 74.3365 116.936C73.2203 117.396 72.0244 117.626 70.8192 117.611C69.6141 117.626 68.4182 117.396 67.3019 116.936C66.1857 116.475 65.1716 115.794 64.3194 114.931C63.4671 114.068 62.7939 113.041 62.3393 111.911C61.8847 110.781 61.6579 109.57 61.6722 108.349V74.3893' stroke='var(--preto)' stroke-width='7' stroke-miterlimit='10' stroke-linecap='round'/><path d='M43.378 35.2836C52.2693 35.2836 59.4771 28.7015 59.4771 20.5821C59.4771 12.4627 52.2693 5.88062 43.378 5.88062C34.4867 5.88062 27.2789 12.4627 27.2789 20.5821C27.2789 28.7015 34.4867 35.2836 43.378 35.2836Z' stroke='var(--preto)' stroke-width='7' stroke-miterlimit='10' stroke-linecap='round'/></svg>`;
  const calculatoDivInfosMan = document.createElement("div");
  calculatoDivInfosMan.style.display = "flex";
  calculatoDivInfosMan.style.flexDirection = "column";
  calculatoDivInfosMan.style.alignItems = "center";
  calculatoDivInfosMan.style.gap = "15px";
  const calculatorInfosTitMan = document.createElement("p");
  calculatorInfosTitMan.classList.add("h1", "preto");
  calculatorInfosTitMan.style.textAlign = "center";
  calculatorInfosTitMan.innerHTML = "Homens";
  const calculatorInputMan = document.createElement("input");
  calculatorInputMan.classList.add("input-people", "input-man");
  calculatorInputMan.setAttribute("type", "number");
  calculatorInputMan.setAttribute("value", "0");
  calculatorInputMan.setAttribute("min", "0");
  const calculatorButtonManDivMoreLess = document.createElement("div");
  calculatorButtonManDivMoreLess.style.display = "flex";
  calculatorButtonManDivMoreLess.style.alignItems = "center";
  calculatorButtonManDivMoreLess.style.justifyContent = "center";
  calculatorButtonManDivMoreLess.style.gap = "15px";
  const calculatorButtonInputLessMan = document.createElement("button");
  calculatorButtonInputLessMan.classList.add("button-less");
  calculatorButtonInputLessMan.innerText = "-";
  calculatorButtonInputLessMan.addEventListener("click", () => {
    calculatorButtonInputLessMan.dispatchEvent(
      new CustomEvent(events.DECREMENTAR_MAN, { bubbles: true })
    );
  });
  const calculatorButtonInputMoreMan = document.createElement("button");
  calculatorButtonInputMoreMan.classList.add("button-more");
  calculatorButtonInputMoreMan.innerText = "+";
  calculatorButtonInputMoreMan.addEventListener("click", () => {
    calculatorButtonInputMoreMan.dispatchEvent(
      new CustomEvent(events.INCREMENTAR_MAN, { bubbles: true })
    );
  });

  // Mulheres
  const calculatorWoman = document.createElement("li");
  calculatorWoman.classList.add("calculator-li");
  const calculatorImgWoman = document.createElement("div");
  calculatorImgWoman.innerHTML = `<svg width="96" height="185" viewBox="0 0 96 185" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_10_305)"><path d="M30.331 134.599V173.313C30.3176 174.49 30.5394 175.658 30.9837 176.748C31.4279 177.838 32.0854 178.828 32.9177 179.66C33.75 180.493 34.7403 181.15 35.8303 181.595C36.9203 182.039 38.0881 182.261 39.2651 182.247C40.4421 182.261 41.6099 182.039 42.6999 181.595C43.7899 181.15 44.7801 180.493 45.6124 179.66C46.4448 178.828 47.1023 177.838 47.5465 176.748C47.9907 175.658 48.2126 174.49 48.1992 173.313" stroke="var(--preto)" stroke-width="7" stroke-miterlimit="10" stroke-linecap="round"/><path d="M48.1992 134.599V173.313C48.1857 174.49 48.4076 175.658 48.8518 176.748C49.296 177.838 49.9536 178.828 50.7859 179.66C51.6182 180.493 52.6084 181.15 53.6985 181.595C54.7885 182.039 55.9563 182.261 57.1332 182.247C58.3102 182.261 59.478 182.039 60.568 181.595C61.6581 181.15 62.6483 180.493 63.4806 179.66C64.3129 178.828 64.9705 177.838 65.4147 176.748C65.8589 175.658 66.0808 174.49 66.0673 173.313V134.599M21.0247 99.6071C20.7028 100.739 20.1578 101.796 19.4217 102.715C18.6856 103.633 17.7734 104.396 16.7385 104.957C15.7037 105.518 14.5671 105.867 13.3956 105.982C12.2241 106.098 11.0413 105.978 9.91669 105.63C8.78443 105.308 7.72795 104.763 6.80939 104.027C5.89083 103.291 5.12873 102.379 4.5679 101.344C4.00708 100.309 3.65885 99.1721 3.5437 98.0006C3.42854 96.8291 3.54879 95.6464 3.89736 94.5221L13.2037 63.1486C14.2299 59.6996 16.3429 56.6744 19.228 54.5238C22.1131 52.3733 25.6158 51.2124 29.2143 51.2142H67.1841C70.7828 51.2137 74.2854 52.376 77.1699 54.5279C80.0544 56.6799 82.1663 59.7062 83.191 63.156L92.4973 94.5295C92.8458 95.6539 92.9661 96.8365 92.8509 98.008C92.7358 99.1795 92.3876 100.316 91.8267 101.351C91.2659 102.386 90.5038 103.298 89.5852 104.035C88.6667 104.771 87.6102 105.316 86.4779 105.638C85.3543 105.982 84.1732 106.099 83.0038 105.981C81.8345 105.863 80.7004 105.513 79.668 104.952C78.6356 104.39 77.7257 103.628 76.9915 102.71C76.2573 101.793 75.7136 100.738 75.3922 99.6071" stroke="var(--preto)" stroke-width="7" stroke-miterlimit="10" stroke-linecap="round"/><path d="M48.1992 33.346C56.4228 33.346 63.0893 26.6795 63.0893 18.4559C63.0893 10.2323 56.4228 3.5658 48.1992 3.5658C39.9756 3.5658 33.3091 10.2323 33.3091 18.4559C33.3091 26.6795 39.9756 33.346 48.1992 33.346Z" stroke="var(--preto)" stroke-width="7" stroke-miterlimit="10" stroke-linecap="round"/><path d="M30.331 69.0823L12.4629 128.643H83.9354L66.0673 69.0823" stroke="var(--preto)" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_10_305"><rect width="94.4959" height="184.187" fill="white" transform="translate(0.951172 0.812988)"/></clipPath></defs></svg>`;
  const calculatoDivInfosWoman = document.createElement("div");
  calculatoDivInfosWoman.style.display = "flex";
  calculatoDivInfosWoman.style.flexDirection = "column";
  calculatoDivInfosWoman.style.alignItems = "center";
  calculatoDivInfosWoman.style.gap = "15px";
  const calculatorInfosTitWoman = document.createElement("p");
  calculatorInfosTitWoman.classList.add("h1", "preto");
  calculatorInfosTitWoman.style.textAlign = "center";
  calculatorInfosTitWoman.innerHTML = "Mulheres";
  const calculatorInputWoman = document.createElement("input");
  calculatorInputWoman.classList.add("input-people", "input-woman");
  calculatorInputWoman.setAttribute("type", "number");
  calculatorInputWoman.setAttribute("value", "0");
  const calculatorButtonWomanDivMoreLess = document.createElement("div");
  calculatorButtonWomanDivMoreLess.style.display = "flex";
  calculatorButtonWomanDivMoreLess.style.alignItems = "center";
  calculatorButtonWomanDivMoreLess.style.justifyContent = "center";
  calculatorButtonWomanDivMoreLess.style.gap = "15px";
  const calculatorButtonInputLessWoman = document.createElement("button");
  calculatorButtonInputLessWoman.classList.add("button-less");
  calculatorButtonInputLessWoman.innerText = "-";
  calculatorButtonInputLessWoman.addEventListener("click", () => {
    calculatorButtonInputLessWoman.dispatchEvent(
      new CustomEvent(events.DECREMENTAR_WOMAN, { bubbles: true })
    );
  });
  const calculatorButtonInputMoreWoman = document.createElement("button");
  calculatorButtonInputMoreWoman.classList.add("button-more");
  calculatorButtonInputMoreWoman.innerText = "+";
  calculatorButtonInputMoreWoman.addEventListener("click", () => {
    calculatorButtonInputMoreWoman.dispatchEvent(
      new CustomEvent(events.INCREMENTAR_WOMAN, { bubbles: true })
    );
  });

  // Crianças
  const calculatorChild = document.createElement("li");
  calculatorChild.classList.add("calculator-li");
  const calculatorImgChild = document.createElement("div");
  calculatorImgChild.innerHTML = `<svg width="68" height="127" viewBox="0 0 68 127" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M34.0772 22.7143C36.1789 22.7143 38.1946 21.8794 39.6808 20.3932C41.167 18.907 42.0019 16.8913 42.0019 14.7896C42.0019 12.6878 41.167 10.6721 39.6808 9.18595C38.1946 7.69978 36.1789 6.86485 34.0772 6.86485C31.9754 6.86485 29.9597 7.69978 28.4735 9.18595C26.9874 10.6721 26.1525 12.6878 26.1525 14.7896C26.1525 16.8913 26.9874 18.907 28.4735 20.3932C29.9597 21.8794 31.9754 22.7143 34.0772 22.7143ZM34.0772 29.054C37.8603 29.054 41.4886 27.5512 44.1637 24.8761C46.8388 22.201 48.3416 18.5727 48.3416 14.7896C48.3416 11.0064 46.8388 7.37816 44.1637 4.70305C41.4886 2.02795 37.8603 0.525085 34.0772 0.525085C30.294 0.525085 26.6658 2.02795 23.9907 4.70305C21.3155 7.37816 19.8127 11.0064 19.8127 14.7896C19.8127 18.5727 21.3155 22.201 23.9907 24.8761C26.6658 27.5512 30.294 29.054 34.0772 29.054ZM24.4407 41.7336C20.098 41.7336 17.1563 43.8416 15.2259 46.5867C13.438 49.1258 12.3825 52.3844 11.5234 55.1993C10.8895 57.2914 10.7722 57.7288 10.4742 58.8731L10.4647 58.908C10.0494 60.5025 9.30768 63.3332 6.67668 72.6273C6.25191 74.1393 7.0951 75.9493 9.00654 76.4724C10.9719 77.0144 12.7946 75.832 13.2479 74.2376C16.1324 64.0306 16.7537 61.6088 17.0644 60.3979V60.3884C17.3116 59.4215 17.4004 59.0887 18.0597 56.9205C18.9473 54.0042 19.7715 51.668 20.9031 50.0609L20.9095 50.0482L20.938 50.0133L26.2888 52.7806L13.736 98.1575C17.4765 99.1529 23.42 100.376 34.0803 100.376C44.4078 100.376 50.8807 99.2258 54.4532 98.2685L41.8687 52.7806L47.2163 50.0038L47.2544 50.0609C48.386 51.668 49.2102 54.0042 50.0978 56.9237C50.7571 59.0919 50.8459 59.4215 51.0931 60.3884V60.3979C51.4038 61.6088 52.0251 64.0337 54.9096 74.2376C55.3629 75.832 57.1825 77.0144 59.151 76.4724C61.0624 75.9493 61.9088 74.1393 61.4808 72.6273C60.1868 68.1255 58.9399 63.6102 57.7404 59.0824L57.6833 58.8731C57.3853 57.7288 57.2712 57.2882 56.6341 55.1961C55.7782 52.3844 54.7195 49.1258 52.9316 46.5867C50.998 43.8416 48.0595 41.7336 43.72 41.7336H24.4407ZM63.5508 57.247C63.9533 58.7876 64.6824 61.5834 67.3007 70.83C67.645 72.0369 67.747 73.3001 67.6009 74.5467C67.4547 75.7933 67.0634 76.9986 66.4493 78.0933C65.8352 79.1879 65.0106 80.1502 64.023 80.9248C63.0353 81.6993 61.9042 82.2707 60.6947 82.6061C59.324 82.9825 57.8858 83.0432 56.4883 82.7836L60.3333 96.6835C61.1924 99.79 59.655 103.385 56.3076 104.313C52.2121 105.455 45.1337 106.716 34.0803 106.716C22.8716 106.716 16.4177 105.417 12.1923 104.288C8.8322 103.391 6.97465 99.7615 7.9066 96.3951L11.6724 82.7836C10.303 83.0372 8.86707 82.9896 7.46281 82.6061C6.25333 82.2707 5.12218 81.6993 4.13453 80.9248C3.14688 80.1502 2.32227 79.1879 1.7082 78.0933C1.09414 76.9986 0.702765 75.7933 0.556637 74.5467C0.410508 73.3001 0.512514 72.0369 0.856773 70.83C3.4751 61.5834 4.20417 58.7907 4.60675 57.247V57.2375C4.93641 55.9822 5.07272 55.4719 5.74156 53.2751C6.57524 50.5395 7.88124 46.3236 10.3347 42.8335C13.2193 38.7285 17.8695 35.3938 24.4407 35.3938H43.7168C50.2848 35.3938 54.9318 38.7285 57.8228 42.8335C60.2763 46.3204 61.5791 50.5364 62.4128 53.2751C63.0499 55.3673 63.2052 55.9283 63.5 57.0631L63.5508 57.247ZM18.2277 111.515V122.207C18.2279 123.359 18.6459 124.471 19.4043 125.338C20.1626 126.205 21.2096 126.766 22.3509 126.919C23.4922 127.072 24.6503 126.806 25.61 126.17C26.5698 125.533 27.266 124.57 27.5694 123.46L30.4889 112.761C26.3836 112.55 22.2915 112.134 18.2277 111.515ZM40.829 112.739L43.7548 123.46C44.0581 124.57 44.7541 125.533 45.7135 126.169C46.6729 126.806 47.8306 127.072 48.9717 126.92C50.1128 126.767 51.1598 126.206 51.9184 125.34C52.677 124.474 53.0955 123.362 53.0965 122.211V111.471C49.0297 112.088 44.9359 112.511 40.829 112.739Z" fill="var(--preto)"/></svg>`;
  const calculatoDivInfosChild = document.createElement("div");
  calculatoDivInfosChild.style.display = "flex";
  calculatoDivInfosChild.style.flexDirection = "column";
  calculatoDivInfosChild.style.alignItems = "center";
  calculatoDivInfosChild.style.gap = "15px";
  const calculatorInfosTitChild = document.createElement("p");
  calculatorInfosTitChild.classList.add("h1", "preto");
  calculatorInfosTitChild.style.textAlign = "center";
  calculatorInfosTitChild.innerHTML = "Crianças";
  const calculatorInputChild = document.createElement("input");
  calculatorInputChild.classList.add("input-people", "input-child");
  calculatorInputChild.setAttribute("type", "number");
  calculatorInputChild.setAttribute("value", "0");
  const calculatorButtonChildDivMoreLess = document.createElement("div");
  calculatorButtonChildDivMoreLess.style.display = "flex";
  calculatorButtonChildDivMoreLess.style.alignItems = "center";
  calculatorButtonChildDivMoreLess.style.justifyContent = "center";
  calculatorButtonChildDivMoreLess.style.gap = "15px";
  const calculatorButtonInputLessChild = document.createElement("button");
  calculatorButtonInputLessChild.classList.add("button-less");
  calculatorButtonInputLessChild.innerText = "-";
  calculatorButtonInputLessChild.addEventListener("click", () => {
    calculatorButtonInputLessChild.dispatchEvent(
      new CustomEvent(events.DECREMENTAR_CHILD, { bubbles: true })
    );
  });
  const calculatorButtonInputMoreChild = document.createElement("button");
  calculatorButtonInputMoreChild.classList.add("button-more");
  calculatorButtonInputMoreChild.innerText = "+";
  calculatorButtonInputMoreChild.addEventListener("click", () => {
    calculatorButtonInputMoreChild.dispatchEvent(
      new CustomEvent(events.INCREMENTAR_CHILD, { bubbles: true })
    );
  });

  // Botão de Calcular
  const calculatorButton = document.createElement("button");
  calculatorButton.classList.add("btn", "btn-calc");
  calculatorButton.innerHTML = "Calcular";
  calculatorButton.addEventListener("click", () => {
    calculatorButton.dispatchEvent(
      new CustomEvent(events.CALCULO_ENVIADO, { bubbles: true })
    );
  });

  // Montando a estrutura da Seção
  calculator.appendChild(calculatorContainer);
  calculatorContainer.appendChild(calculatorTitle);
  calculatorContainer.appendChild(calculatorText);
  calculatorContainer.appendChild(calculatorPeople);
  // Homens
  calculatorPeople.appendChild(calculatorMan);
  calculatorMan.appendChild(calculatorImgMan);
  calculatorMan.appendChild(calculatoDivInfosMan);
  calculatoDivInfosMan.appendChild(calculatorInputMan);
  calculatoDivInfosMan.appendChild(calculatorInfosTitMan);
  calculatoDivInfosMan.appendChild(calculatorButtonManDivMoreLess);
  calculatorButtonManDivMoreLess.appendChild(calculatorButtonInputLessMan);
  calculatorButtonManDivMoreLess.appendChild(calculatorButtonInputMoreMan);
  // Mulheres
  calculatorPeople.appendChild(calculatorWoman);
  calculatorWoman.appendChild(calculatorImgWoman);
  calculatorWoman.appendChild(calculatoDivInfosWoman);
  calculatoDivInfosWoman.appendChild(calculatorInputWoman);
  calculatoDivInfosWoman.appendChild(calculatorInfosTitWoman);
  calculatoDivInfosWoman.appendChild(calculatorButtonWomanDivMoreLess);
  calculatorButtonWomanDivMoreLess.appendChild(calculatorButtonInputLessWoman);
  calculatorButtonWomanDivMoreLess.appendChild(calculatorButtonInputMoreWoman);
  // Crianças
  calculatorPeople.appendChild(calculatorChild);
  calculatorChild.appendChild(calculatorImgChild);
  calculatorChild.appendChild(calculatoDivInfosChild);
  calculatoDivInfosChild.appendChild(calculatorInputChild);
  calculatoDivInfosChild.appendChild(calculatorInfosTitChild);
  calculatoDivInfosChild.appendChild(calculatorButtonChildDivMoreLess);
  calculatorButtonChildDivMoreLess.appendChild(calculatorButtonInputLessChild);
  calculatorButtonChildDivMoreLess.appendChild(calculatorButtonInputMoreChild);
  //Botão
  calculatorContainer.appendChild(calculatorButton);

  return calculator;
};
