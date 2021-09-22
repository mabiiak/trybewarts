 let buttonLogin = document.getElementById('login');
 let email = document.getElementById('email');
 let senha = document.getElementById('senha');
 let valorEmail = "tryber@teste.com";
 let valorSenha = "123456";

 function verificaImput() {
        if (email.value === valorEmail && senha.value === valorSenha) {
            alert("Olá, Tryber!");
        } else {
            alert('Email ou senha inválidos.');
        }
}

buttonLogin.addEventListener('click', verificaImput);

