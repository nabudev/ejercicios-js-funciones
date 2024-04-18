function PromedioNotas(){
    var nota;
    var promedio;
    var cantidad=0;
    var suma=0;
    while(nota!==-1){
        if(nota!==-1){
            nota= parseInt(prompt("Ingrese la nota (o -1 para terminar): " ));
            suma+= nota;
            cantidad++;
        }
    }

    if(cantidad==0){
        return "No se ingresaron notas: ";
    }
    else{
        promedio= suma/cantidad;
        alert("EL promedio es: " +promedio);
    }
}

alert(PromedioNotas());

