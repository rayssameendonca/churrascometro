const body = document.querySelector("body");
body.style.backgroundColor = "var(--branco)";

/* Header */
body.appendChild(header());

/* Formulário de Login */
body.appendChild(formLogin());

/* Calculadora */
body.appendChild(calculator());

/* Resultado */
body.appendChild(result());

/*  localstorage */
localstorageApi();
