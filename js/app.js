//Variables
const resultado = document.querySelector('#resultado')
//Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos); //Muestra los autos al cargar
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