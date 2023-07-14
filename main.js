function calcularPrestamo() {
    let cuotas = parseInt(prompt("Tu prestamo facil puedes elegir en cuantas cuotas pagar 12, 24, 36 o 48 cuotas con interés"));

    const calcularInteres = (valor, porcentaje) => {
        return (valor * porcentaje) / 100;
    };

    const calcularCuotas = (prestamo, cuotas) => {
        return prestamo / cuotas;
    };

    if (cuotas === 12 || cuotas === 24 || cuotas === 36 || cuotas === 48) {
        let valor = parseInt(prompt("Ingrese el valor en pesos del préstamo a solicitar:"));
        if (cuotas === 12) {
        let porcentaje = 7;
        let interes = calcularInteres(valor, porcentaje);
        let totalPrestamo = valor + interes;
        let valorCuota = calcularCuotas(totalPrestamo, cuotas);
        alert("El valor de cada cuota sería de: " + valorCuota + " pesos a pagar en 12 meses");
        } else if (cuotas === 24) {
        let porcentaje = 12;
        let interes = calcularInteres(valor, porcentaje);
        let totalPrestamo = valor + interes;
        let valorCuota = calcularCuotas(totalPrestamo, cuotas);
        alert("El valor de cada cuota sería de: " + valorCuota + " pesos a pagar en 24 meses");
        } else if (cuotas === 36) {
        let porcentaje = 15;
        let interes = calcularInteres(valor, porcentaje);
        let totalPrestamo = valor + interes;
        let valorCuota = calcularCuotas(totalPrestamo, cuotas);
        alert("El valor de cada cuota sería de: " + valorCuota + " pesos a pagar en 36 meses");
        } else if (cuotas === 48) {
        let porcentaje = 20;
        let interes = calcularInteres(valor, porcentaje);
        let totalPrestamo = valor + interes;
        let valorCuota = calcularCuotas(totalPrestamo, cuotas);
        alert("El valor de cada cuota sería de: " + valorCuota + " pesos a pagar en 48 meses");
        }
    } else {
        alert("Tienes que elegir una de las 4 opciones de cuotas: 12, 24, 36 o 48");
    }
}

do {
    calcularPrestamo();
} while (confirm("¿Quieres calcular otro préstamo?"));

alert("Gracias por preferir tu prestamo facil");
