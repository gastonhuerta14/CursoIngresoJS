function mostrar()
{

	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));
	while(numero>10 || numero<0 || isNaN(numero))
	{
		numero = prompt("reingrese un número entre 0 y 10.");
	}

	document.getElementById('Numero').value = numero


}//FIN DE LA FUNCIÓN