// Recuperar la entrada del localStorage
let entrada = JSON.parse(localStorage.getItem('entradaActual'));

// Encontrar el elemento donde quieres mostrar la entrada
let divContenido = document.getElementById('entradaCompleta');

// Asignar la entrada al innerHTML del elemento
divContenido.innerHTML = entrada;
