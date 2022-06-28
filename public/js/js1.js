function hoje() {
    elemento = document.getElementById("data");
    if (!elemento.value) {
        data=new Date().toISOString().substr(0,10);
        elemento.value = data;
    }
    
}

const botaoAdicionar = document.getElementById("adicionar")
let numero = 0;
function htmlNovaOperacao(pai) {//monta o html da operação
    if (numero ===0) {
        numero = 1
    } else {
        numero = Number(pai.lastElementChild.firstElementChild.textContent)+1
    }
    return '<div class="contador">'+ numero +'</div> <input type="text" name="ativo" title="Ativo" placeholder="ATIVO" required><select name="tipo" required title="Tipo"> <option value="" hidden>selecione tipo</option><option value=1>compra</option><option value=0>venda</option></select><select name="swingtrade" required title="Prazo"><option value="" hidden>selecione prazo</option><option value=1>swingtrade</option><option value=0>daytrade</option></select><input type="number" name="quantidade" min="1" title="Quantidade" placeholder="QUANTIDADE" required><input type="number" name="preco" step="0.01" title="Preço" placeholder="PREÇO" required><button type="button" onclick="removeOperacao(this);" class="delOperacao" title="Excluir operação">X</button>'
}

function addOperacao(){//adiciona a nova operação
    const elementoPai = document.getElementById("ativoFildset")
    const novaLinha = document.createElement("fieldset")
    novaLinha.classList.add("operacao")
    novaLinha.innerHTML = htmlNovaOperacao(elementoPai)
    elementoPai.append(novaLinha)
}
addOperacao()

botaoAdicionar.addEventListener("click", addOperacao)

function removeOperacao(elemento) {
    let operacoes = document.querySelectorAll("fieldset.operacao").length
    if (operacoes === 1) {
        alert("Não é possível excluir todas as operações")
    } else {
        elemento.parentElement.remove();
    }
}

// https://api-cotacao-b3.labdo.it/
// https://api-cotacao-b3.labdo.it/api/empresa