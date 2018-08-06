
function mostrar()
{
	var base;
	var altura;
	var perimetro;
	var area;

	base=parseInt(prompt("ingrese base"));
	altura=parseInt(prompt("ingrese altura"));


	area=(base*altura)/2;
	perimetro=base*3;

	alert("el perimetro es: "+perimetro);
	alert("el area es: "+area);
}
