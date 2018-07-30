/*
maria f 15
jose m 33
pepe m 81

mostrar: 
1.cantidad de mayores de edad
2.menores de edad
3.cantidad de mujeres=1
4.cantidad de hombre=2
5.nombre menor
6.mayor
7.hombre menor edad

*/
function mostrar()
{
	var edad;
	var sexo;
	var nombre;
	var contador=0;
	var nota;
	var promedio;
	var notabaja;
	var varonesmayores;
	var varonesmenores;
	var masjoven;

	while(contador<3)
	{
		contador++;
		nombre=prompt("ingrese nombre");
		sexo=("ingrese sexo");
		while(sexo!="f" || sexo!="m")
		{
			sexo=prompt("error, ingrese sexo");
		}
		while(edad<0 || edad>100)
		{
			edad=prompt("error, ingrese edad");
		}
		if(edad>=18)
		{
			varonesmayores++;
		} else
		{
			varonesmenores++;
		}



	}

	/*	document.write("<br>"promedio);
		document.write("<br>"notabaja+sexo);
		document.write("<br>"varonesmayores+"varones mayores sacaron mas o igual de 6");
		document.write("<br>"masjoven);

		if()
		{
			document.write("<br>");			
		}
*/

}
