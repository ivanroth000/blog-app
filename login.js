export function cambiarColorLabel(ids) {
    // Si ids no es un array, lo convertimos en un array
    if (!Array.isArray(ids)) {
        ids = [ids];
    }
    ids.forEach(id => {
        let label = document.querySelector(`label[for="${id}"]`);
        if (label) {
            label.style.color = '#b926d3';
            label.style.fontSize = '18px';
        }
    });
}

export function restaurarColorLabel(ids) {
    // Si ids no es un array, lo convertimos en un array
    if (!Array.isArray(ids)) {
        ids = [ids];
    }
    ids.forEach(id => {
        let label = document.querySelector(`label[for="${id}"]`);
        if (label) {
            label.style.color = 'black';
            label.style.fontSize = '15px';
        }
    });
}


let formulario = document.querySelector('.form')
let elementos = document.querySelectorAll('.form input');
let mensajesDeError = document.querySelectorAll('.form .divError');
let nacimiento = document.getElementById('nacimiento')
let hombreCheckbox = document.getElementById('hombre');
let mujerCheckbox = document.getElementById('mujer');

export function validarFormulario (){
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
                parrafoError.innerText = 'El campo no puede estar vacío';
                mensajeDeError.appendChild(parrafoError)
            }
        });
        //valida la mayoría de edad del usuario
        let fechaActual = new Date()
        const mayoriaDeEdad = 18
        let edadUsuario = new Date(nacimiento.value)
        const diferenciaAnios = fechaActual.getFullYear() - edadUsuario.getFullYear();
        if(diferenciaAnios < mayoriaDeEdad){
            esValido = false
            const msjErrorNacimiento = document.querySelector('#msjErrorNacimiento')
            const msjMenorDeEdad = document.createElement('p')
            msjMenorDeEdad.classList.add('msjError')
            msjMenorDeEdad.innerText = 'Debes ser mayor de 18 años para registrarte'
            msjErrorNacimiento.appendChild(msjMenorDeEdad)
        }
        //valida que solo un check-box este seleccionado
        if((!hombreCheckbox.checked && !mujerCheckbox.checked) || (hombreCheckbox.checked && mujerCheckbox.checked) ){
            esValido = false
            let msjErrorSexo = document.querySelector('#msjErrorSexo')
            let parrafoErrorSexo = document.createElement('p')
            parrafoErrorSexo.classList.add('msjError')
            parrafoErrorSexo.innerText = 'Debes seleccionar una opción'
            msjErrorSexo.appendChild(parrafoErrorSexo)
        }
        //validamos que ambas contraseñas coincidan
        let contrasenia = document.getElementById('contrasenia')
        let contraseniaRepetida = document.getElementById('contraseniaRepetida')
        if(contraseniaRepetida.value){
        if(contrasenia.value !== contraseniaRepetida.value){
            esValido = false
            let msjErrorContrasenia = document.querySelector('#msjErrorContraseniaRepetida')
            let parrafoErrorContrasenia = document.createElement('p')
            parrafoErrorContrasenia.classList.add('msjError')
            parrafoErrorContrasenia.innerText = 'Las contraseñas deben coincidir'
            msjErrorContrasenia.appendChild(parrafoErrorContrasenia)
        }
    }
        //dirige a la otra página si todo está ok
        if (esValido) {
            window.location.href = "home.html";
        }

    }
}
