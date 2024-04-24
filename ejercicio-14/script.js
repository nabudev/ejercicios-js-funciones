function diasEnMes(numeroMes) {
    switch(numeroMes) {
        case 1: // Enero
        case 3: // Marzo
        case 5: // Mayo
        case 7: // Julio
        case 8: // Agosto
        case 10: // Octubre
        case 12: // Diciembre
            return 31;
        case 4: // Abril
        case 6: // Junio
        case 9: // Septiembre
        case 11: // Noviembre
            return 30;
        case 2: // Febrero
            return 28;
        default:
            return "Mes no válido";
    }
}


console.log(diasEnMes(2));
console.log(diasEnMes(4)); 
console.log(diasEnMes(9)); 
console.log(diasEnMes(13)); 
