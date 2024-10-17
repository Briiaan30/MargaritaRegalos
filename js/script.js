
class Producto {
    constructor(codigo, nombre, precio, stock, img ) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.img = img;
    }
}

const prod1 = new Producto(1,"Flores",4000.00,10,"../assets/img/imagenes/flores.jpg")
const prod2 = new Producto(2,"Bolso de Cristal + Set Matero",15000.00,5,"../assets/img/imagenes/bolso_cristal_mas_set_matero.jpg")
const prod3 = new Producto(3,"Almohadón Matero",22000.00,7,"../assets/img/imagenes/almohadon_matero.jpg")
const prod4 = new Producto(4,"Bombones aromáticos x 15",10500.00,50,"../assets/img/imagenes/bombones_aromaticos.jpg")
const prod5 = new Producto(5,"Yerbero y azucarero",5500,12,"../assets/img/imagenes/yerbero_azucarero.jpg")
const prod6 = new Producto(6,"Souvenires de velas x 100",20000.00,2,"../assets/img/imagenes/souvenir_velas_x100.jpg")
/*
let main = document.getElementById("princ")
let img = document.createElement("div")
img.innerHTML =
`<img src="${prod1.img}" alt="${prod1.nombre}">
<img src="${prod2.img}" alt="${prod2.nombre}">
<img src="${prod3.img}" alt="${prod3.nombre}">
<img src="${prod4.img}" alt="${prod4.nombre}">
<img src="${prod5.img}" alt="${prod5.nombre}">
<img src="${prod6.img}" alt="${prod6.nombre}">`
main.appendChild(img)
*/
/*
let img = document.createElement("div")
img.innerHTML = `
<img src="${prod1.img}" alt="${prod1.nombre}">`
document.body.appendChild(img);
*/
/*
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
let stockProd2 = 5
let stockProd3 = 1
let stockProd4 = 16
let stockProd5 = 8
let stockProd6 = 3

function agregarProductos() {

    opcion = parseInt(prompt(`Elige los productos que quieras comprar

            Productos disponible:
            Op. 1 - Set Matero - $7600.99
            Op. 2 - Mantel para mesa - $3250
            Op. 3 - Perfume para el cuerpo - $4700.42
            Op. 4 - Jabones ecológicos - $5460.55
            Op. 5 - Souvenires personalizados x100 - $6100
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
                    total += 6100
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
*/
