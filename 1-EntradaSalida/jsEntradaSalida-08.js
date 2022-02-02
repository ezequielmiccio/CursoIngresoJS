// Ezequiel Miccio - DIV I
// ES 08

function SacarResto()
{

	var dividendo;
	var divisor;
	var resultado;

	dividendo = document.getElementById("txtIdNumeroDividendo").value;
	divisor = document.getElementById("txtIdNumeroDivisor").value;

	dividendo = parseInt(dividendo);
	divisor = parseInt(divisor);

	resultado = dividendo % divisor;

	alert("El resto es " + resultado);
	
}

// id1: txtIdNumeroDividendo
// id2: txtIdNumeroDivisor