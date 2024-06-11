let rifa = new Array(100).fill(null);

function marcarNumero() {
    let numero = document.getElementById("numero").value;
    let nome = document.getElementById("nome").value;
    let mensagem = document.getElementById("mensagem");

    if (numero < 1 || numero > 100) {
        mensagem.textContent = "Número inválido";
        return;
    }

    if (rifa[numero - 1] !== null) {
        let nomeOculto = rifa[numero - 1].substr(0, 3).replace(/./g, '*') + rifa[numero - 1].substr(3);
        mensagem.textContent = `Número já está reservado, pertence a ${nomeOculto}`;
    } else {
        rifa[numero - 1] = nome;
        mensagem.textContent = "Número reservado para você, boa sorte!";
    }
}

function continuar() {
    document.getElementById("numero").value = '';
    document.getElementById("nome").value = '';
    document.getElementById("mensagem").textContent = '';
}