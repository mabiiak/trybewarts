const buttonLogin = document.getElementById('login');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const valorEmail = 'tryber@teste.com';
const valorSenha = '123456';

function verificaImput() {
  if (email.value === valorEmail
  && senha.value === valorSenha) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

buttonLogin.addEventListener('click', verificaImput);

// Requisito 18
function verificaButtonSubmit() {
const inputCheckbox = document.getElementById('agreement'); 
const buttonSubmit = document.getElementById('submit-btn');

buttonSubmit.disabled = true;

inputCheckbox.addEventListener('change', function (event) {
  if (event.target.checked) {
    buttonSubmit.disabled = false;
  } else {
    buttonSubmit.disabled = true;
  }
});
}
verificaButtonSubmit();