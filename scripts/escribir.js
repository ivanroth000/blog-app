document.addEventListener("DOMContentLoaded", () => {
  let saludo = document.getElementById("saludo");
  let nombre = localStorage.getItem("nombre");
  saludo.innerHTML = `¡Bienvenido <span>${nombre}!</span>`;
});


// Luego, capturas el evento click del botón
document.querySelector('button[type=submit]').addEventListener('click', function() {
  // Obtienes el contenido del editor
  let contenido = quill.root.innerHTML;
  
  if(contenido.trim() === '' || contenido.trim() === '<p><br></p>') {
    alert('El contenido no puede estar vacío');
    return;
  }

  // Recuperas las entradas anteriores del localStorage
  let entradas = JSON.parse(localStorage.getItem('entradasBlog')) || [];

  // Añades la nueva entrada al arreglo
  entradas.push(contenido);
  

  // Almacenas el arreglo actualizado en localStorage
  localStorage.setItem('entradasBlog', JSON.stringify(entradas));

  // Rediriges al usuario a la página 'miBlog'
  window.location.href = 'miBlog.html';
});



