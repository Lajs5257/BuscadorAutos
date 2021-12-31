//Variables
const buscador = document.querySelector('#buscador');
//Contenedor para los resultados
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

//Objeto de busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

//Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos); //Muestra los autos al cargar

    llenarSelect();
})

buscador.addEventListener('change', e => {
    datosBusqueda[e.target.id] = e.target.value;
    filtrarAuto();
})


//Funciones
function mostrarAutos(autos){
    limpiarHTML();

    // Construir el HTML de los autos
    autos.forEach(auto => {
        const autoHTML = document.createElement('p');
        autoHTML.innerHTML = `
            <p>${auto.marca} ${auto.modelo} - ${auto.year} - ${auto.puertas} Puertas - Transmisión: ${auto.transmision} - Precio: ${auto.precio} - Color: ${auto.color}</p>
        `;
        resultado.appendChild(autoHTML);
    })
}

function llenarSelect() {
    for( let i = max; i >= min; i-- ) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); //Agregamos los años
    }
}
//Limpiar HTML
function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.firstChild.remove();
    }
}

//filtra los datos
function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    //console.log(resultado);
    mostrarAutos(resultado);
}

function filtrarMarca(auto) {
    const { marca } =  datosBusqueda;

    if(marca) {
        return auto.marca === marca;
    }
    return auto;
}

function filtrarYear(auto) {
    const { year } =  datosBusqueda;

    if(year) {
        return auto.year === parseInt(year);
    }
    return auto;
}
function filtrarMinimo(auto) {
    const { minimo } =  datosBusqueda;

    if(minimo) {
        return auto.precio >= parseInt(minimo);
    }
    return auto;
}
function filtrarMaximo(auto) {
    const { maximo } =  datosBusqueda;

    if(maximo) {
        return auto.precio <= parseInt(maximo);
    }
    return auto;
}
function filtrarPuertas(auto) {
    const { puertas } =  datosBusqueda;

    if(puertas) {
        return auto.puertas === parseInt(puertas);
    }
    return auto;
}
function filtrarTransmision(auto) {
    const { transmision } =  datosBusqueda;

    if(transmision) {
        return auto.transmision === transmision;
    }
    return auto;
}
function filtrarColor(auto) {
    const { color } =  datosBusqueda;

    if(color) {
        return auto.color === color;
    }
    return auto;
}
