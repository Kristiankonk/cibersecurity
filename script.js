// script.js

$(document).ready(function () {
  $('#contactForm').on('submit', function (e) {
    e.preventDefault();
    const nombre = $('#nombre').val().trim();
    const correo = $('#correo').val().trim();
    const mensaje = $('#mensaje').val().trim();

    if (!nombre || !correo || !mensaje) {
      alert('Todos los campos son obligatorios.');
      return;
    }

    alert('Formulario enviado correctamente.');
    this.reset();
  });

  $('#testForm').on('submit', function (e) {
    e.preventDefault();
    const respuesta = $('#pregunta1').val();
    if (respuesta === '3') {
      $('#resultadoTest').html('<div class="alert alert-success">¡Correcto! Actualizar tus dispositivos es una buena práctica.</div>');
    } else {
      $('#resultadoTest').html('<div class="alert alert-danger">Respuesta incorrecta. Intenta nuevamente.</div>');
    }
  });
});