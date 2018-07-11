function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;
	numero=Math.round(Math.random()*(10-0)+0);
	if (numero>=9) {alert("Exelente");} 
	else if (numero>=4 && numero<=7) {alert("Aprobo");} 
	else {alert("Vamos la proxima se puede");}

}//FIN DE LA FUNCIÓN