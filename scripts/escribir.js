document.addEventListener("DOMContentLoaded", () => {
  let saludo = document.getElementById("saludo");
  let nombre = localStorage.getItem("nombre");
  saludo.innerHTML = `¡Bienvenido <span>${nombre}!</span>`;
});


let isBold = false;
  let isItalic = false;

  document.querySelector('.negrita').addEventListener('click', function() {
    isBold = !isBold;
  });

  document.querySelector('.italica').addEventListener('click', function() {
    isItalic = !isItalic;
  });

  document.querySelector('textarea').addEventListener('input', function(e) {
    if (isBold) {
      e.target.style.fontWeight = 'bold';
    } else {
      e.target.style.fontWeight = 'normal';
    }

    if (isItalic) {
      e.target.style.fontStyle = 'italic';
    } else {
      e.target.style.fontStyle = 'normal';
    }
  });

