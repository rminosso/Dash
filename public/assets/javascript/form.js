const inputTelefone = document.getElementById("input_contato");

inputTelefone.addEventListener("input", (e) => {
  let valor = e.target.value;

  valor = valor.replace(/\D/g, "");

  if (valor.length > 0) {
    valor = "(" + valor;
  }

  if (valor.length > 3) {
    valor = valor.slice(0, 3) + ") " + valor.slice(3);
  }

  if (valor.length > 10) {
    valor = valor.slice(0, 10) + "-" + valor.slice(10, 14);
  }

  e.target.value = valor;
});
