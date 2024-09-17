//Faça um programa para um caixa de mercado que imprima um
//recibo de compras. O programa deve receber o nome de N
//produtos que estão sendo comprados (N simboliza uma
//quantidade variada). Utilize as estruturas de repetição.
//Também deve receber as informações de quantidade e valor
//unitário de cada um destes produtos.
//Exiba o valor total de cada produto comprado e o valor total
//das compras de todos os produtos.

//Funçaõ principal 
function caixaDeMercado() {
    let totalGeral = 0;
    let numProduto = parseInt(prompt("Quantos produtos você está comprando?"));
    let recibo = "";

//Estrutura de repetição para capturar informações de cada produtos
for (let i = 0; i < numProduto; i++) {
    let nomeProduto = prompt(`Nome do produto ${i + 1}:`);
    let quantidade = parseInt(prompt(`Quantidade de ${nomeProduto}:`));
    let valorUnitario = parseFloat(prompt(`Valor unitário de  ${nomeProduto}:`));

    //Calcula o valor total do produto
    let valorTotalProduto = quantidade * valorUnitario;
    totalGeral += valorTotalProduto;

    //Adiciona as informações ao recibo
    recibo += `${nomeProduto}: ${quantidade}  x  R$ ${valorUnitario.toFixed(2)}  =  R$ ${valorTotalProduto.toFixed(2)}`;
}
   // Exibe o recibo e o total geral
   recibo += `\nTotal geral: R$ ${totalGeral.toFixed(2)}`;
   alert(recibo);
}

//Chama a função 
caixaDeMercado();