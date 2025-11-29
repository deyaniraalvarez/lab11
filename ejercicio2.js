function parOImpar() {
  const input = document.getElementById('numero2');
  const salida = document.getElementById('respuesta2');
  let n = Number(input.value);

  if (isNaN(n)) {
    salida.textContent = 'Ingresa un número válido.';
    return;
  }

  if (n % 2 === 0) {
    salida.textContent = 'El número es par.';
  } else {
    salida.textContent = 'El número es impar.';
  }
}