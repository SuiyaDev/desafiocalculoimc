const forms = document.querySelector("#formulario");

forms.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const getWeight = evento.target.querySelector("#peso");
  const getHeight = evento.target.querySelector("#altura");

  const weight = Number(getWeight.value);
  const height = Number(getHeight.value);

  if (!weight) {
    getResults("Peso inválido", "false");
    return;
  }

  if (!height) {
    getResults("Altura inválida", "false");
    return;
  }

  const imc = getImc(weight, height);
  const getCalcIMC = calcImc(imc);

  let msg = `Seu IMC é ${imc} (${getCalcIMC}).`;

  getResults(msg, true);
});

function getImc(weight, height) {
  const imc = weight / (height * height);
  return imc.toFixed(2);
}
function calcImc(imc) {
  const below = "Abaixo do Peso";
  const normal = "Peso Normal";
  const overweight = "Sobrepeso";
  const obs1 = "Obesidade grau I";
  const obs2 = "Obesidade grau II";
  const obs3 = "Obesidade grau III";

  if (imc <= 18.5) {
    return below;
  } else if (imc > 18.5 && imc <= 24.9) {
    return normal;
  } else if (imc >= 25 && imc <= 29) {
    return overweight;
  } else if (imc >= 30 && imc <= 34.99) {
    return obs1;
  } else if (imc >= 35 && imc <= 39.99) {
    return obs2;
  } else if (imc >= 40) {
    return obs3;
  }
}

function createParagraph() {
  const createElementHtml = document.createElement("p");
  return createElementHtml;
}

function getResults(msg, valido) {
  const results = document.querySelector("#resultado");
  results.innerHTML = "";

  const paragraph = createParagraph();

  if (valido) {
    paragraph.classList.add("paragrafo");
  } else {
    paragraph.classList.add("ruim");
  }

  paragraph.innerHTML = msg;
  results.appendChild(paragraph);
}
