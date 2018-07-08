function mostrar()
{
//tomo la edad  
	var edad;
	edad=parseInt(document.getElementById('edad').value);
	if (edad>=18) {alert("usted es mayor de edad");}
	else {alert("usted no es mayor de edad = "+edad);}

}//FIN DE LA FUNCIÓN