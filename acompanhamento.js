let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

const container = document.getElementById("pedidos-container");
const filtroStatus = document.getElementById("filtro-status");

function carregarPedidos() {
    container.innerHTML = "";

    let pedidosFiltrados = pedidos;

    if (filtroStatus.value !== "todos") {
        pedidosFiltrados = pedidos.filter(p => p.status === filtroStatus.value);
    }

    pedidosFiltrados.forEach(pedido => {

        const div = document.createElement("div");
        div.className = `pedido ${pedido.status}`;

        div.innerHTML = `
            <p><strong>Produto:</strong> ${pedido.produto}</p>
            <p><strong>Quantidade:</strong> ${pedido.quantidade}</p>
            <p><strong>Fornecedor:</strong> ${pedido.fornecedor}</p>
            <p><strong>Valor:</strong> R$${pedido.valor}</p>
            <p><strong>Prazo:</strong> ${pedido.prazo}</p>
            <p><strong>Data Estimada:</strong> ${pedido.dataEstimada}</p>

            <div class="botoes-status">
                <button class="btn-cancelar" data-id="${pedido.id}">Cancelar</button>
                <button class="btn-andamento" data-id="${pedido.id}">Em Andamento</button>
                <button class="btn-concluida" data-id="${pedido.id}">Concluída</button>
            </div>

            <hr>
        `;

        container.appendChild(div);
    });

    ativarBotoes();
}

function ativarBotoes() {

    document.querySelectorAll(".btn-cancelar").forEach(btn => {
        btn.onclick = () => atualizarStatus(btn.dataset.id, "cancelada");
    });

    document.querySelectorAll(".btn-andamento").forEach(btn => {
        btn.onclick = () => atualizarStatus(btn.dataset.id, "em-andamento");
    });

    document.querySelectorAll(".btn-concluida").forEach(btn => {
        btn.onclick = () => atualizarStatus(btn.dataset.id, "concluida");
    });
}

function atualizarStatus(id, novoStatus) {
    id = Number(id);

    pedidos = pedidos.map(pedido => {
        if (pedido.id === id) pedido.status = novoStatus;
        return pedido;
    });

    localStorage.setItem("pedidos", JSON.stringify(pedidos));

    carregarPedidos();
}

filtroStatus.addEventListener("change", carregarPedidos);

carregarPedidos();
