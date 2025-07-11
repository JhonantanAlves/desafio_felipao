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
      div.textContent = `O herói ${nomeDoHeroi} está no nível Ferro!`;
      resultadoFinal.appendChild(div);
    }
  } else if (experienciaNumerica >= 1001 && experienciaNumerica <= 2000) {
    let resultadoFinal = document.getElementById("resultado");

    if (resultadoFinal) {
      let div = document.createElement("p");
      div.textContent = `O herói ${nomeDoHeroi} está no nível Bronze!`;
      resultadoFinal.appendChild(div);
    }
  } else if (experienciaNumerica >= 2001 && experienciaNumerica <= 5000) {
    let resultadoFinal = document.getElementById("resultado");

    if (resultadoFinal) {
      let div = document.createElement("p");
      div.textContent = `O herói ${nomeDoHeroi} está no nível Prata!`;
      resultadoFinal.appendChild(div);
    }
  } else if (experienciaNumerica >= 5001 && experienciaNumerica <= 7000) {
    let resultadoFinal = document.getElementById("resultado");

    if (resultadoFinal) {
      let div = document.createElement("p");
      div.textContent = `O herói ${nomeDoHeroi} está no nível Ouro!`;
      resultadoFinal.appendChild(div);
    }
  } else if (experienciaNumerica >= 7001 && experienciaNumerica <= 8000) {
    let resultadoFinal = document.getElementById("resultado");

    if (resultadoFinal) {
      let div = document.createElement("p");
      div.textContent = `O herói ${nomeDoHeroi} está no nível Platina!`;
      resultadoFinal.appendChild(div);
    }
  } else if (experienciaNumerica >= 8001 && experienciaNumerica <= 9000) {
    let resultadoFinal = document.getElementById("resultado");

    if (resultadoFinal) {
      let div = document.createElement("p");
      div.textContent = `O herói ${nomeDoHeroi} está no nível Ascendente!`;
      resultadoFinal.appendChild(div);
    }
  } else if (experienciaNumerica >= 9001 && experienciaNumerica <= 10000) {
    let resultadoFinal = document.getElementById("resultado");

    if (resultadoFinal) {
      let div = document.createElement("p");
      div.textContent = `O herói ${nomeDoHeroi} está no nível Imortal!`;
      resultadoFinal.appendChild(div);
    }
  } else if (experienciaNumerica > 10000) {
    let resultadoFinal = document.getElementById("resultado");

    if (resultadoFinal) {
      let div = document.createElement("p");
      div.textContent = `O herói ${nomeDoHeroi} está no nível Radiante!`;
      resultadoFinal.appendChild(div);
    }
  } else {
    alert("Preencha o campo corretamente");
  }
  document.getElementById("heroi").value = "";
  document.getElementById("exp").value = "";
});
