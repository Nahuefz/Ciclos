// Adivinador de numeros utilizando ciclo while

alert("Adivina el numero del 1 al 5")
let repetir = false
let numero = Math.floor(Math.random() * (5 - 1) + 1);
while(repetir == false) {
    let respuesta = parseInt(prompt("Ingresa un numero: "))
    if(numero != respuesta){
        alert("Perdiste")
    } else {
        alert("Ganaste")
        repetir = true
    }
}

// Formador de palabras utilizando ciclo for

let palabra = ""
let longitud = parseInt(prompt("Ingrese longitud de la palabra"))

for (let index = 0; index < longitud; index++) {
    palabra = palabra + prompt("Ingrese una letra");
}
alert(`La palabra generada es ${palabra}`)


