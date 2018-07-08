function mostrar()
{
//tomo la edad  
	var edad;
	edad=parseInt(document.getElementById('edad').value);
	if (edad<11 || edad>18) {alert("usted no es adolecente, usted tiene "+edad);}

}//FIN DE LA FUNCIÓN