var nota1= parseInt (prompt("Informe a primeira nota"))
var nota2= parseInt (prompt("Informe a segunda nota"))
var nota3= parseInt (prompt("Informe a terceira nota"))
var nota4= parseFloat (prompt("Informe a quarta nota"))
var media= (nota1+ nota2 + nota3 + nota4)/4

if(media >=6){
    document.write("Aprovado")
}
else{
    document.write("Reprovado")
}
