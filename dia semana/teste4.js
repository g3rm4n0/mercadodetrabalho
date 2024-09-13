//Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda possui, além 
//de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch/case,
//caso o comprador queira o hatch, retorne: “Compra efetuada com sucesso”. 
//Nas outras opções, retorne: “Tem certeza que não prefere este modelo?”. Caso seja especificado um modelo que não está 
//disponível, retorne no console: “Não trabalhamos com este tipo de automóvel aqui

automovel = prompt("Digite o tipo de automóvel que você deseja comprar em nossa loja:")

switch(automovel) {
    case "hatch":
        console.log("Compra efetuada com sucesso");
        break

    case "sedan":
    case "motocicleta":
    case "caminhonete":
        console.log("Tem certeza que não prefere este modelo?")
        break
    default:
        console.log("Não trablahamos com este tipo de automóvel aqui!")
}