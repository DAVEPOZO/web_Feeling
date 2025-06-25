const productos = [
    { nombre: "Arreglo flor surtida", img: "https://www.floreriasanfelipe.com.mx/images/Canasta%20de%201%20Vista.jpg" },
    { nombre: "Ramo de flores con chocolate", img: "https://ramosdedulces.com/wp-content/uploads/2022/09/ramo-de-flores-con-chocolates-ramosdedulces-dot-com.jpg" },
    { nombre: "Girasoles", img: "https://cdn.floresdemexico.com/wp-content/uploads/2024/03/1-4-740x740.jpg" },
    { nombre: "Flores combinadas", img: "https://floreriaadomicilio.mx/wp-content/uploads/2023/06/arreglos-florales-hermosos-floreriaadomicilio-dot-mx.jpg" },
    { nombre: "Flores para la ocasión", img: "https://telerosa.com/3190-medium_default/ramo-flores-frescas-temporada-telerosa.jpg" },
    { nombre: "Ramo de rosas rojas", img: "https://azapflores.com/cdn/shop/files/IMG_5288.png?v=1705098223&width=533" },
    { nombre: "Girasoles combinadas", img: "imagen/foto1.jpg" },
    { nombre: "Rosas rojas con Girasoles", img: "imagen/foto2.jpg" },
    { nombre: "Gerberas", img: "imagen/foto3.jpg" },
    { nombre: "Rosa roja preservada", img: "imagen/foto4.jpg" },
    { nombre: "Rosa blanca preservada", img: "imagen/foto5.jpg" },
    { nombre: "Ramo de rosas azules combinadas", img: "imagen/foto6.jpg" },
    { nombre: "Arreglo seco", img: "imagen/foto7.jpg" },
    { nombre: "Rosa roja en forma de corazon", img: "imagen/foto8.jpg" },
    { nombre: "Ramo de rosas rojas grande", img: "imagen/foto9.jpg" },
    { nombre: "Ramo de rosas narajas combinadas", img: "imagen/foto10.jpg" },
    { nombre: "Ramo de rosas blancas combinadas arreglo floral 1", img: "imagen/foto11.jpg" },
    { nombre: "Ramo de rosas blancas combinadas arreglo floral 2", img: "imagen/foto12.jpg" },
    { nombre: "Ramos para la ocasion", img: "imagen/foto13.jpg" },
    { nombre: "Girasoles con lirios", img: "imagen/foto14.jpg" },
    { nombre: "Girasoles con flor de verano", img: "imagen/foto15.jpg" },
    { nombre: "Gerberas con distintos colores", img: "imagen/foto16.jpg" },
    { nombre: "Ramo de rosas azules", img: "imagen/foto17.jpg" },
    { nombre: "Ramo de rosas rojas", img: "imagen/foto18.jpg" },
    { nombre: "Ramo de crisantemo", img: "imagen/foto19.jpg" },
    { nombre: "Ramo de tomos rosados claros", img: "imagen/foto20.jpg" },
    { nombre: "Ramo rosado combinada", img: "imagen/foto21.jpg" },
    { nombre: "Ramo de color rosado claro", img: "imagen/foto22.jpg" },
    { nombre: "Limoniun", img: "imagen/foto23.jpg" },
    { nombre: "Limoniun", img: "imagen/foto24.jpg" },
    { nombre: "Gerberas", img: "imagen/foto25.jpg" },
];

const productosPorPagina = 10;
let paginaActual = 1;
let productosFiltrados = [...productos];

const contenedor = document.getElementById("catalogo");
const paginacion = document.querySelector(".paginacion");
const inputBusqueda = document.querySelector(".buscador input");
const botonBuscar = document.querySelector(".buscador button");

function mostrarProductos() {
    contenedor.innerHTML = "";
    const inicio = (paginaActual - 1) * productosPorPagina;
    const fin = inicio + productosPorPagina;
    const productosPagina = productosFiltrados.slice(inicio, fin);

    productosPagina.forEach((producto) => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img src="${producto.img}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>$</p>
      `;
        contenedor.appendChild(div);
        const faltantes = productosPorPagina - productosPagina.length;
        for (let i = 0; i < faltantes; i++) {
            const divVacio = document.createElement("div");
            divVacio.classList.add("producto", "vacio");
            contenedor.appendChild(divVacio);
        }
    });

    mostrarPaginacion();
}

function mostrarPaginacion() {
    paginacion.innerHTML = "";
    const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);

    for (let i = 1; i <= totalPaginas; i++) {
        const btn = document.createElement("button");
        btn.textContent = i;
        if (i === paginaActual) btn.classList.add("activo");
        btn.addEventListener("click", () => {
            paginaActual = i;
            mostrarProductos();
        });
        paginacion.appendChild(btn);
    }
}

botonBuscar.addEventListener("click", () => {
    const texto = inputBusqueda.value.toLowerCase();
    productosFiltrados = productos.filter(p =>
        p.nombre.toLowerCase().includes(texto)
    );
    paginaActual = 1;
    mostrarProductos();
});

// Mostrar productos iniciales
mostrarProductos();