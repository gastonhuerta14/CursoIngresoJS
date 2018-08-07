function mostrar()
{
	var nota;
  	var notadesaprobar;
   	var notaraspando;

   	nota=prompt("ingrese su nota");
  	switch (nota)
  	{
   		case"0":case"1":case"2":case"3":alert("la proxima se puede");
   		break;
   		case"4":case"5":case"6":alert("raspando");
   		if ("4" || "5")
   		{
   		alert("debes preocuparte mas");
   		}
   		break;
   		case"7":case"8":case"9":case"10":alert("se aprobo");
   		if ("9" || "10")
   		{
   		alert("muy bien");
   		}
   		break;
   		
  	}
}
