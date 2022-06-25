function calculoSemPlano ( minutos, tarifa ) {
    return minutos * tarifa     
}

function calculoComPlano ( minutos, tarifa, plano ) {
    var valor = 0;
    valor.toFixed(2);
    if ( minutos <= plano ) {
        return valor; 
    } else {
       var debito = minutos - plano; 
       return calculoSemPlano( debito, tarifa ) + calculoSemPlano( debito, tarifa ) * ( 10/100 );
    } 
}

function calcularTarifa ( minutos, tarifa, plano ) {
    if ( plano ) {
        return calculoComPlano( minutos, tarifa, plano )
    } else {
        return calculoSemPlano( minutos, tarifa );
    }
}

function submit () {
    var planoSelect = document.getElementById("plano");
    var plano = planoSelect.options[planoSelect.selectedIndex].value;
    var tarifaSelect = document.getElementById("tarifa");
    var tarifa = tarifaSelect.options[tarifaSelect.selectedIndex].value;
    var minutos = document.getElementById("minutos").value;7

    const resultadoPlano = calcularTarifa(minutos, tarifa, plano);   
    document.getElementById("resultado").innerHTML = "Com Plano: R$ " + resultadoPlano 

    const resultadoSemPlano = calculoSemPlano(minutos, tarifa);
    document.getElementById("semPlano").innerHTML = "Sem Plano: R$ " + resultadoSemPlano 

    
}
