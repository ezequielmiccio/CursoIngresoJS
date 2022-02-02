// Ezequiel Miccio - DIV I
// ES 10
// ENTREGADO

// id importe: txtIdImporte
// id resultado: txtIdResultado

function mostrarAumento()
{
	var importe;
	var porcentaje;
	var totalConDescuento;

	importe = document.getElementById("txtIdImporte").value;
	importe = parseInt(importe);

	porcentaje = importe * 0.25;
	totalConDescuento = importe - porcentaje;

	document.getElementById("txtIdResultado").value = totalConDescuento;

}








/* 

		// primera forma

	porcentaje = importe * 0.25;

	totalConDescuento = importe - porcentaje;


	// segunda forma

	porcentaje = importe * 25/100; // eficaz

	totalConDescuento = importe - porcentaje;


	// tercera forma 

	totalConDescuento = importe + (importe * 0.25);

	// cuarta forma

	totalConDescuento = importe * 0.75; // para que nos arroje el 75% (sacamos el 25% de descuento)


*/