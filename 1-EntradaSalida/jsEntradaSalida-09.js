// Ezequiel Miccio - DIV I
// ES 09

// id sueldo: txtIdSueldo
// id resultado: txtIdResultado

function mostrarAumento()
{
	var importe;
	var porcentaje;
	var totalConAumento;

	importe = document.getElementById("txtIdSueldo").value;
	importe = parseInt(importe);

	porcentaje = importe * 0.10;
	totalConAumento = importe + porcentaje;

	document.getElementById("txtIdResultado").value = totalConAumento;

}







/* 	// primer forma

	porcentaje = importe * 0.10; // eficiente

	totalConAumento = importe + porcentaje;


	// segunda forma

	porcentaje = importe * 10/100; // eficaz

	totalConAumento = importe + porcentaje;


	// tercera forma 

	totalConAumento = importe + (importe * 0.1);

	// cuarta forma

	totalConAumento = importe * 1.1; // para agregar el 10% directamente */