function mostrar()
{
		var precio;
		var porcentaje;
		var descuentodinero;
		var preciodescuento;
		var descuentoiva;

		precio=parseInt(prompt("ingrese precio"));
		porcentaje=parseInt(prompt("ingrese porcentaje"));


		descuentodinero=porcentaje*precio/100;
		preciodescuento=(100-porcentaje)*precio/100;
		descuentoiva=(100-21)*preciodescuento/100;
		alert("el descuento en dinero es de "+descuentodinero+", el precio con el descuento es de "+preciodescuento+" y el IVA es del 21%.");
		document.getElementById('elPrecioFinal').value=descuentoiva;
}
