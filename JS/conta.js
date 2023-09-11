// Função para realizar operações matemáticas
function calcular(operacao) {
    var valor1 = parseInt(document.getElementById('n1').value);
    var valor2 = parseInt(document.getElementById('n2').value);
    var resultadoElement = document.getElementById('lblresult');
    var erroElement = document.getElementById('erro');

    if (isNaN(valor1) || isNaN(valor2)) {
        erroElement.textContent = "Preencha ambos os campos com números válidos.";
        resultadoElement.innerHTML = "";
    } else {
        erroElement.textContent = "";

        switch (operacao) {
            case 'adicao':
                resultadoElement.innerHTML = valor1 + valor2;
                break;
            case 'subtracao':
                resultadoElement.innerHTML = valor1 - valor2;
                break;
            case 'multiplicacao':
                resultadoElement.innerHTML = valor1 * valor2;
                break;
            case 'divisao':
                if (valor2 === 0) {
                    erroElement.textContent = "Não é possível dividir por zero.";
                    resultadoElement.innerHTML = "";
                } else {
                    resultadoElement.innerHTML = valor1 / valor2;
                }
                break;
        }
    }
}

// Adicionar manipuladores de eventos aos botões de operação
var botoesOperacao = document.getElementsByClassName('operacao');
for (var i = 0; i < botoesOperacao.length; i++) {
    botoesOperacao[i].addEventListener('click', function () {
        calcular(this.getAttribute('data-op'));
    });
}

// Adicionar manipulador de evento ao botão "Limpar"
document.getElementById('limpar').addEventListener('click', function () {
    document.getElementById('lblresult').innerHTML = '';
    document.getElementById('erro').textContent = '';
    document.getElementById('n1').value = '';
    document.getElementById('n2').value = '';
});