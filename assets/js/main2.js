const forms = document.querySelector("#formulario");

forms.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const pegarPeso = evento.target.querySelector("#peso");
  const pegarAltura = evento.target.querySelector("#altura");

  const peso = Number(pegarPeso.value);
  const altura = Number(pegarAltura.value);

  if (!peso) {
    gerarResults("Peso inválido", "false");
    return;
  }

  if (!altura) {
    gerarResults("Altura inválida", "false");
    return;
  }

  const imc = pegarImc(peso, altura);
  const niveldoImc = calculodoimc(imc);

  let msg = `Seu IMC é ${imc} (${niveldoImc}).`;

  gerarResults(msg, true);
});

function pegarImc(peso, altura) {
  const imc = peso / (altura * altura);
  return imc.toFixed(2);
}
function calculodoimc(imc) {
  const abaixo = "Abaixo do Peso";
  const normal = "Peso Normal";
  const sobrepeso = "Sobrepeso";
  const obs1 = "Obesidade grau I";
  const obs2 = "Obesidade grau II";
  const obs3 = "Obesidade grau III";

  if (imc <= 18.5) {
    return abaixo;
  } else if (imc > 18.5 && imc <= 24.9) {
    return normal;
  } else if (imc >= 25 && imc <= 29) {
    return sobrepeso;
  } else if (imc >= 30 && imc <= 34.99) {
    return obs1;
  } else if (imc >= 35 && imc <= 39.99) {
    return obs2;
  } else if (imc >= 40) {
    return obs3;
  }
}

function criandoParagrafo() {
  const criar = document.createElement("p");
  return criar;
}

function gerarResults(msg, valido) {
  const results = document.querySelector("#resultado");
  results.innerHTML = "";

  const paragrafo = criandoParagrafo();

  if (valido) {
    paragrafo.classList.add("paragrafo");
  } else {
    paragrafo.classList.add("ruim");
  }

  paragrafo.innerHTML = msg;
  console.log(msg, valido)
  results.appendChild(paragrafo);
}
