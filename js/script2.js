// const Swal = require('sweetalert2')
/*
let productos = [
    {
        codigo: 1,
        nombre: "Flores",
        descr: "Flores hermosas y hechas con amor",
        precio: 4000.00,
        stock: 10,
        img: "../assets/img/imagenes/flores.jpg"
    },
    {
        codigo: 2,
        nombre: "Bolso de Cristal + Set Matero",
        descr: "Perfecto para el conjunto de mate",
        precio: 15000.00,
        stock: 5,
        img: "../assets/img/imagenes/bolso_cristal_mas_set_matero.jpg"
    },
    {
        codigo: 3,
        nombre: "Almohadón Matero",
        descr: "Ideal para ir al rio y usarlo sobre el cesped o la arena",
        precio: 22000.00,
        stock: 7,
        img: "../assets/img/imagenes/almohadon_matero.jpg"
    },
    {
        codigo: 4,
        nombre: "Bombones Aromáticos x 15",
        descr: "Bombones para darle un nuevo aroma a tu vida",
        precio: 10500.00,
        stock: 50,
        img: "../assets/img/imagenes/bombones_aromaticos.jpg"
    },
    {
        codigo: 5,
        nombre: "Yerbero y Azucarero",
        descr: "Conjunto personalizable para la yerba y el azucar",
        precio: 5500,
        stock: 12,
        img: "../assets/img/imagenes/yerbero_azucarero.jpg"
    },
    {
        codigo: 6,
        nombre: "Souvenires de Velas x 100",
        descr: "Excelente regalo para un casamiento o una fiesta de 15 de tu hija",
        precio: 20000.00,
        stock: 1,
        img: "../assets/img/imagenes/souvenir_velas_x100.jpg"
    },
]
*/

let arrayDeProds = []
let carrito = []
let carritoResumen
let arrayDeProdsCantidad = []

async function productosJSON() {
    try {

        const response = await fetch('../api/data.json')
        datosJson = await response.json()
        // console.log('datosJson:', datosJson)
        datosJson.forEach(element => {
            arrayDeProds.push(element)
        });
    } catch (error) {
        console.log('Error: ', error)
    }
}

// function resumenCarrito() {

//     let listaProdsJson = JSON.parse(localStorage.getItem("carrito"))
//     console.log('listaProdsJson: ', listaProdsJson)
//     let precioTotal = listaProdsJson.map(item => item.precio).reduce((acu, valor) => acu + valor, 0);
//     console.log('precioTotal: ', precioTotal)

//     let cadenaTextoProds = ''
//     listaProdsJson.forEach(prod => {
//         cadenaTextoProds += `${prod.nombre} - Cantidad: ${prod.cantidad} \n <br>`
//     })

//     console.log(cadenaTextoProds)

//     Swal.fire({
//         title: "Carrito de compras",
//         html: `
//         Verificar antes de continuar con la compra <br>
//         ${cadenaTextoProds}
//         <br>
//         Total: $${precioTotal}`,
//         showCloseButton: true,
//         showCancelButton: true,
//         focusConfirm: false,
//         confirmButtonText: `Confirmar`,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         cancelButtonText: "Cancelar"
//     }).then((result) => {
//         if (result.isConfirmed) {
//             Swal.fire({
//                 title: "¡Compra realizada con exito!",
//                 text: "En los proximos dias te estaremos contactando para organizar la entrega",
//                 icon: "success"
//             });
//         }
//     });
// }

async function itemAgregado(prodSelect) {
    const productoEnCarrito = carrito.find(item => item.codigo === prodSelect.codigo);
    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        carrito.push({ cantidad: 1, ...prodSelect });
    }
    console.log('itemAgregado carrito:',carrito)
}


async function actualizarBotones(prodSelect) {

    const botonAgregar = document.getElementById(`${prodSelect.codigo}`)
    if (prodSelect.stock > 0){
        botonAgregar.disabled = false
    } else {
        botonAgregar.disabled = true
    }

    const botonQuitar = document.getElementById(`${prodSelect.codigo + 6}`);
    const productoEnCarrito = carrito.find(item => item.codigo === prodSelect.codigo)
    if (productoEnCarrito && productoEnCarrito.cantidad > 0){
        botonQuitar.disabled = false
    } else {
        botonQuitar.disabled = true
    }
}

async function agregarCarrito() {
    try {
        let botonAgregar = document.querySelectorAll('.boton-agregar')
        await botonAgregar.forEach(boton => {
            boton.addEventListener('click', async () => {
                const idProd = parseInt(boton.getAttribute('data-id'));
                const prodSelect = arrayDeProds.find(item => item.codigo === idProd)
                // console.log('Producto seleccionado: ',prodSelect)

                if (prodSelect && prodSelect.stock > 0) {
                    await itemAgregado(prodSelect)
                    prodSelect.stock -= 1

                    Toastify({
                        text: "¡Producto agregado!",
                        duration: 2000,
                        gravity: "bottom",
                        position: "right",
                        stopOnFocus: true,
                        style: {
                            color: 'black',
                            background: "linear-gradient(90deg, rgba(255,199,41,1) 18%, rgba(255,248,0,1) 76%)",
                        },
                        className: "claseToastify",
                        onClick: function () { }
                    }).showToast();
                }
                await actualizarBotones(prodSelect)

                /* Swal.fire({
                    title: "<strong>Lo siento.<br>Esto se va a quitar</strong>",
                    icon: "warning",
                    html: `Elige otro producto.<br> ! Pronto tendremos mas ¡`,
                    showCloseButton: true,
                    focusConfirm: false,
                    confirmButtonText: `Aceptar`,
                }); */

                // let stringifyProds = JSON.stringify(arrayDeProdsCantidad)
                //console.log(stringifyProds)
                // console.log('Convertido: ', stringifyProds)
                // localStorage.setItem("carrito", stringifyProds)
            })
        })
    } catch (err) {
        console.log('Error al agregar producto: ', err)
    };
};

async function quitarCarrito() {
    let botonQuitar = document.querySelectorAll('.boton-quitar');
    // console.log('botonQuitar',botonQuitar)
    await botonQuitar.forEach(boton => {
        boton.addEventListener('click', async  () => {
            const idProdBoton = parseInt(boton.getAttribute('data-id'))
            const productoEnCarrito = carrito.find(item => item.codigo === idProdBoton)
            // console.log('productoEnCarrito boton quitar: ',productoEnCarrito)
            if (productoEnCarrito && productoEnCarrito.cantidad > 0){
                productoEnCarrito.cantidad--
                console.log('productoEnCarrito stock -1: ',productoEnCarrito)

                if(productoEnCarrito.cantidad === 0){
                    carrito = carrito.filter(item => item.codigo !==productoEnCarrito.codigo)
                    console.log('quitarCarrito: ', carrito)
                }
                
                // arrayDeProds[productoEnCarrito.codigo].stock++
                const itemDeArrayDeProds = arrayDeProds.find(elem => elem.codigo == productoEnCarrito.codigo)
                itemDeArrayDeProds.stock++
                
                await actualizarBotones(productoEnCarrito)
            }

        })
    })

}

async function main() {

    await productosJSON()

    // console.log('arrayDeProds: ',arrayDeProds)
    let sectionCards = document.getElementById('sectionCards')

    arrayDeProds.forEach(item => {
        // console.log(item)
        sectionCards.innerHTML += `<div class="pt-2 pb-2">
    <div class="container cards-container">
        <div class="cards-item">
            <div class="card-descripcion">
                <h2>${item.nombre}</h2>
                <p>${item.descr}</p>
            </div>
            <img src=${item.img}>
            <div class="boton-container d-flex">
                <button id="${item.codigo}" class="boton-agregar" data-id="${item.codigo}"> + </button>
                <button id="${item.codigo + 6}" class="boton-quitar" data-id="${item.codigo}" disabled> - </button>
                <div class="boton-precio d-flex">
                    <p>$${item.precio}</p>
                </div>
            </div>
        </div>
    </div>
</div>`
    });

    await agregarCarrito()
    await quitarCarrito()

    let sectionConfirmarCompra = document.createElement('section');
    sectionConfirmarCompra.id = 'idConfirmCompra';
    sectionConfirmarCompra.classList.add('boton-confirmar-compra');
    sectionConfirmarCompra.innerHTML =
        `<button id="idBotonCarrito" class="boton-carrito">
        <img id="idCarritoGif" src="../assets/img/gifs/carritoEstatico.jpg" alt="">
        <div id="idCarritoGif2">Ver carrito</div>
    </button>`
    let main = document.getElementById('idMain')
    main.append(sectionConfirmarCompra)

    let img = document.getElementById('idCarritoGif')
    let img2 = document.getElementById('idCarritoGif2')
    let duracionGif = 1000
    img2.addEventListener('mouseenter', () => {
        img.src = '../assets/img/gifs/carrito.gif'
        setTimeout(() => {
            img.src = '../assets/img/gifs/carritoEstatico.jpg';
        }, duracionGif);
    })

    let botonCarrito = document.getElementById('idBotonCarrito')
    botonCarrito.addEventListener('click', () => {
        resumenCarrito()
    })
}
main()
