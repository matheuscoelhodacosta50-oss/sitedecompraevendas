const hoje = new Date().toISOString().split("T")[0];
document.getElementById("prazo").setAttribute("min", hoje);
document.getElementById("dataEstimada").setAttribute("min", hoje);

document.getElementById("compra").addEventListener("submit", function (event) {
    event.preventDefault();

    const pedido = {
        id: Date.now(),
        produto: document.getElementById("produto").value,
        quantidade: document.getElementById("quantidade").value,
        fornecedor: document.getElementById("fornecedor").value,
        valor: document.getElementById("valor").value,
        prazo: document.getElementById("prazo").value,
        dataEstimada: document.getElementById("dataEstimada").value,
        status: "pendente"
    };

    let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
    pedidos.push(pedido);

    localStorage.setItem("pedidos", JSON.stringify(pedidos));

    window.location.href = "acompanhamento.html";
});


