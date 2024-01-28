let entradas = JSON.parse(localStorage.getItem('entradasBlog')) || [];
entradas = entradas.reverse();



let mainContenido = document.getElementsByClassName('contenido')[0];

if (entradas.length === 0){
  let contenidoVacio = document.createElement('p')
  contenidoVacio.innerText = 'No hay ninguna entrada todavia'
  contenidoVacio.classList.add('contenidoVacio')
  mainContenido.appendChild(contenidoVacio)

  let btnPonteAEscribir = document.createElement('button')
  btnPonteAEscribir.innerText = 'Empezar a escribir'
  mainContenido.appendChild(btnPonteAEscribir)
  btnPonteAEscribir.classList.add('ponteAEscribir')

  btnPonteAEscribir.onclick = () =>{
    window.location.href = 'escribir.html';
  }
}

entradas.forEach(function(entrada, index) {
  let divContenido = document.createElement('div');
  
  // Limitar a 200 caracteres
  if (entrada.length > 200) {
    entrada = entrada.substring(0, 500) + '...';
  }
  
  divContenido.innerHTML = entrada;
  mainContenido.appendChild(divContenido);
  divContenido.classList.add('divContenido');

    
  // Crear un botón de "Leer más"
  let boton = document.createElement('button');
  boton.innerText = 'Leer más';
  boton.classList.add('leerMas')
  
  // Almacenar el índice de la entrada en el botón
  boton.dataset.entradaIndex = index;
  
  // Agregar un evento de clic al botón para redirigir a la página de la entrada completa
  boton.addEventListener('click', function() {
    // Recuperar el índice de la entrada del botón
    let entradaIndex = this.dataset.entradaIndex;
    
    // Almacenar la entrada completa en localStorage
    localStorage.setItem('entradaActual', JSON.stringify(entradas[entradaIndex]));
    
    // Redirigir a la página de la entrada completa
    window.location.href = 'entradaCompleta.html';
  });

  
  
  // Agregar el botón al div
  divContenido.appendChild(boton);
  mainContenido.appendChild(divContenido);
  divContenido.classList.add('divContenido');
});

//btn eliminar
/*
let botonEliminar = document.createElement('button');
  botonEliminar.innerText = 'Eliminar';
  
  // Almacenar el índice de la entrada en el botón
  botonEliminar.dataset.entradaIndex = index;
  
  // Agregar un evento de clic al botón para eliminar la entrada
  botonEliminar.addEventListener('click', function() {
    // Recuperar el índice de la entrada del botón
    let entradaIndex = this.dataset.entradaIndex;
    
    // Eliminar la entrada del arreglo de entradas
    entradas.splice(entradaIndex, 1);
    
    // Actualizar el localStorage
    localStorage.setItem('entradasBlog', JSON.stringify(entradas));
    
    // Recargar la página para mostrar las entradas actualizadas
    location.reload();
  });
  
  // Agregar el botón al div
  divContenido.appendChild(botonEliminar);
  */

