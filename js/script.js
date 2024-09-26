/**
 * Ecommerce de una tienda de regalos
 * Se venden productos del estilo decoración de hogar, productos de belleza, perfumes, manteles, souvenires, etc.
 * Instagram de la página: margarita.decoyeventos
 * La idea es que el cliente visualice cada producto en una card y los vaya agregando al carrito
 * Para la primera entrega, se realiza todo por consola
 */


let opcion = 0
let total = 0
let carrito = ""
let itemProd1 = "Set Matero"
let itemProd2 = "Mantel para mesa"
let itemProd3 = "Perfume para el cuerpo"
let itemProd4 = "Jabones ecológicos"
let itemProd5 = "Souvenires personalizados x100"
let itemProd6 = "Ramo para novia"
let stockProd1 = 10
let stockProd2 = 10
let stockProd3 = 10
let stockProd4 = 10
let stockProd5 = 10
let stockProd6 = 10
const idProd1 = 1
const idProd2 = 2
const idProd3 = 3
const idProd4 = 4
const idProd5 = 5
const idProd6 = 6

alert("¡Bienvenido a Margarita Regalos!")

while (opcion != 7) {
    opcion = parseInt(prompt(`Elige los productos que quieras comprar

Productos disponible:
Op. 1 - Set Matero - $7600
Op. 2 - Mantel para mesa - $3250
Op. 3 - Perfume para el cuerpo - $4700
Op. 4 - Jabones ecológicos - $5460
Op. 5 - Souvenires personalizados x100 - $6000
Op. 6 - Ramo para novia - $15000
Op. 7 - Finalizar`))

    switch (opcion) {
        case 1:
            if (stockProd1 > 0) {
                carrito += itemProd1 + "\n"
                stockProd1 -= 1
                console.log(carrito)
            } else {
                alert("No hay mas stock de ese producto, elige otro")
            }
            break
        case 2:
            if (stockProd2 > 0) {
                carrito += itemProd2 + "\n"
                stockProd2 -= 1
                console.log(carrito)
            } else {
                alert("No hay mas stock de ese producto, elige otro")
            }
            break
        case 3:
            break
        case 4:
            break
        case 5:
            break
        case 6:
            break
        case 7:
            break;
        default:
            alert("Opción incorrecta")
    }
}