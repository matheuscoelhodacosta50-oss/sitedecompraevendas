const cpfInput = document.getElementById('cpf');

cpfInput.addEventListener('input', function () {
    let value = cpfInput.value;

    value = value.replace(/\D/g, '');

    value = value.slice(0, 11);

    if (value.length > 6) {
        value = value.replace(/(\d{3})(\d{3})(\d+)/, '$1.$2.$3');
    } else if (value.length > 3) {
        value = value.replace(/(\d{3})(\d+)/, '$1.$2');
    }

    if (value.length > 9) {
        value = value.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d+)/, '$1.$2.$3-$4');
    }

    cpfInput.value = value;
});

const telefoneInput = document.getElementById('telefone');

telefoneInput.addEventListener('input', function () {
    let value = telefoneInput.value;

    value = value.replace(/\D/g, '');

    value = value.slice(0, 11);

    if (value.length > 6) {
        value = value.replace(/(\d{2})(\d{5})(\d+)/, '($1) $2-$3');
    } else if (value.length > 2) {
        value = value.replace(/(\d{2})(\d+)/, '($1) $2');
    }

    telefoneInput.value = value;
});

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const idade = document.getElementById("idade").value;
    const cpf = document.getElementById("cpf").value;
    const telefone = document.getElementById("telefone").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;

    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem!");
        return;
    }

    const usuario = {
        nome,
        email,
        idade,
        cpf,
        telefone,
        senha
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));

    alert("Cadastro concluído! Você será redirecionado para o login.");
    window.location.href = "login.html"; 
});

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;

    const senhaForte = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (!senhaForte.test(senha)) {
        alert("A senha deve ter no mínimo 6 caracteres, contendo letras e números!");
        return;
    }

    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem!");
        return;
    }

    const usuario = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        idade: document.getElementById("idade").value,
        cpf: document.getElementById("cpf").value,
        telefone: document.getElementById("telefone").value,
        senha: senha
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));
    localStorage.setItem("tentativas", 0); 

    alert("Cadastro concluído! Redirecionando para o login...");
    window.location.href = "index.html";
});
