document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const nomeLogin = document.querySelector("input[placeholder='Nome']").value;
    const senhaLogin = document.querySelector("input[placeholder='Senha']").value;

    const usuario = JSON.parse(localStorage.getItem("usuario"));
    let tentativas = parseInt(localStorage.getItem("tentativas")) || 0;

    if (!usuario) {
        alert("Nenhum usuário cadastrado!");
        return;
    }
    
    if (nomeLogin === usuario.nome && senhaLogin === usuario.senha) {

        alert("Login realizado com sucesso!");
        localStorage.setItem("tentativas", "0");
        window.location.href = "casa.html"; 
        return;
    }

    tentativas++;
    localStorage.setItem("tentativas", tentativas);

    if (tentativas >= 3) {
        const deseja = confirm("Você errou 3 vezes! Deseja redefinir sua senha?");
        if (deseja) {
            window.location.href = "esqueciSenha.html";
        } else {
            alert("Login bloqueado! Redefina a senha para continuar.");
        }
        return;
    }

    alert(`Nome ou senha incorretos! Tentativa ${tentativas}/3.`);
});
