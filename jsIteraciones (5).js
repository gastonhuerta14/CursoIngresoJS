function mostrar()
{

	var sexo = prompt("ingrese f ó m .");

	sexo = sexo.toLowerCase();
	
	while(!(sexo=="f" || sexo=="m"))
		{
			sexo = prompt("reingrese f ó m .");
		}	
	sexo = sexo.toLowerCase();
	document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN