var numero1 = document.getElementById("numero_1");
var diferencia = 0;

function calcular()
{
	var  valornumero1=numero1.value;
	var val_num1=parseFloat(valornumero1);
	
	if(valornumero1 == "" )
	{

		salida.innerHTML = "--";
		document.getElementById("mensajes").innerHTML = '<div ><p>No se ingreso ningun numero</p></div>';
	}
	else if (val_num1 > 21 )
	{
		diferencia =(( parseFloat(numero1.value)-21)*2);
		var valorDiferencia= parseFloat(diferencia);
		salida.innerHTML = valorDiferencia.toFixed(2);
		document.getElementById("mensajes").innerHTML = '<div><p>Numero mayor, la diferencia sera el doble</p></div>';
	
	}
	else if (val_num1 < 21 )
	{
		diferencia =21- parseFloat(numero1.value);
		var valorDiferencia= parseFloat(diferencia);
		salida.innerHTML = valorDiferencia.toFixed(2);
		document.getElementById("mensajes").innerHTML = '<div><p>Numero menor a 21</p></div>';
	}
	else{
		salida.innerHTML = "--";
		document.getElementById("mensajes").innerHTML = '<div class="alert_num alert-danger"><p>No es un Numero</p></div>';
	
	}

}