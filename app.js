// Funciones
document.write("Funciones")

function mensaje(){
    console.log("Saludo")
}

mensaje()

// numero % 2 == 0

let arrayNum = [12, 33, 21, 56, 4, 33, 27, 42, 11, 68]

// crea un programa que permita
// la cantidad de pares e impares que tiene
// el arrayNum
// utilice una funcion que retorne si en
// numero es par o no

function funcion_pi(variable1){
    let par_ = 0 // inicio de contador para pares
    let impar_ = 0 // inicio de contador para impares

    for(let arrayNum of variable1){
        if (arrayNum % 2 == 0){ // si el resto es divisible por 2 y da 0
            console.log('si')
            par_ += 1 // contador par +1
            continue
        }

        console.log('no')
        impar_ += 1 // contado impar +1
    }

    console.log(`cantidad de pares: ${par_}`) // Uso de `` (format en python) y escribe cantidad de pares
    console.log(`cantidad de impares: ${impar_}`) // Uso de `` (format en python) y escribe cantidad de impares
}

funcion_pi(arrayNum)