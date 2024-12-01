const formulario = document.getElementById('formulario');
const inputs = formulario.querySelectorAll('input');

const expresiones = {
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, //Letras, numeros, guion y guion bajo.
  nombre:/^[a-zA-Z\s]{1,40}$/, //Letras y espacios.
  password: /^.{4,12}$/, //4 a 12 digitos.
  email: /^[a-zA-Z0-9_.+=]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //Letras, numeros, guion, guion bajo, punto, espacio, signo igual y signo plus.
  telefono: /^\d{7,14}$/ //7 a 14 digitos.
}

const validacion = {
  usuario: false,
  nombre: false,
  password:false,
  password2: false, 
  email:false,
  telefono: false
}

const validarCampo = (expresion, input, campo) => {
  if(expresion.test(input.value)){
    document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
    document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
    document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-xmark');
    document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-check');
    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
  }else{
    document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
    document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
    document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-check');
    document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-xmark');
    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
  };
};

const validarContraseña = (e) => {
  const pwd1 = document.getElementById(`password`);
  const pwd2 = document.getElementById(`password2`);

  if(pwd1.value !== pwd2.value){
    document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
    document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
    document.querySelector(`#grupo__password2 i`).classList.remove('fa-circle-check');
    document.querySelector(`#grupo__password2 i`).classList.add('fa-circle-xmark');
    document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
  }else{
    document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
    document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
    document.querySelector(`#grupo__password2 i`).classList.remove('fa-circle-xmark');
    document.querySelector(`#grupo__password2 i`).classList.add('fa-circle-check');
    document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');

  };
};


const validarFormulario = (e) => {
  switch (e.target.name) {
    case 'usuario':
      validarCampo(expresiones.usuario, e.target, e.target.name);
      validacion.usuario = true;
      break;
    case 'nombre':
      validarCampo(expresiones.nombre, e.target, e.target.name);
      validacion.nombre = true;
      break;
    case 'password':
      validarCampo(expresiones.password, e.target, e.target.name);
      validarContraseña();
      validacion.password = true;
      break;
    case 'password2':
      validarContraseña();
      validacion.password2 = true;
      break;  
    case 'email':
      validarCampo(expresiones.email, e.target, e.target.name);
      validacion.email = true;
      break;
    case 'telefono':
      validarCampo(expresiones.telefono, e.target, e.target.name);
      validacion.telefono = true;
      break;
  };
};

inputs.forEach((input) => {
  input.addEventListener('input', validarFormulario);
  input.addEventListener('blur', validarFormulario);
})

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  const terminos = document.querySelector('#terminos');

  if(validacion.usuario && validacion.nombre && validacion.password && validacion.password2 && validacion.email && validacion.telefono && terminos.checked) {
   formulario.reset();
   document.querySelector(`#formulario__mensaje-exito`).classList.add(`formulario__mensaje-exito-activo`);
   setTimeout(() => {
     document.getElementById(`formulario__mensaje-exito`).classList.remove(`formulario__mensaje-exito-activo`);
  },3000);
   
   document.querySelectorAll(`.formulario__grupo-correcto`).forEach((icono) => {
    icono.classList.remove(`formulario__grupo-correcto`)
   });

   document.getElementById(`formulario__mensaje`).classList.remove(`formulario__mensaje-activo`)

  }else{
    document.getElementById(`formulario__mensaje`).classList.add(`formulario__mensaje-activo`)
  };
});