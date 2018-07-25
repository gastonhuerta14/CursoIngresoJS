function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	while(!(isNaN(contador)))
	{
		contador=prompt(ingrese numero);
		contador=contador+contador;
		
	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN