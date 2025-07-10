let heroi = document.getElementById("heroi");

let experiencia = document.getElementById("exp");

let botao = document.getElementById("calcular");

botao.addEventListener("click", () => {
  event.preventDefault();
  let resultadoHeroi = heroi.value;
  let resultadoExperiencia = experiencia.value;
  console.log(resultadoHeroi, resultadoExperiencia);

  document.getElementById("heroi").value = "";
  document.getElementById("exp").value = "";
});
