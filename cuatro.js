function mostrar()
{
	var numero1;
	var numero2;
	var suma;
	var resta;
	numero1=prompt("ingrese numero uno aqui");
	numero2=prompt("ingrese numero dos aqui");
	suma=parseInt(numero1)/parseInt(numero2);
	division=parseInt(numero1)-parseInt(numero2);
	if (numero1==numero2) 
		{
			alert(numero1+" + "+numero2+"  =  "+suma);
		} 
	if (numero1>numero2) 
		{
			alert(numero1+" / "+numero2+"  =  "+division);
		} 
	if (suma<50) 
		{
			alert("la suma es : "+suma+" y supero el 10");
		}
}
