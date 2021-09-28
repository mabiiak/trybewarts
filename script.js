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

  inputCheckbox.addEventListener('change', (event) => {
    if (event.target.checked) {
      buttonSubmit.disabled = false;
    } else {
      buttonSubmit.disabled = true;
    }
  });
}
verificaButtonSubmit();

// Requisito 21
function saveData(event) {

  event.preventDefault();

  const nome = document.getElementById('input-name').value;
  const sobrenome = document.getElementById('input-lastname').value
  const emailValor = document.getElementById('input-email').value;
  const casa = document.getElementById('house').value;
  const familia = document.getElementById('div-family').value;
  const materias = document.querySelectorAll('.subject').value;
  const avaliacao = document.querySelectorAll('.radio').value;
  const observacoes = document.getElementById('textarea').value;
 
    const name =`Nome: ${nome} ${sobrenome}`;
    const email = `Email: ${emailValor}`;
    const house = `Casa: ${casa}`;
    const family = `Família: ${familia}`;
    const subjects = `Matérias: ${materias}`;
    const evaluation = `Avaliação: ${avaliacao}`;
    const comments = `Observações: ${observacoes}`;
 
     const info = [
      name,
      email,
      house,
      family,
      subjects,
      evaluation,
      comments
    ]; 

     for (let i = 0; i < info.length; i += 1) {
      const paragrafo = document.createElement('p');
      paragrafo.innerText = info[i];

      const evaluationForm = document.getElementById('evaluation-form');
        evaluationForm.appendChild(p);
    }

    return true;
}

  const submitButton = document.getElementById('submit-btn');
    submitButton.addEventListener('click', saveData)

/* Deve haver um campo com o formato "Nome: Alguem Aqui"
Deve haver um campo com o formato "Email: email@mail.com"
Deve haver um campo com o formato "Casa: Casa Escolhida"
Deve haver um campo com o formato "Família: Família Escolhida"
Deve haver um campo com o formato "Matérias: Matérias, Marcadas, Aqui"
Deve haver um campo com o formato "Avaliação: NotaAqui"
Deve haver um campo com o formato "Observações: Observações aqui" */