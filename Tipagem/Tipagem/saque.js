saldoDisponivel= 1000
valorDoSaque= prompt ("Informe o valor do saque")

if (valorDoSaque <= saldoDisponivel) {
    saldoDisponivel = saldoDisponivel - valorDoSaque
    document.write("Você está sacando R$ ", valorDoSaque, ".")
} else {
    document.write("O valor solicitado é maior que o valor disponível para saque!")
}

document.write("Saldo disponível: R$ ", saldoDisponivel)