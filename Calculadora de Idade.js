function calculaidade() {

    
let anodenascimento =prompt("Digite seu ano de nascimento:");
let anoatual = prompt("Digite o ano em que estamos:");

if (isNaN(anoatual)) {
        alert("Voce nao digitou corretamente!!");
        let dataAtual = new Date();
        anoatual = dataAtual.getFullYear;

}   
if (anodenascimento > anoatual) {
    console.log("Voce digitou a data de nascimento maior que a Data atual.Tente novamente.");
    calculaidade();

}
let idade = anoatual - anodenascimento;
console.log("Voce tem ", idade, "anos de idade!!");

}
calculaidade()





    



