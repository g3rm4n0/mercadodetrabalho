/*
Leia um valor inteiro entre 1 e 12, inclusive. Correspondente a este valor, deve ser apresentado como resposta o mês do ano por extenso, em inglês, com a primeira letra maiúscula.

Entrada
A entrada contém um único valor inteiro.

Saída
Imprima por extenso o nome do mês correspondente ao número existente na entrada, com a primeira letra em maiúscula.
*/

let mes = prompt("Informe o mes de 1 a 12 ? ");


switch (mes) {

    case "1":
        console.log("Janeiro! / January !");
        break;

    case "2":
        console.log("Fevereiro! / February !");
        break;

    case "3":
        console.log("Março! / March !");
        break;

    case "4":
        console.log("Abril! / April !");
        break;

    case "5":
        console.log("Maio! / May !");
        break;

    case "6":
        console.log("Junho! / june !");
        break;

    case "7":
        console.log("Julho! / July!");
        break;

    case "8":
        console.log("Agosto! / August!");
        break;

    case "9":
        console.log("Setembro! / Setember !");
        break;

    case "10":
        console.log("Outubro / October !");
        break;

    case "11":
        console.log("Novembro ! / November !");
        break;

    case "12":
        console.log("Dezembro / December !");
        break;



    default:
        console.log("Erro, informe o valor entre 1 a 12 !");

}