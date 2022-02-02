// Ezequiel Miccio - DIV I
// ES 05

function mostrar()
{	
	var nombre;
	var edad;
	var mensaje;

	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;

	mensaje = "Usted se llama "+ nombre +" y tiene " + edad + " años."

	alert(mensaje);

}

