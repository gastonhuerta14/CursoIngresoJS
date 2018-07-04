/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var Sueldo
    var Resultado
    Sueldo=document.getElementById('sueldo').value;
    Resultado=parseInt('110')*parseInt(Sueldo)/parseInt('100');
    document.getElementById('resultado').value=Resultado;

}
