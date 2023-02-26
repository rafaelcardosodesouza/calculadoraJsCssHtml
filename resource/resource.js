
let result = document.getElementById('resultado');

function insert(char) {
  result.value += char;
}

function limpar() {
  result.value = '';
}

function corrigir() {
  result.value = result.value.slice(0, -1);
}

function calcular() {
  result.value = eval(result.value);  // não é recomendado usar "eval"
}
