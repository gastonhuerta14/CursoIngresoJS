/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var apellido;
	apellido=document.getElementById('elNombre').value;
	apellido=prompt("escriba su nombre : "+apellido);
	alert("tu apellido es : "+ apellido);
	//prompt("escriba su nombre  :  ");
}

