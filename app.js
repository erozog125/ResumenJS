const keyup = document.querySelector('#txt-entrada1');
const keydown = document.querySelector('#txt-entrada2');
const keypress = document.querySelector('#txt-entrada3');
const btn_clear = document.querySelector('#btn_clear');
const h1_title = document.querySelector('#h1-title');
const btn_event_mouse = document.querySelector('#btnMouse');
const btnEstilos = document.querySelector('#btnEstilos');
const btn_aparecer = document.querySelector('#btnAparece');
const btn_strings = document.querySelector('#btnString');

const strings_properties=()=> {
  console.log(h1_title.textContent.length);
  console.log(h1_title.textContent.charAt(h1_title.textContent.length-1));
  console.log(h1_title.textContent.toUpperCase());
  console.log(h1_title.textContent.toLowerCase());
  console.log(h1_title.textContent.includes('DOM'));
  console.log(h1_title.textContent.indexOf('NODOM'));
}

const event_Mouse=()=> {
  console.log('Funciona');
  h1_title.textContent = 'Soy un evento del mouse';
}

const apply_Styles=()=> {  
  h1_title.style.boxShadow = '0 0 10px red';
}

const appear=()=> {
  h1_title.style.visibility = 'visible';  
}

const vanish=()=> {
  h1_title.style.visibility = 'hidden';  
}

const soyKeyUp=()=> {
  h1_title.textContent = keyup.value;
  h1_title.style.color = keyup.value;
  console.log(keyup.value);
}

const soyKeyDown=()=> {
  h1_title.textContent = keydown.value;
  h1_title.style.color = keydown.value;
  console.log(keydown.value);
}

const soyKeypress=()=> {
  h1_title.textContent = keypress.value;
  h1_title.style.color = keypress.value;
  console.log(keypress.value);
}

const limpiar=()=> {
  h1_title.textContent = "Conectando con el DOM";
  h1_title.style.visibility = "visible";
  h1_title.style.display = "block";
  keydown.value = '';
  keyup.value = '';
  keypress.value = '';
}

eventListener();
function eventListener() {
  keyup.addEventListener('keyup', soyKeyUp);
  keydown.addEventListener('keydown', soyKeyDown);
  keypress.addEventListener('keypress', soyKeypress);
  btn_clear.addEventListener('click', limpiar);
  btn_event_mouse.addEventListener('click', event_Mouse);
  btnEstilos.addEventListener('click', apply_Styles);
  btn_aparecer.addEventListener('click', appear);
  btn_aparecer.addEventListener('blur', vanish);  
  btn_strings.addEventListener('click', strings_properties);  
}