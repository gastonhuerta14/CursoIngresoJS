function mostrar()
{

	var contador;
	var mayor;
	var menor;
	var numero;
	//var bandera;
	
	contador=0;
	//bandera=0;
	mayor=-9999;
	menor=9999;
	
	var respuesta='si';

	while(respuesta!='n')
	{
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		if(contador==1)
		{
			mayor<numero;
			menor>numero;
			//bandera=0;
		} else
		{
			
			if(numero<menor)
			{
				menor=numero;
			}
			if(numero>mayor)
			{
				mayor=numero;
			}

		}
	 
	 respuesta=prompt("desea seguir ingresando numeros?");
	
	}


	document.getElementById('maximo').value=mayor;
	document.getElementById('minimo').value=menor;




}//FIN DE LA FUNCIÓN