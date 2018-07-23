function mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;
	console.log(mesDelAño);
	switch(mesDelAño)
	{
		case"Enero": case"marzo": case"Mayo": case"Julio": case"Agosto": case"Octubre": case"Diciembre": alert("31 dias");
		break;
		case"Abril": case"Junio": case"Septiembre": case"Noviembre": alert("30 dias");
		break;
		default:
		case"Febrero" :alert("29 dias");
		break;



	}







}

//	FIN DE LA FUNCIÓN