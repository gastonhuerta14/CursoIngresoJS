function mostrar()
{
	var diadelasemana;
	diadelasemana=prompt("ingrese un dia de la semana");

	switch(diadelasemana)
	{
		case"sabado":case"domingo":alert("es un fin de semana, buen finde");
		break;
		case"lunes":case"martes":case"miercoles":case"jueves":case"viernes":alert("es un  dia habil, a trabajar");
		break;
		default:
		alert("no es un dia valido");
		break;
	}
}
