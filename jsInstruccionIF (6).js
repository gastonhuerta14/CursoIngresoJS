function mostrar()
{
//tomo la edad  
	var edad;
	edad=parseInt(document.getElementById('edad').value);
	if (edad>=18) {alert("usted es mayor de edad");} 
	else if (edad>=13 && edad<=17) {alert("usted es adolecente");} 
	else {alert("usted es un niño");}


}//FIN DE LA FUNCIÓN