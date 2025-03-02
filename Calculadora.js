let opcionSeleccionada = prompt(`
    Escoja una opción para continuar
        0. Salir
        1. Cálculo de promedio de 4 notas
        2. Cálculo de área de un rectángulo
        3. Suma de dos números
        4. Retorno de nombre del día según número de día
`)
while (opcionSeleccionada != "0") {
    
    if (opcionSeleccionada == "1") {
        let nota1 = prompt("Ingrese la primera nota:")
        let nota2 = prompt("Ingrese la segunda nota:")
        let nota3 = prompt("Ingrese la tercera nota:")
        let nota4 = prompt("Ingrese la cuarta nota:")
        let promedio = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4
        alert("El promedio es: " + promedio)
    } 
    
    else if (opcionSeleccionada == "2") {
        let largo = prompt("Ingrese el largo del rectángulo:")
        let ancho = prompt("Ingrese el ancho del rectángulo:")
        let area = parseFloat(largo) * parseFloat(ancho)
        alert("El área del rectángulo es: " + area)
    } 
    
    else if (opcionSeleccionada == "3") {
        let num1 = prompt("Ingrese el primer número:")
        let num2 = prompt("Ingrese el segundo número:")
        let suma = parseFloat(num1) + parseFloat(num2)
        alert("La suma es: " + suma)
    } 
    
    else if (opcionSeleccionada == "4") {
        let diaNumero = prompt("Ingrese un número del 1 al 7:")
        if (diaNumero == "1") {
            alert("Es Lunes")
        } else if (diaNumero == "2") {
            alert("Es Martes")
        } else if (diaNumero == "3") {
            alert("Es Miercoles")
        } else if (diaNumero == "4") {
            alert("Es Jueves")
        } else if (diaNumero == "5") {
            alert("Es Viernes")
        } else if (diaNumero == "6") {
            alert("Es Sabado")
        } else if (diaNumero == "7") {
            alert("Es Domingo")
        } else {
            alert("Número inválido")
        }
    } 
    
    else {
        alert("Opción incorrecta")
    }

   opcionSeleccionada = prompt(`
        Escoja una opción para continuar
            0. Salir
            1. Cálculo de promedio de 4 notas
            2. Cálculo de área de un rectángulo
            3. Suma de dos números
            4. Retorno de nombre del día según número de día
    `)
}

alert("Adiós!")