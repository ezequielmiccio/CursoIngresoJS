// Ezequiel Miccio - DIV I
// ES 06

function sumar()
{
	
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numeroUno + numeroDos;
	alert("la suma es de " + resultado);

}

