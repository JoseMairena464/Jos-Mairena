EJERCICIO calculadora de interés

*/Pidele al usuario que ingrese una cantidad de dinero inicial, una taza de interés anual y un plazo en años. Luego, usa un ciclo while para calcular el saldo después de cada año, teniendo en cuenta el interés compuesto. Muestra el saldo final al usuario 
	

let dineroinicial = Number(prompt('ingrese la cantidad de dinero inicial'))
let tasaInteres = Number(prompt('ingrese la tasa de interes anual'))
let plazoaños = Number(prompt('ingrese el numero de plazo en años'))

let año = 0
let saldototal = dineroinicial

while(año < plazoaños){
    saldototal += saldototal * tasaInteres
    año++
}

alert(`el saldo final despues de ${año} años es: ${saldototal}`)