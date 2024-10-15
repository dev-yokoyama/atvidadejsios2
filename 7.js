let operacao = prompt("Escolha uma operação: 1. Adição 2. Subtração 3. Multiplicação 4. Divisão");

let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));

let resultado;

switch (operacao) {
    case '1':
        resultado = num1 + num2;
        alert("Resultado da Adição: " + resultado);
        break;
    case '2':
        resultado = num1 - num2;
        alert("Resultado da Subtração: " + resultado);
        break;
    case '3':
        resultado = num1 * num2;
        alert("Resultado da Multiplicação: " + resultado);
        break;
    case '4':
        if (num2 !== 0) {
            resultado = num1 / num2;
            alert("Resultado da Divisão: " + resultado);
        } else {
            alert("Erro: Divisão por zero não é permitida.");
        }
        break;
    default:
        alert("Operação inválida! Por favor, escolha um número de 1 a 4.");
}
