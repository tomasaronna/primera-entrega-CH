let jugada
let tiradaNPC
let ganadas = 0
let perdidas = 0

function elegir() {
    let opciones = Math.floor(Math.random() * 3)
    if (opciones == 0) {
        tiradaNPC = "piedra"
    } else if (opciones == 1) {
        tiradaNPC = "papel"
    } else {
        tiradaNPC = "tijera"
    }
    console.log("La máquina eligió: " + tiradaNPC)
}

function reiniciarJuego(){
    ganadas = 0
    perdidas= 0
}

function JUGAR() {
    while (true) {
        do {
            let jugada = prompt("Elige piedra, papel o tijera").toLocaleLowerCase()
            if ((jugada != "piedra") && (jugada != "papel") && (jugada != "tijera")) {
                console.log("Ingrese una opción válida")
            } else {
                elegir()
                console.log("Elegiste: " + jugada)
                if (tiradaNPC == jugada) {
                    console.log("Empate")
                } else if ((tiradaNPC == "piedra" && jugada == "papel") || (tiradaNPC == "papel" && jugada == "tijera") || (tiradaNPC == "tijera" && jugada == "piedra")) {
                    console.log("Ganaste la ronda")
                    ganadas++
                    console.log("Llevas " + ganadas + " ganadas y " + perdidas + " perdidas")
                } else {
                    console.log("Perdiste la ronda")
                    perdidas++
                    console.log("Llevas " + ganadas + " ganadas y " + perdidas + " perdidas")
                }
            }
        } while ((ganadas < 3) && (perdidas < 3))
        if (ganadas == 3) {
            console.log("Felicitaciones, ganaste!")
        } else if (perdidas == 3) {
            console.log("Al lobby, perdiste")
        }
        if(confirm("desea volver a jugar?")){
            reiniciarJuego()
        } else{
            break
        }
    }
}
JUGAR()

