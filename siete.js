function mostrar()
{
	var nota;
	var edad;
	var sexo;
	var contador = 0;
	var cantidadnotas = 0;
	var sumanotas=0;
	var promedionotas;
	var notabaja;
	var sexonotabaja;
	var masjoven=0;
	var notajoven=0;
	var sexojoven;
	var edadprimeramujer;
	var notaprimeramujer;
	var cantidadvaronesmayoresaprobados=0;
	var cantidadmujeres=0;

	var flag=0;
	var flag2=0;
	var primeramujer=0;

	while (contador<5)
	{
	nota=parseInt(prompt("ingrese nota"));
	while (nota<0 || nota>10)
	{
		nota=parseInt(prompt("Reingrese nota"));
	}
	edad=parseInt(prompt("ingrese edad"));
	sexo=prompt("ingrese sexo");
	while (!(sexo=="f" || sexo=="m"))
	{
		sexo=prompt("Reingrese sexo");
	}
	
	cantidadnotas++;
	sumanotas=sumanotas+nota;
	if (nota<notabaja || flag==0)
	{
		notabaja=nota;
		sexonotabaja=sexo;
		flag=1;
	}
	if (sexo=="m" && edad>=18 && nota>=6)
	{
		cantidadvaronesmayoresaprobados++;
	}
	if (edad<masjoven || flag2==0)
	{
		masjoven=edad;
		notajoven=nota;
		sexojoven=sexo;
		flag2=1;
	}
	if (sexo=="f" && primeramujer==0)
	{
		edadprimeramujer=edad;
		notaprimeramujer=nota;
		alert("La edad y la nota de la primera mujer es "+edadprimeramujer+" y la nota es "+notaprimeramujer);
		primeramujer=1;
	}
	if(sexo=="f")
	{
	cantidadmujeres++;
	if (sexo=="f" && cantidadmujeres==0)
	{
		alert("no hubo ninguna mujer.");
	}
	}
	contador++;
	}

	promedionotas=sumanotas/cantidadnotas;
	alert("el promedio de las notas es: "+promedionotas);
	alert("la nota mas baja y el sexo de esa persona es "+notabaja+" y el sexo es "+sexonotabaja);
	alert("La cantidad de varones mayores a 18, que su nota haya sido mayor o igual a 6 es: "+cantidadvaronesmayoresaprobados);
	alert("el sexo y la nota del mas joven es "+sexojoven+" y la nota es "+notajoven);


}