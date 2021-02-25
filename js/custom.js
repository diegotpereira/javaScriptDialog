var form = document.getElementById("form-contato");

if (form.addEventListener) {
    form.addEventListener("submit", validaCadastro);
} else if (form.attachEvent){
    form.attachEvent("onsubmit", validaCadastro);
}
function validaCadastro(evt){
    var nome = document.getElementById('nome');
    var email = document.getElementById('email');
    var sexo = document.getElementById('sexo');
    var senha = document.getElementById('senha');
    var senha2 = document.getElementById('senha2');

    var filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    var contErro = 0;

    caixa_nome = document.querySelector('.msg-nome');

    if (nome.value == "") {
        caixa_nome.innerHTML = "Favor preencher com Nome!";
        caixa_nome.style.display = 'block';
        contErro += 1;
    } else {
        caixa_nome.style.display = 'none';
    }

    caixa_email = document.querySelector('.msg-email');
    if (email.value == "") {
        caixa_email.innerHTML = "Favor preencher com e-mail";
        caixa_email.style.display = 'block';
        contErro += 1;
    }else if (filtro.test(email.value)){
        caixa_email.style.display = 'none';
    }else{
        caixa_email.innerHTML = "Formato de e-email inválido!";
        caixa_email.style.display = 'block';
        contErro += 1;
    }

    caixa_sexo = document.querySelector('.msg-sexo');
    if (sexo.value == "") {
        caixa_sexo.innerHTML =  "Favor marque o sexo!";
        caixa_sexo.style.display = 'block';
        contErro += 1;
    } else {
        caixa_sexo.style.display = 'none';
    }
    
    caixa_senha = document.querySelector('.msg-senha');
    if (senha.value == "") {
        caixa_senha.innerHTML = "Favor preencher s senha";
        caixa_senha.style.display = 'block';
        contErro += 1;
    } else if(senha.value.length < 6) {
        caixa_senha.innerHTML = "Favor preencher a senha com o minimo de 6 caracteres!"
        caixa_senha.style.display = 'block';
        contErro += 1;
    }else{
        caixa_senha.style.display = 'none';
    }

    caixa_senha2 = document.querySelector('.msg-senha2');
    if (senha2.value == "") {
        caixa_senha2.innerHTML = "Favor preencher o campo repita a senha!"
        caixa_senha2.style.display = 'block';
        contErro += 1;
    } else if (senha2.value.length < 6){
        caixa_senha2.innerHTML = "Favor preencher o campo repita a senha com o minimo de 6 caracteres!"
        caixa_senha2.style.display = 'block';
        contErro += 1;
    }else{
        caixa_senha2.style.display = 'none';
    }
    if (senha.value != "" && senha2.value != "" && senha.value != senha2.value) {
        caixa_senha2.innerHTML = "O campo repita a senha é difrente do campo senha!";
        caixa_senha2.style.display = 'block';
        contErro += 1;
    }
    if (contErro > 0) {
        evt.preventDefault();
    }
}