function evaluarDescuento() {
  const input = document.getElementById('monto3');
  const salida = document.getElementById('respuesta3');
  let monto = Number(input.value);

  if (isNaN(monto) || monto < 0) {
    salida.textContent = 'Ingresa un monto válido (mayor o igual a 0).';
    return;
  }

  let total = monto;
  if (monto > 100) {
    const descuento = monto * 0.10; // 10%
    total = monto - descuento;
    salida.textContent = Se aplica 10% de descuento. Total a pagar: $${total.toFixed(2)};
  } else {
    salida.textContent = No aplica descuento. Total a pagar: $${total.toFixed(2)};
  }
}