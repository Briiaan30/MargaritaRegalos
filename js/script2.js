// const Swal = require('sweetalert2')

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

let carrito = []
let carritoResumen

/*
 let idItem = document.getElementById('idItemPrecio')
 console.log(idItem)
 console.log(idItem.innerHTML)
 console.log(idItem.innerText)

 idItem.innerText = "holas"
 console.log(idItem.innerText)
*/

function contarProdCarrito(carrito){
    let resumen = {}
    carrito.forEach((item) => {
        if (resumen[item.codigo]) {
            resumen[item.codigo].cantidad++;
        } else {
            resumen[item.codigo] = {cantidad: 1, ...item}
        }
    });
    return resumen
}

function agregarCarrito() {

    let botonAgregar = document.querySelectorAll('.boton-agregar')
    botonAgregar.forEach(boton => {
        boton.addEventListener('click', () => {
            const idProd = parseInt(boton.getAttribute('data-id'));
            const prodSelect = productos.find(item => item.codigo === idProd)
            if (prodSelect.stock > 0) {
                carrito.push(prodSelect)
                prodSelect.stock -= 1
                console.log(`Stock: ${prodSelect.stock}`)

                Toastify({
                    text: "¡Producto agregado!",
                    duration: 2000,
                    gravity: "bottom", // `top` or `bottom`
                    position: "right", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                        color: 'black',
                        background: "linear-gradient(90deg, rgba(255,199,41,1) 18%, rgba(255,248,0,1) 76%)",
                    },
                    className: "claseToastify",
                    onClick: function () { } // Callback after click
                }).showToast();

            } else {
                Swal.fire({
                    title: "<strong>Lo siento.<br>No hay más stock</strong>",
                    icon: "warning",
                    html: `Elige otro producto.<br> ! Pronto tendremos mas ¡`,
                    showCloseButton: true,
                    focusConfirm: false,
                    confirmButtonText: `Aceptar`,
                });
            }
            console.log('Carrito: ',carrito)
            cantidadProds = contarProdCarrito(carrito)
            console.log('Cantidad Productos: ',cantidadProds)
            let stringifyProds = JSON.stringify(cantidadProds)
            console.log('Convertido: ',stringifyProds)
            localStorage.setItem("carrito",stringifyProds)
        })
    });
};


function main() {

    let sectionCards = document.getElementById('sectionCards')

    productos.forEach(item => {
        // console.log(item.nombre)
        sectionCards.innerHTML += `<div class="pt-2 pb-2">
    <div class="container cards-container">
        <div class="cards-item">
            <div class="card-descripcion">
                <h2>${item.nombre}</h2>
                <p>${item.descr}</p>
            </div>
            <img src=${item.img}>
            <div class="boton-container d-flex">
                <button class="boton-agregar" data-id="${item.codigo}">Agregar</button>
                <div class="boton-precio d-flex">
                    <p>$${item.precio}</p>
                </div>
            </div>
        </div>
    </div>
</div>`
    });

    agregarCarrito()

    let sectionConfirmarCompra = document.createElement('section');
    sectionConfirmarCompra.id = 'idConfirmCompra';
    sectionConfirmarCompra.classList.add('boton-confirmar-compra');
    sectionConfirmarCompra.innerHTML = '<img id="idCarritoGif" src="../assets/img/gifs/carritoEstatico.jpg" alt="">'
    let main = document.getElementById('idMain')
    main.append(sectionConfirmarCompra)

    let img = document.getElementById('idCarritoGif')
    let duracionGif = 1000
    img.addEventListener('mouseenter' , () => {
        img.src = '../assets/img/gifs/carrito.gif'
        setTimeout(() => {
            img.src = '../assets/img/gifs/carritoEstatico.jpg';
        }, duracionGif);
    })
}

main()
