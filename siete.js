/*
maria f 15
jose m 33
pepe m 81

mostrar: 
1.cantidad de mayores de edad
2.menores de edad
3.cantidad de mujeres=1
4.cantidad de hombre=2
5.nombre del menor
6.nombre del mayor
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
	var hombremenoredad=0;



	while (contador<3)
	{
		nombre=prompt("ingrese nombre");
		sexo=prompt("ingrese sexo");
		edad=parseInt(prompt("ingrese edad"));

		if (edad > 17)
		{
			cantidadmayoresedad++;
		} else
		{
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
		if ( edad>mayoredad || mayoredad==0)
		{
			mayoredad=edad;
			nombredelmayor=nombre;
		}
		if (edad<menoredad || menoredad==0)
		{
			menoredad=edad;
			nombredelmenor=nombre;
		}
		if ((edad<menoredad && sexo=="m") || hombremenoredad==0) 
		{
			menoredad=edad;
			hombremenoredad=nombre;
		}
		contador++;
	}
		document.write("<br>"+"cantidad de mayores: "+cantidadmayoresedad);
		document.write("<br>"+"cantidad de menores: "+menoresdeedad);
		document.write("<br>"+"cantidad de mujeres: "+cantidadF);
		document.write("<br>"+"cantidad de hombres: "+cantidadM);
		document.write("<br>"+"nombre del menor de edad: "+nombredelmenor);
		document.write("<br>"+"nombre del mayor de edad: "+nombredelmayor);
		document.write("<br>"+"nombre del hombre de menor edad: "+hombremenoredad);
}
