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
	var pesostotales;
	var pesomaximo=1;
	var pesominimo=1000;

	var flag;


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
			nombremaspesado=animal;
			temperaturamaspesado=temperatura;
			flag=1;
		}
		if (temperatura<0)
		{
			animalesa0grados++;
		}
		flag=0;
		if ((temperatura<0 && pesomaximo<peso)||flag==0)
		{
			pesomaximo=peso;
			flag=1;
		}
		flag=0;
		if ((temperatura<0 && pesomaximo>peso)||flag==0)
		{
			pesomaximo=peso;
			flag=1;
		}
		cantidadanimales++;
		pesostotales=pesostotales+peso;






		respuesta=prompt("desea seguir cargando datos?");
	}
	promediopeso=pesostotales/cantidadanimales;

	document.write("<br>"+"La cantidad de temperaturas pares es :"+cantidadtemperaturaspares);
	document.write("<br>"+"El nombre y temperatura del animal más pesado es: "+nombremaspesado+" y "+temperaturamaspesado);
	document.write("<br>"+"La cantidad de animales que viven a menos de 0 grados es "+animalesa0grados);
	document.write("<br>"+"El promedio del peso de todos los animales es"+promediopeso);
	document.write("<br>"+"El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero es "+pesomaximo+" es el peso maximo y el peso minimo es "+pesominimo);


}
