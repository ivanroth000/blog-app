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
let contrasenia = document.getElementById('contraseña')
let contraseniaRepetida = document.getElementById('contraseñaRepetida')

formulario.onsubmit = (e) => {
    e.preventDefault()

   

}
