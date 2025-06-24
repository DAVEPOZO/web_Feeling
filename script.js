document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-contacto");
  const respuesta = document.getElementById("respuesta");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    respuesta.textContent = "¡Gracias por tu mensaje! Te responderemos pronto.";
    form.reset();
  });
});
