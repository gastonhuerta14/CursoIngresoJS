function mostrar()
{
			var animal;
	var peso;
	var temperatura;
	var respuesta = "s";
	var cantidadtemperaturaspares=0;
	var cantidadtemperaturasinpares=0;
	var resto=0;
	var maspesado;
	var nombremaspesado;
	var temperaturamaspesado;
	var animalesa0grados=0;
	var promediopeso;
	var cantidadanimales=0;
	var pesostotales=0;
	var pesomaximo=0;
	var pesominimo=0;

	var flag=0;
	var flag2=0;
	var flag3=0;
	var flag4=0;
	var flag5=0;


	while (respuesta!="n")
	{
		animal=prompt("ingrese animal");
		peso=parseInt(prompt("ingrese peso del animal"));
		if (peso>=1000 || peso<=1)
		{
			peso=parseInt(prompt("Reingrese peso del animal"));
		}
		temperatura=parseInt(prompt("ingrese temperatura del habitat del animal"));
		if (temperatura<=-30 || temperatura>=30)
		{
			temperatura=parseInt(prompt("Reingrese temperatura del habitat del animal"));
		}

		resto=temperatura%2;
		if (resto==0)
		{
			cantidadtemperaturaspares++;
		}
		if (peso>maspesado || flag==0)
		{
			maspesado=peso;
			nombremaspesado=animal;
			temperaturamaspesado=temperatura;
			flag=1;
		}
		if (temperatura<0)
		{
			animalesa0grados++;
		}
		if (temperatura<0 && animalesa0grados>0)
		{ 
				if (pesomaximo<peso || flag2==0)
				{
					pesomaximo=peso;
					flag2=1;
				}
				if (pesominimo>peso || flag3==0)
				{
					pesominimo=peso;
					flag3=1;
				}
		} 
		if (temperatura<0 && animalesa0grados==0)
		{
				if (pesomaximo<peso || flag4==0)
				{
					pesomaximo=peso;
					flag4=1;
				}
				if (pesominimo>peso || flag5==0)
				{
					pesominimo=peso;
					flag5=1
				}		
		}

		cantidadanimales++;
		pesostotales=pesostotales+peso;






		respuesta=prompt("desea seguir cargando datos?");
	}
	promediopeso=pesostotales/cantidadanimales;

	document.write("<br>"+"La cantidad de temperaturas pares es: "+cantidadtemperaturaspares);
	document.write("<br>"+"El nombre y temperatura del animal más pesado es: "+nombremaspesado+" y "+temperaturamaspesado);
	document.write("<br>"+"La cantidad de animales que viven a menos de 0 grados es: "+animalesa0grados);
	document.write("<br>"+"El promedio del peso de todos los animales es "+promediopeso);
	if (pesominimo==0 && pesomaximo==0)
	{
		document.write("<br>"+"no hay animales cuyas temperaturas sean bajo cero");
	} else
	{
	document.write("<br>"+"El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero es "+pesomaximo+" como el peso maximo y el peso minimo es "+pesominimo);
	}

}
