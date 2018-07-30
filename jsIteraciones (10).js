function mostrar()
{

	var contador=0;
	var numero;
	var acumulador;
	var sumanegativos=0;
	var sumapositivos;
	var cantidadnegativos;
	var cantidadpositivos;
	var cantidad0;
	var numerospar;
	var promediopositivos;
	var promedionegativos;
	var positivosynegativos;
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="n")
	{
		contador++;
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		acumulador=acumulador+numero;

		if(numero>0)
		{
			sumapositivos=sumapositivos+numero;
		}
		if(numero<0)
		{
			sumanegativos=sumanegativos+numero;
		}
		if(numero>0)
		{
			cantidadpositivos=contador;
		}
		if(numero<0)
		{
			cantidadnegativos=contador;

		}
		








 respuesta=prompt("desea seguir ingresando numeros?");

	}


alert(cantidadpositivos);
}//FIN DE LA FUNCIÓN