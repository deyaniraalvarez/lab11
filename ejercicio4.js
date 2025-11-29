// Guardamos el número generado en una variable global (simple)
let numeroSecreto = null;

function iniciarJuego() {
  numeroSecreto = Math.floor(Math.random() * 10) + 1; // 1..10
  document.getElementById('respuesta4').textContent = 'Número generado, intenta adivinar (1-10).';
}

function adivinar() {
  const input = document.getElementById('adivina4');
  const salida = document.getElementById('respuesta4');
  const intento = Number(input.value);

  if (numeroSecreto === null) {
    salida.textContent = 'Primero haz clic en "Generar número".';
    return;
  }

  if (isNaN(intento) || intento < 1 || intento > 10) {
    salida.textContent = 'Ingresa un número entre 1 y 10.';
    return;
  }

  if (intento === numeroSecreto) {
    salida.textContent = '¡Felicidades, adivinaste el número!';
    // opcional: reiniciar
    numeroSecreto = null;
  } else {
    salida.textContent = Lo siento, el número era ${numeroSecreto}.;
    numeroSecreto = null;
  }
}
