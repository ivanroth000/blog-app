// main.js
import { cambiarColorLabel, restaurarColorLabel } from './login.js';


const idsParaCambiarColor = ['nombre', 'apellido', 'email', 'pais','ciudad', 'hombre','mujer', 'nacimiento', 'contrasenia','contraseniaRepetida'];
cambiarColorLabel(idsParaCambiarColor);
restaurarColorLabel(idsParaCambiarColor);

idsParaCambiarColor.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
        element.addEventListener('focus', () => cambiarColorLabel(id));
        element.addEventListener('blur', () => restaurarColorLabel(id));
    }
});

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


function validarFormulario (formulario){
    formulario.onsubmit = (e) => {
    e.preventDefault()
    let esValido = true

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

if (esValido) {
    window.location.href = "home.html";
}

}}
