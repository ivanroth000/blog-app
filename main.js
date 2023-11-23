function cambiarColorLabel(id) {
   let label = document.querySelector(`label[for="${id}"]`);
   label.style.color = '#b926d3'
   label.style.fontSize = '18px'
}

function restaurarColorLabel(id) {
    let label = document.querySelector(`label[for="${id}"]`);
   label.style.color = 'black'
   label.style.fontSize = '15px'
}

let formulario = document.querySelector('.form')
let nombre = document.getElementById('nombre')
let apellido = document.getElementById('apellido')
let email = document.getElementById('email')
let pais = document.getElementById('pais')
let ciudad = document.getElementById('ciudad')
let hombre = document.getElementById('hombre')
let mujer = document.getElementById('mujer')
let nacimiento = document.getElementById('nacimiento')
let contrasenia = document.getElementById('contrasenia')
let contraseniaRepetida = document.getElementById('contraseniaRepetida')
let elementos = document.querySelectorAll('.form input');
let mensajesDeError = document.querySelectorAll('.form .divError');


formulario.onsubmit = (e) => {
    e.preventDefault()
    let esValido = true
// Remover la clase 'error' de todos los elementos
elementos.forEach(elemento => elemento.classList.remove('error'));

// Limpiar el contenido de los mensajes de error
mensajesDeError.forEach(mensajeDeError => mensajeDeError.innerHTML = '');

elementos.forEach(elemento => {
    let valorInputSinEspacios = elemento.value.trim();
    if (valorInputSinEspacios.length === 0) {
        esValido = false;
        // Obtener el mensaje de error asociado al elemento actual
        let mensajeDeError = document.getElementById(`msjError${elemento.id.charAt(0).
        toUpperCase()}${elemento.id.slice(1)}`);
        let parrafoError = document.createElement('p')
        parrafoError.classList.add('msjError')
        parrafoError.innerHTML = `<p>El campo no puede estar vacío</p>`;
        mensajeDeError.appendChild(parrafoError)
    }
});


}
