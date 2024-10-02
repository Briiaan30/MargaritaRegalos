
let opcion = 0
let total = 0
let carrito = ''
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

function agregarProductos() {

    opcion = parseInt(prompt(`Elige los productos que quieras comprar

            Productos disponible:
            Op. 1 - Set Matero - $7600.99
            Op. 2 - Mantel para mesa - $3250
            Op. 3 - Perfume para el cuerpo - $4700.42
            Op. 4 - Jabones ecológicos - $5460.55
            Op. 5 - Souvenires personalizados x100 - $6000
            Op. 6 - Ramo para novia - $15000
            Op. 7 - Finalizar`))

    while (opcion != 7) {

        switch (opcion) {
            case 1:
                if (stockProd1 > 0) {
                    carrito += itemProd1 + "\n"
                    total += 7600.99
                    stockProd1 -= 1
                    console.log(carrito)
                } else {
                    console.log("No hay mas stock de ese producto, elige otro")
                }
                break
            case 2:
                if (stockProd2 > 0) {
                    carrito += itemProd2 + "\n"
                    total += 3250
                    stockProd2 -= 1
                    console.log(carrito)
                } else {
                    console.log("No hay mas stock de ese producto, elige otro")
                }
                break
            case 3:
                if (stockProd3 > 0) {
                    carrito += itemProd3 + "\n"
                    total += 4700.42
                    stockProd3 -= 1
                    console.log(carrito)
                } else {
                    console.log("No hay mas stock de ese producto, elige otro")
                }
                break
            case 4:
                if (stockProd4 > 0) {
                    carrito += itemProd4 + "\n"
                    total += 5460.55
                    stockProd4 -= 1
                    console.log(carrito)
                } else {
                    console.log("No hay mas stock de ese producto, elige otro")
                }
                break
            case 5:
                if (stockProd5 > 0) {
                    carrito += itemProd5 + "\n"
                    total += 6000
                    stockProd5 -= 1
                    console.log(carrito)
                } else {
                    console.log("No hay mas stock de ese producto, elige otro")
                }
                break
            case 6:
                if (stockProd6 > 0) {
                    carrito += itemProd6 + "\n"
                    total += 15000
                    stockProd6 -= 1
                    console.log(carrito)
                } else {
                    console.log("No hay mas stock de ese producto, elige otro")
                }
                break
            case 7:
                break;
            default:
                console.log("Opción incorrecta")
        }

        opcion = parseInt(prompt(`Elige otro producto para agregar al carrito

            Productos disponible:
            Op. 1 - Set Matero - $7600.99
            Op. 2 - Mantel para mesa - $3250
            Op. 3 - Perfume para el cuerpo - $4700.42
            Op. 4 - Jabones ecológicos - $5460.55
            Op. 5 - Souvenires personalizados x100 - $6000
            Op. 6 - Ramo para novia - $15000
            Op. 7 - Finalizar`))

    }
    console.log('Productos: \n' + carrito + '\nTotal: ' + total)
    return [carrito, total]
}

function confirmCompra(prodElegidos, totalProd) {
    if (prodElegidos != '') {
        alert(`Productos elegidos

`+prodElegidos+`
Total: $`+ parseFloat(totalProd).toFixed(2) + `
¿Desea confirmar la compra?`)
    } else {
        console.log("No elegiste productos. Presione F5 para volver a comprar")
    }
}

console.log("¡Bienvenido a Margarita Regalos!")
let [prodElegidos, totalProd] = (agregarProductos())
confirmCompra(prodElegidos, totalProd)
console.log('¡Gracias por elegirnos!')

