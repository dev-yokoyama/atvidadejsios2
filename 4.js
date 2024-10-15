let altura = Number(prompt("Digite sua altura em metros:"));
let peso = Number(prompt("Digite seu peso em quilogramas:"));

let imc = peso / (altura * altura);

let mensagem;
if (imc >= 18.5 && imc <= 24.9) {
    mensagem = "Seu IMC é " + imc + ". Você está dentro do intervalo saudável.";
} else {
    mensagem = "Seu IMC é " + imc + ". Você não está dentro do intervalo saudável.";
}

alert(mensagem);
