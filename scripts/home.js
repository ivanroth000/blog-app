document.addEventListener("DOMContentLoaded", () => {
  let saludo = document.getElementById("saludo");
  let nombre = localStorage.getItem("nombre");
  saludo.innerHTML = `¡Bienvenido <span>${nombre}!</span>`;
});
