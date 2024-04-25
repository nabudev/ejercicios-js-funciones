function diaAnterior(dia, mes, año) {
    var fecha = new Date(año, mes - 1, dia);
    fecha.setDate(fecha.getDate() - 1);
    var diaAnterior = fecha.getDate();
    var mesAnterior = fecha.getMonth() + 1;
    var añoAnterior = fecha.getFullYear();
    return [diaAnterior, mesAnterior, añoAnterior];
}

var resultado = diaAnterior(25, 4, 2024);
console.log("El día anterior es: " + resultado[0] + "/" + resultado[1] + "/" + resultado[2]);