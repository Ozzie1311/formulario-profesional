const formulario = document.getElementById('formulario');
const inputs = formulario.querySelectorAll('input');

const expresiones = {
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, //Letras, numeros, guion y guion bajo.
  nombre:/^[a-zA-Z\s]{1,40}$/, //Letras y espacios.
  password: /^.{4,12}$/, //4 a 12 digitos.
  correo: /^[a-zA-Z0-9_.+=]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //Letras, numeros, guion, guion bajo, punto, espacio, signo igual y signo plus.
  telefono: /^\d{7,14}$/ //7 a 14 digitos.
}

const validarFormulario = (e) => {
  switch (e.target.name) {
    case 'usuario':
      if(expresiones.usuario.test(e.target.value)){
        document.getElementById('grupo__usuario').classList.remove('formulario__grupo-incorrecto');
        document.getElementById('grupo__usuario').classList.add('formulario__grupo-correcto');
        document.querySelector('.formulario__validacion-estado').classList.remove('fa-circle-xmark');
        document.querySelector('.formulario__validacion-estado').classList.add('fa-circle-check');
        document.querySelector('.formulario__input-error').classList.remove('formulario__input-error-activo');
      }else{
        document.getElementById('grupo__usuario').classList.add('formulario__grupo-incorrecto');
        document.getElementById('grupo__usuario').classList.remove('formulario__grupo-correcto');
        document.querySelector('.formulario__validacion-estado').classList.remove('fa-circle-check');
        document.querySelector('.formulario__validacion-estado').classList.add('fa-circle-xmark');
        document.querySelector('.formulario__input-error').classList.add('formulario__input-error-activo')
      };
      break;
  }
}

inputs.forEach((input) => {
  input.addEventListener('input', validarFormulario);
  input.addEventListener('blur', validarFormulario);
})

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
});