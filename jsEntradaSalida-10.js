/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe
    var Resultado
    importe=document.getElementById('importe').value;
    Resultado=parseInt('75')*parseInt(importe)/parseInt('100');
    document.getElementById('resultado').value=Resultado;
}
