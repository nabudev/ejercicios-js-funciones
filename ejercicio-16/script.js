function diasEnMes(mes, anno) {
    if (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12) {
        return 31;
    }
    else if (mes === 2) {
        if ((anno % 4 == 0 && anno % 100 != 0) || anno % 400 == 0) {
            return 29;
        } else {
            return 28;
        }
    }
    else {
        return 30;
    }
}

var dia = 15;
var mes = 4;
var anno = 2024;
console.log("El mes de " + mes + "/" + anno + " tiene " + diasEnMes(mes, anno) + " días.");
