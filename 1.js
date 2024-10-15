let idade = prompt("Digite a sua idade:");

idade = Number(idade);

if (idade < 18) {
    alert("Você é menor de idade.");
} else if (idade >= 18 && idade < 60) {
    alert("Você é adulto.");
} else {
    alert("Você é velho.");
}
