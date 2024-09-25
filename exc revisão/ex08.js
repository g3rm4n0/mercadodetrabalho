// Implemente um loop while que continue pedindo para o usuário 
//inserir um número até que ele digite um número maior que 100.
let num = 0;
while (num <= 100) {
    num = parseInt(prompt("Digite um número maior que 100"));
}
document.write("Você digitou:", num);
