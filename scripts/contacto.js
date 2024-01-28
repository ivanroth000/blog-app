function cambiarColorLabel(id) {
    let label = document.querySelector(`label[for="${id}"]`);
    label.style.color = "#b926d3";
    label.style.fontSize = "18px";
  }

  function cambiarColorTextarea(id) {
    let textarea = document.querySelector(`textarea[for="${id}"]`);
    textarea.style.color = "#b926d3";
    textarea.style.fontSize = "18px";
  }
  
  function restaurarColorLabel(id) {
    let label = document.querySelector(`label[for="${id}"]`);
    label.style.color = "black";
    label.style.fontSize = "15px";
  }

  function restaurarColorTextarea(id) {
    let textarea = document.querySelector(`textarea[for="${id}"]`);
    textarea.style.color = "black";
    textarea.style.fontSize = "15px";
  }
  
  let formulario = document.querySelector(".form");
  let elementos = document.querySelectorAll(".form input");
  let mensajesDeError = document.querySelectorAll(".form .divError");
  
  formulario.onsubmit = (e) => {
    e.preventDefault();
    let esValido = true;
  
    // Limpiar el contenido de los mensajes de error
    mensajesDeError.forEach((mensajeDeError) => (mensajeDeError.innerHTML = ""));
  
    elementos.forEach((elemento) => {
      let valorInputSinEspacios = elemento.value.trim();
      if (valorInputSinEspacios.length === 0) {
        esValido = false;
        // Obtener el mensaje de error asociado al elemento actual
        let mensajeDeError = document.getElementById(
          `msjError${elemento.id.charAt(0).toUpperCase()}${elemento.id.slice(1)}`
        );
        let parrafoError = document.createElement("p");
        parrafoError.classList.add("msjError");
        parrafoError.innerText = "El campo no puede estar vacío";
        mensajeDeError.appendChild(parrafoError);
      }
    });

    let mensajeTextarea = document.getElementById('mensaje').value;
        let msjError = document.getElementById('msjErrorMensaje');

        if (mensajeTextarea.trim() === '') {
            esValido = false
            let p = document.createElement('p')
            p.innerText = 'El mensaje no puede estar vacío';
            p.classList.add("msjError");
            msjError.appendChild(p)
        } else {
            msjError.innerText = ''; // Limpiar el mensaje de error si el textarea no está vacío
        }
        
    //dirige a la otra página si todo está ok
    function registrar() {
      // Solo permite la redirección si esValido es verdadero
      if(esValido){
        swal({
            title: "¡Mensaje enviado!",
            text: "Gracias por comunicarte con nosotros",
            icon: "success",
            backdrop: "#7b1db9",
            buttons: {
                confirm: {
                  text: "ok",
                  className: "btnNotificacion",
                },
            }
            
        });
        limpiarForm()
    }
    }
    registrar();
  };

  function limpiarForm() {
    // Limpiar todos los elementos del formulario
    elementos.forEach((elemento) => {
        elemento.value = '';
        let mensajeDeError = document.getElementById(
            `msjError${elemento.id.charAt(0).toUpperCase()}${elemento.id.slice(1)}`
          );
          mensajeDeError.innerHTML = ''
    });

    // Limpiar el textarea
    let mensajeTextarea = document.getElementById('mensaje');
    mensajeTextarea.value = '';
    let msjErrorMensaje = document.getElementById('msjErrorMensaje')
    msjErrorMensaje.innerHTML = ''
    
}

let btnCancelar = document.getElementById('btnCancelar')
btnCancelar.onclick = (e) => {
    e.preventDefault()
    limpiarForm()
}


