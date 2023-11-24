// main.js
import { cambiarColorLabel, restaurarColorLabel, validarFormulario } from './login.js';

//validación del formulario
const idsParaCambiarColor = ['nombre', 'apellido', 'email', 'pais','ciudad', 'hombre','mujer', 'nacimiento', 'contrasenia','contraseniaRepetida'];
cambiarColorLabel();
restaurarColorLabel();

idsParaCambiarColor.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
        element.addEventListener('focus', () => cambiarColorLabel(id));
        element.addEventListener('blur', () => restaurarColorLabel(id));
    }
});

validarFormulario()