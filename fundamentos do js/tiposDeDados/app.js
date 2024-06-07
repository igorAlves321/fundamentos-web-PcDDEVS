var nome = "Igor"; //String
var idade2 = parseInt(prompt("Qual a sua idade?"));
var idade = prompt("Qual a sua idade?");

if(idade >= 18) {
    alert("Alistado");
} else {
    alert("Não alistado");
}


var possuiRG = true; //Boolean
var time = prompt("Qual o seu time?");

if(time === "Corintias") {
    alert("Parabéns!");
} else {
    alert("Saí fora");
}

var comida = null; //Null
var simbolo = Symbol(); //Synbol
var novoObjeto = {}//Object

var array = ["maçã", "laranja", "melão"];

alert(array[1] + ", " + array[2]);