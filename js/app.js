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
    console.log(`${e.target.id}: ${e.target.value}`);
    console.log(datosBusqueda);
    filtrarAuto();
})


//Funciones
function mostrarAutos(autos){
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
//filtra los datos
function filtrarAuto() {
    
}