let carrito = []


class Producto {
    constructor(codigo, nombre, precio, stock, img) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.img = img;
    }
}

let productos = []

productos.push(new Producto(1, "Flores", 4000.00, 10, "../assets/img/imagenes/flores.jpg"))
productos.push(new Producto(2, "Bolso de Cristal + Set Matero", 15000.00, 5, "../assets/img/imagenes/bolso_cristal_mas_set_matero.jpg"))
productos.push(new Producto(3, "Almohadón Matero", 22000.00, 7, "../assets/img/imagenes/almohadon_matero.jpg"))
productos.push(new Producto(4, "Bombones aromáticos x 15", 10500.00, 50, "../assets/img/imagenes/bombones_aromaticos.jpg"))
productos.push(new Producto(5, "Yerbero y azucarero", 5500, 12, "../assets/img/imagenes/yerbero_azucarero.jpg"))
productos.push(new Producto(6, "Souvenires de velas x 100", 20000.00, 0, "../assets/img/imagenes/souvenir_velas_x100.jpg"))

//console.log(productos)




function sumaCompraTotal(carrito) {
    let arr = carrito.map((num) => num.precio).reduce((acu, valor) => acu + valor, 0);
    //console.log(arr)
    return arr;
}

function contarCantidad(carrito) {
    let resumen = {};

    carrito.forEach((item) => {
        if (resumen[item.codigo]) {
            resumen[item.codigo].cantidad++;
        } else {
            resumen[item.codigo] = { nombre: item.nombre, cantidad: 1 };
        }
    });
    return resumen
}

function confirmarCompra(stringNombres) {
    let confirmar = ''
    while (!(confirmar == null) && confirmar != 'no' && confirmar != 'si') {
        confirmar = prompt('Productos elegidos:\n'
            + stringNombres
            + '\nTotal: $'
            + total
            + '\n ¿Desea confirmar la compra? (Si / No)')
        console.log(confirmar)
        if (confirmar === null || confirmar.toLowerCase() === 'no') {
            alert('Puede presionar F5 para volver a realizar la compra')
        } else if (confirmar == '' || confirmar.toLowerCase() === 'si') {
            alert('¡Gracias por comprar en Margarita Deco y Eventos!\nEsperamos que regreses pronto!')
            break
        } else {
            alert('Confirmar o rechazar con el boton aceptar o cancelar.\nTambién puede escribir "Si" o "No"')
        }
    }
}

let total = sumaCompraTotal(carrito)
let cantidadProd = contarCantidad(carrito)

let stringNombres = ''
for (let codigo in cantidadProd) {
    stringNombres += cantidadProd[codigo].nombre + ' x' + cantidadProd[codigo].cantidad + '\n'
}

confirmarCompra(stringNombres)

/*
function agregarProducto(op) {
    switch (op) {
        case 1:
            if (prod1.stock != 0) {
                prod1.stock -= 1;
                return prod1;
            } else {
                alert('No hay más stock de ese producto.')
                return false
            }
        case 2:
            if (prod2.stock != 0) {
                prod2.stock -= 1;
                return prod2;
            } else {
                alert('No hay más stock de ese producto.')
                return false
            }
        case 3:
            if (prod3.stock != 0) {
                prod3.stock -= 1;
                return prod3;
            } else {
                alert('No hay más stock de ese producto.')
                return false
            }
        case 4:
            if (prod4.stock != 0) {
                prod4.stock -= 1;
                return prod4;
            } else {
                alert('No hay más stock de ese producto.')
                return false
            }
        case 5:
            if (prod5.stock != 0) {
                prod5.stock -= 1;
                return prod5;
            } else {
                alert('No hay más stock de ese producto.')
                return false
            }
        case 6:
            if (prod6.stock != 0) {
                prod6.stock -= 1;
                return prod6;
            } else {
                alert('No hay más stock de ese producto.')
                return false
            }
    }
}*/

function agregarProducto(op){
    const alCarrito = productos.find((obj) => {
        obj.codigo == op
    })
    
    return alCarrito
}

function main() {
    alert('A continuación elija los productos que desea comprar')
    let op = 0
    while (op != 7 && !isNaN(op)) {
        op = parseInt(prompt(`Productos: 
    1. ${productos[0].nombre} - $ ${productos[0].precio}
    2. ${productos[1].nombre} - $ ${productos[1].precio}
    3. ${productos[2].nombre} - $ ${productos[2].precio}
    4. ${productos[3].nombre} - $ ${productos[3].precio}
    5. ${productos[4].nombre} - $ ${productos[4].precio}
    6. ${productos[5].nombre} - $ ${productos[5].precio}
    7. Finalizar compra
    `));

        if (op >= 1 && op < 7) {
            carrito.push(agregarProducto(op))
            //console.log(carrito)
            alert('Producto agregado - ' + carrito[carrito.length - 1].nombre)
        }
    }
}

// Inicio
main()