function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';
	var acumulador;


	while(respuesta != "n")
	{
		
		numero = prompt("ingrese un numero");
		numero = parseInt(numero);
		acumulador = acumulador + numero;
		contador++;
		respuesta = prompt("desea seguir ingresando numeros?");
		

	}

	

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN