function mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;
	console.log(mesDelAño);
	switch(mesDelAño){

		case"Enero": alert("que comience bien el año");
		break;
		case"Marzo": alert("a clases");
		break;
		case"Julio": alert("se vienen las vacaciones");
		break;
		case"Diciembre": alert("felices fiestas");
		break;
	}


}//FIN DE LA FUNCIÓN