function mostrar()
{
	var numerouno;
	var numerodos;
	var division;
	var suma;

	numerouno=parseInt(prompt("ingrese primer numero"));
	numerodos=parseInt(prompt("ingrese segundo numero"));

	if (numerouno==numerodos)
	{
		alert("numero uno "+numerouno+" y numero 2 "+numerodos+" son iguales.");
	}
	if (numerouno>numerodos)
	{
		division=numerouno/numerodos;
		alert("numero 1 es mayor que numero 2 entonces se dividen, y la division da: "+division);
	}
	else
	{
		suma=numerouno+numerodos;
		alert("como numero 1 no es mayor que numero 2 entonces se suman, y la suma da: "+suma);
		if (suma<50)
		{
			alert("la suma es "+suma+" y es menor a 50");
		}
	}


}
