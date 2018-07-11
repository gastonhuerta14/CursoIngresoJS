function mostrar()
{
	var numero1;
	var numero2;
	var suma;
	var resta;
	numero1=prompt("ingrese numero uno aqui");
	numero2=prompt("ingrese numero dos aqui");
	suma=paseInt(numero1)+parseInt(numero2);
	resta=parseInt(numero1)-parseInt(numero2);
	if (numero1==numero2) {alert(numero1+"  "+numero2+"  =  "+suma);} 
	else if (numero1>numero2) {alert(numero1+"  "+numero2+"  =  "+resta);} 
	else if (suma>10) {alert("la suma es : "+suma+" y supero el 10");}
}
