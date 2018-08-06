function mostrar()
{
	var letra;
	var numero;
	var respuesta = "s";

	var numeropar=2;
	var resto=0;
	var cantpares=0;
	var cantinpares=0;
	var cantceros=0;
	var sumapositivos=0;
	var cantpositivos=0;
	var promedio;
	var sumanegativos=0;
	var numeromaximo=-100;
	var letramaximo;
	var numerominimo=100;
	var letraminimo;
	var flag=0;
	
	while (respuesta != "n")
	{	
		flag=0;
		letra=prompt("ingrese letra");
		numero=parseInt(prompt("Ingrese numero aqui"));
		while (numero<=-101 || numero>=101)
		{
			numero=parseInt(prompt("Reingrese numero aqui"));
		}
		resto=numero%numeropar;
		if (resto==0)
		{
			cantpares++;
		}
		else
		{
			cantinpares++;
		}
		if (numero==0)
		{
			cantceros++;
		}
		if (numero>0)
		{
			sumapositivos=sumapositivos+numero;
			cantpositivos++;
		}
		if (numero<0)
		{
			sumanegativos=sumanegativos+numero;
		}
		if (numero<numerominimo)
		{
			numerominimo=numero;
			letraminimo=letra;
		}
		if (numero>numeromaximo)
		{
			numeromaximo=numero;
			letramaximo=letra;
		}
		respuesta=prompt("desea usted seguir ingresando letras y numeros? (s/n)");
	}
	promedio=sumapositivos/cantpositivos;
	
	document.write("<br>"+"La cantidad de números pares: "+cantpares);
	document.write("<br>"+"La cantidad de números impares: "+cantinpares);
	document.write("<br>"+"La cantidad de ceros: "+cantceros);
	document.write("<br>"+"El promedio de todos los números positivos ingresados: "+promedio);
	document.write("<br>"+"La suma de todos los números negativos: "+sumanegativos);
	document.write("<br>"+"El número y la letra del mínimo: "+numerominimo+" y "+letraminimo);
	document.write("<br>"+"El número y la letra del máximo: "+numeromaximo+" y "+letramaximo);
}