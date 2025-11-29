function verificarCalificacion() {
  const input = document.getElementById('nota1');
  const salida = document.getElementById('respuesta1');
  let nota = Number(input.value);

  if (isNaN(nota) || nota < 0 || nota > 100) {
    salida.textContent = 'Ingresa una nota numérica entre 0 y 100.';
    return;
  }

  if (nota >= 90) {
    salida.textContent = 'Aprobado con honores';
  } else if (nota >= 70) {
    salida.textContent = 'Aprobado';
  } else {
    salida.textContent = 'Reprobado';
  }
}