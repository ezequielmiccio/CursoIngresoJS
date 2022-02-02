// Ezequiel Miccio - DIV I
// ES 07

var numeroUno;
var numeroDos;
var resultado;

function sumar()
{

	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numeroUno + numeroDos;

	alert("La suma es de " + resultado);
}

function restar()
{

	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numeroUno - numeroDos;

	alert("La resta es de " + resultado);
}

function multiplicar()
{

	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numeroUno * numeroDos;

	alert("La multiplicación es de " + resultado);
}

function dividir()
{

	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numeroUno / numeroDos;

	alert("La división es de " + resultado);
}

