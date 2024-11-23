document.addEventListener("DOMContentLoaded", function () {
  const botonEnviar = document.getElementById("miboton");

  // Añade el evento de click al botón
  botonEnviar.addEventListener("click", function () {
    const formulario = document.getElementById("formulario");

    // Verifica si todos los campos requeridos están completos
    if (formulario.checkValidity()) {
      // Muestra mensaje de éxito
      alert("Formulario enviado correctamente.");

      // Limpia  el formulario
      formulario.reset();
    } else {
      // Si hay campos requeridos vacíos, muestra un mensaje de advertencia
      alert("Por favor, completa todos los campos requeridos.");
    }
  });
});
