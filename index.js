let i = 2
const vaporizador = 10000, liquidos = 3000, repuestos = 2500

function agregar() {
    let tienda = prompt("¿ Qué articulo desea comprar ?\n 1: Vaporizadores\n 2: Liquidos o sales \n 3: Repuestos \n 4: Ir a la caja, para poder pagar")
    let total = 0

    do {
        switch (tienda) {
            case "1":
                let numVaporizador = Number(prompt(" El precio de los vaporizadores es de: $10.000 \n Ingrese la cantidad de vaporizadores que desea:"))
                for (let i = 0; i < numVaporizador; i++) {
                    total += vaporizador
                }
                break;
            case "2":
                let numLiquidos = Number(prompt(" El precio de cada liquido es de: $3.000 \n Ingrese la cantidad de liquidos que desea:"))
                for (let i = 0; i < numLiquidos; i++) {
                    total += liquidos
                }
                break;
            case "3":
                let numRepuestos = Number(prompt("El precio de cada cartucho de repuesto es de: $2.500 \n Ingrese la cantidad de cartuchos que desea:"))
                for (let i = 0; i < numRepuestos; i++) {
                    total += repuestos
                }
                break;
            case "4":
                alert("Gracias por su compra.")
                break;
            default:
                alert("Por favor, seleccione una opción válida.")
                break;
        }
        if (tienda !== "4") {
            tienda = prompt("¿Desea seguir comprando?\n 1: Vaporizadores \n 2: Liquidos o sales \n 3: Repuestos \n 4: Ir a caja para concluir pago")
        }
    } while (tienda !== "4")

    return total
}

do {
    let usuario = prompt("Ingrese su nombre de usuario:")
    let contrasena = prompt("Ingrese su contraseña:")
    //usuario = usuario.toUpperCase()
    //contrasena = contrasena.toUpperCase()

    if (usuario === "cliente" && contrasena === "123456") {
        i = -1
        alert(" Bienvenido a la tienda online ")

        let total = 0
        let num
        do {
            num = Number(prompt(" Seleccione una opción:\n 1: Agregar al carrito\n 2: Ver total\n 3: Comprar\n 4:Imprimir factura con IVA \n 5: Salir"))
            switch (num) {
                case 1:
                    total += agregar()
                    break;
                case 2:
                    alert(" Su total es: " + total + " pesos ")
                    break;
                case 3:
                    alert(" Gracias por su compra")

                    break;
                case 4:
                    alert(" Su factura \n Precio total neto " + total + " \n Precio total a pagar con recargo de IVA 21 %" + (total * 1.21))
                    total = 0
                    break;
                case 5:
                    alert(" Hasta luego, gracias por su compra ")
                    break;
                default:
                    alert(" Por favor, seleccione una opción valida.")
                    break;
            }
        } while (num !== 5)

    } else {
        i = i - 1
        alert("Error de inicio. Revise su usuario o contraseña. Le quedan " + (i + 1) + " intentos")
        if (i === -1) {
            alert("Muchos intentos fallidos. Intente nuevamente en unos minutos.")
        }
    }
} while (i >= 0)