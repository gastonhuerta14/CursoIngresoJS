function mostrar()
{

	var contador = 0;
	var acumulador = 0;
	var respuesta = 'si';
	var numero;
	var promedio;
	
	while(respuesta != "n")
	{
		
		numero = prompt("ingrese un numero");
		numero = parseInt(numero);
		acumulador = acumulador + numero;
		contador++;
		respuesta = prompt("desea seguir ingresando numeros?");
				

	}


	promedio = acumulador / contador;

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = promedio;

}//FIN DE LA FUNCIÓN