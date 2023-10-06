const formLogin = function () {
  // Seção do Formulário de Login
  const formLogin = document.createElement("section");
  formLogin.classList.add("form-login");
  formLogin.style.backgroundColor = "var(--branco)";
  formLogin.style.display = "none";

  // Container do Formulário de Login
  const formLoginContainer = document.createElement("div");
  formLoginContainer.classList.add("container");
  formLoginContainer.style.textAlign = "center";
  formLoginContainer.style.maxWidth = "595px";
  formLoginContainer.style.margin = "0 auto";
  formLoginContainer.style.paddingTop = "100px";
  formLoginContainer.style.paddingBottom = "100px";
  formLoginContainer.style.display = "flex";
  formLoginContainer.style.flexDirection = "column";
  formLoginContainer.style.gap = "25px";

  // Título
  const loginTitle = document.createElement("h2");
  loginTitle.classList.add("h2", "preto");
  loginTitle.innerHTML =
    "Vamos calcular o seu churrasco e surpreender seus convidados!";

  // Subtítulo
  const loginText = document.createElement("p");
  loginText.classList.add("bod1", "preto");
  loginText.innerHTML = "Preencha os campos abaixo para iniciar.";
  loginText.style.marginBottom = "10px";

  // Form do Formulário
  const loginForm = document.createElement("form");
  loginForm.style.display = "flex";
  loginForm.style.flexDirection = "column";
  loginForm.style.gap = "25px";

  // Input Name
  const loginName = document.createElement("input");
  loginName.classList.add("inputs", "name");
  loginName.placeholder = "Nome e Sobrenome";

  // Input Email
  const loginEmail = document.createElement("input");
  loginEmail.classList.add("inputs", "email");
  loginEmail.placeholder = "E-mail";

  // Input Email
  const loginCEP = document.createElement("input");
  loginCEP.classList.add("inputs", "cep");
  loginCEP.placeholder = "CEP";

  // Container do Input de Check
  const loginCheck = document.createElement("div");
  loginCheck.style.display = "flex";
  loginCheck.style.gap = "15px";
  loginCheck.style.alignItems = "center";
  loginCheck.style.justifyContent = "center";
  // Input Check
  const inputCheck = document.createElement("input");
  inputCheck.classList.add("input-checkbox");
  inputCheck.type = "checkbox";
  inputCheck.id = "accepted-check";
  inputCheck.name = "accepted";
  inputCheck.checked = true;
  // Label Check
  const labelCheck = document.createElement("label");
  labelCheck.classList.add("bod2", "preto");
  labelCheck.htmlFor = "accepted-check";
  labelCheck.innerHTML = "aceito receber e-mails com promoções";

  // Botão do Formulário
  const loginButton = document.createElement("button");
  loginButton.classList.add("btn");
  loginButton.innerHTML = "Avançar";
  loginButton.addEventListener("click", (event) => {
    event.preventDefault();
    loginButton.dispatchEvent(
      new CustomEvent(events.REGISTER, { bubbles: true })
    );
  });

  // Montando a estrutura da Seção
  formLogin.appendChild(formLoginContainer);
  formLoginContainer.appendChild(loginTitle);
  formLoginContainer.appendChild(loginText);
  formLoginContainer.appendChild(loginForm);
  loginForm.appendChild(loginName);
  loginForm.appendChild(loginEmail);
  loginForm.appendChild(loginCEP);
  loginForm.appendChild(loginCheck);
  loginCheck.appendChild(inputCheck);
  loginCheck.appendChild(labelCheck);
  loginForm.appendChild(loginButton);

  return formLogin;
};
