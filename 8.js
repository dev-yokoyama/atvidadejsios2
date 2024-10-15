let codigoPromocional = prompt("Oi! Informe o código promocional (DESC1, DESC2, DESC3, DESC4, DESC5):");

let valorProduto = Number(prompt("Qual é o valor do produto em R$?"));

let desconto;
let valorComDesconto;

switch (codigoPromocional) {
    case 'DESC1':
        desconto = 0.05; 
        break;
    case 'DESC2':
        desconto = 0.10; 
        break;
    case 'DESC3':
        desconto = 0.15; 
        break;
    case 'DESC4':
        desconto = 0.20; 
        break;
    case 'DESC5':
        desconto = 0.25; 
        break;
    default:
        alert("Ops! Código promocional inválido. Tente novamente.");
        throw new Error("Código promocional inválido."); 
}

valorComDesconto = valorProduto * (1 - desconto);

alert("Ótimo! Você escolheu um desconto de " + (desconto * 100) + "%. Valor original do produto: R$ " + valorProduto + ". Valor com desconto: R$ " + valorComDesconto + ". Aproveite");
