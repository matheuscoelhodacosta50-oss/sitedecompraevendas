document.getElementById("formSenha").addEventListener("submit", function(event) {
    event.preventDefault();

    const senha = document.getElementById("novaSenha").value;
    const confirmar = document.getElementById("confirmarSenha").value;

    if (senha !== confirmar) {
        alert("As senhas não coincidem!");
        return;
    }

    alert("Senha redefinida com sucesso!");

    window.location.href = "login.html";
});
