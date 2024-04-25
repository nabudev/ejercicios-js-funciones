function ultimoDiaDelMes(mes, año) {
    return new Date(año, mes, 0).getDate();
}

var ultimoDia = ultimoDiaDelMes(4, 2024);
console.log("El último día del mes es: " + ultimoDia);
