function enviar(){
    var nome = document.getElementById('nome');
    var email = document.getElementById('email');
    var mensagem = document.getElementById('mensagem');
    if(nome.value == ''){
        alert('Ops! Digite o seu nome');
        return;
    }

    if(email.value == ''){
        alert('Ops! Digite um o seu email');
        return;
    }

    if(mensagem.value == ''){
        alert('Ops! Digite uma mensagem');
        return;
    }
    alert('E-mail enviado com sucesso!');
}