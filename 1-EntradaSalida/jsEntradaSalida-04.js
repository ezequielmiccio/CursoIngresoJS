// Ezequiel Miccio - DIV I
// ES 04

function mostrar()
{
	// creo la variable
	var nombreIngresado;


	// pido el dato con prompt y se guarda en la variable
	nombreIngresado = prompt("Ingrese su nombre");

	//la variable va a ser el valor del id seleccionado (para mostrar el nombre pedido por el prompt en ese id del HTML)
	document.getElementById("txtIdNombre").value = nombreIngresado;
}

