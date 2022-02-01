// Ezequiel Miccio - DIV I
// ES 07

var numeroUno;
var numeroDos;
var resultado;

numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

function sumar()
{
	var numeroUno;
	var numeroDos;

	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	var resultado = numeroUno + numeroDos;
	alert("La suma es de " + resultado);
}

function restar()
{
	var numeroUno;
	var numeroDos;

	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	var resultado = numeroUno - numeroDos;
	alert("La resta es de " + resultado);
}

function multiplicar()
{
	var numeroUno;
	var numeroDos;

	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	var resultado = numeroUno * numeroDos;
	alert("La multiplicación es de " + resultado);
}

function dividir()
{
	var numeroUno;
	var numeroDos;

	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	var resultado = numeroUno / numeroDos;
	alert("La división es de " + resultado);
}


// id 1: txtIdNumeroUno
// id 2: txtIdNumeroDos

