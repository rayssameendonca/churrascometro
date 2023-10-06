function localstorageApi() {
  const formLog = document.querySelector(".form-login");
  const calculatorSection = document.querySelector(".calculator");
  const resultSection = document.querySelector(".result");
  const loginName = document.querySelector(".name");
  const loginEmail = document.querySelector(".email");
  const loginCEP = document.querySelector(".cep");
  const inputCheck = document.querySelector(".input-checkbox");
  const loginButton = document.querySelector("form .btn");
  calculatorSection.style.display = "none";
  resultSection.style.display = "none";
  loginButton.dispatchEvent(
    new CustomEvent(events.REGISTER, { bubbles: true })
  );
  function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  async function validarCEP(cep) {
    const regexCEP = /^\d{5}-?\d{3}$/;
    if (!regexCEP.test(cep)) {
      return false;
    }
    const endpoint = `https://viacep.com.br/ws/${cep.replace("-", "")}/json/`;
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      if (!data.erro) {
        const cepInfo = {
          cep: data.cep,
          logradouro: data.logradouro,
          bairro: data.bairro,
          localidade: data.localidade,
          uf: data.uf,
        };
        const cepInfoJSON = JSON.stringify(cepInfo);
        localStorage.setItem("cepInfo", cepInfoJSON);
        return true;
      } else {
        console.error("CEP inválido.");
        return false;
      }
    } catch (error) {
      console.error("Erro ao verificar o CEP:", error);
      return false;
    }
  }
  formLog.addEventListener(events.REGISTER, async function (event) {
    event.preventDefault();
    const email = loginEmail.value;
    const cep = loginCEP.value;
    const emailValido = validarEmail(email);
    const cepValido = await validarCEP(cep);
    if (inputCheck.checked && emailValido && cepValido) {
      const customer = {
        name: loginName.value,
        email: email,
        cep: cep,
      };
      localStorage.setItem("dados", JSON.stringify(customer));
      // Informações no console dos dados dos inputs
      console.log(
        `Informações do cliente com o e-mail ${customer.email} foram armazenadas no localStorage.`
      );
      // Informações no console dos dados do endereço da pessoa que foram pegos pela API e salvos no localstorage
      const cepInfoJSON = localStorage.getItem("cepInfo");
      if (cepInfoJSON) {
        const cepInfo = JSON.parse(cepInfoJSON);
        console.log("CEP: " + cepInfo.cep);
        console.log("Logradouro: " + cepInfo.logradouro);
        console.log("Bairro: " + cepInfo.bairro);
        console.log("Cidade: " + cepInfo.localidade);
        console.log("UF: " + cepInfo.uf);
      } else {
        console.log("Nenhum dado do CEP encontrado no localStorage.");
      }
      formLog.style.display = "none";
      calculatorSection.style.display = "block";
      resultSection.style.display = "block";
    } else if (!inputCheck.checked) {
      alert("Por favor, aceite os termos para avançar.");
    } else if (!emailValido) {
      alert("Por favor, insira um e-mail válido.");
    } else {
      alert("Por favor, insira um CEP válido.");
    }
  });
  window.addEventListener("load", function () {
    const userData = localStorage.getItem("dados");
    const cepInfoJSON = localStorage.getItem("cepInfo");
    if (userData) {
      const userDataObj = JSON.parse(userData);
      const cepInfoObj = JSON.parse(cepInfoJSON);
      console.log(userDataObj);
      console.log(cepInfoObj);
      calculatorSection.style.display = "block";
      resultSection.style.display = "block";
    } else {
      console.log("Nenhum dado do usuário encontrado.");
      setTimeout(function () {
        formLog.style.display = "flex";
      }, 50);
    }
  });
}
