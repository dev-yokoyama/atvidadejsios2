let idade = Number(prompt("Digite a sua idade:"));

let categoria;

if (idade >= 0 && idade <= 12) {
    categoria = "Criança";
} else if (idade >= 13 && idade <= 17) {
    categoria = "Adolescente";
} else if (idade >= 18 && idade <= 64) {
    categoria = "Adulto";
} else if (idade >= 65) {
    categoria = "Idoso";
} else {
    categoria = "Idade inválida!";
}

alert("A sua categoria é: " + categoria);
