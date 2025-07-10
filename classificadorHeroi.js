let heroi = document.getElementById("heroi");

let experiencia = document.getElementById("exp");

let botao = document.getElementById("calcular");

botao.addEventListener("click", (event) => {
  event.preventDefault();
  let nomeDoHeroi = heroi.value;
  let experienciaNumerica = parseInt(experiencia.value);

  if (experienciaNumerica <= 1000) {
    let resultadoFinal = document.getElementById("resultado");

    if (resultadoFinal) {
      let div = document.createElement("p");
      div.textContent = `O herói ${nomeDoHeroi} está no nível ferro`;
      resultadoFinal.appendChild(div);
    } else {
      alert("Elemento inválido!");
    }
  } else {
    alert("Preencha o campo");
  }
  document.getElementById("heroi").value = "";
  document.getElementById("exp").value = "";
});
