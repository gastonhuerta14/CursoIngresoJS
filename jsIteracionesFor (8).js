function mostrar()
{
	var numeroingresado;
	var numerosanteriores;
	var esprimo;
	var contador;
	var numerosrecorridos;

	numeroingresado=prompt("ingrese un numero: ");
	numeroingresado=parseInt(numeroingresado);

	for (numerosrecorridos = numeroingresado  ;  numerosrecorridos > 1  ;  numerosrecorridos-- )
		{
			esprimo=0;
		}
		for ( numerosanteriores =2 ; numerosanteriores<numerosrecorridos ; numerosanteriores++ )
			{
			if(numerosrecorridos % numerosanteriores==0)
			{
			esprimo=1;
			break;
			}
		}
		if (esprimo==0)
		{
			console.log(numerosrecorridos+" es un numero primo");
		}
	


/*	for ( numerosanteriores = 2 ; numerosanteriores<numeroingresado ; numerosanteriores++ )
	{
		if(numeroingresado % numerosanteriores==0)
		{
		console.log(numerosanteriores);
		esprimo=1;
		break;
		}

	}
	if (esprimo==0)
	{
		console.log(numeroingresado+" es un numero primo");
	}
	else
	{
		console.log(numeroingresado+" no es un numero primo");	
	}*/


}//FIN DE LA FUNCIÓN