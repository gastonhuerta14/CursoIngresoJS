/*maria f 15
jose m 33
pepe m 81

mostrar: 
1.cantidad de mayores de edad
2.menores de edad
3.cantidad de mujeres=1
4.cantidad de hombre=2
5.nombre menor
6.mayor
7.hombre menor edad*/

function mostrar()
{
	var edad;
	var sexo;
	var nombre;

	var contador = 0;
	var cantidadmayoresedad=0;
	var menoresdeedad=0;
	var cantidadF=0;
	var cantidadM=0;
	var menoredad=0;
	var mayoredad=0;
	var nombredelmenor;
	var nombredelmayor;
	var hombremenoredad;

	while(contador<3)
	{
		nombre=prompt("ingrese nombre");
		sexo=prompt("ingrese sexo");
		edad=parseInt(prompt("ingrese edad"));

		if (edad > 17)
		{
			edad=cantidadmayoresedad;
			cantidadmayoresedad++;
		} else
		{
			edad=menoresdeedad;
			menoresdeedad++;
		}
		if (sexo=="f")
		{
			cantidadF++;
		}
		if (sexo=="m")
		{
			cantidadM++;
		}
		if(edad>menoredad)
		{
			

		}





		contador++;

	}

		document.write("<br>"+"cantidad de mayores: "+cantidadmayoresedad);
		document.write("<br>"+"cantidad de menores: "+menoresdeedad);
		document.write("<br>"+"cantidad de mujeres: "+cantidadF);
		document.write("<br>"+"cantidad de hombres: "+cantidadM);
	

	
}
