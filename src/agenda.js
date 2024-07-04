let citasDelDia = [
    {
        id: 1,
        nombre: "Juan Pérez",
        fecha: "2024-06-29",
        hora: "09:00",
        corteCabello: true,
        barba: false,
        cuidadoFacial: false,
        tiempoEstimado: 30,
        precio: 50
    },
    {
        id: 2,
        nombre: "Ana Gómez",
        fecha: "2024-06-29",
        hora: "10:00",
        corteCabello: false,
        barba: false,
        cuidadoFacial: true,
        tiempoEstimado: 45,
        precio: 70
    },
];

function mostrarCitas() {
    const listaCitas = document.getElementById('listaCitas');
    listaCitas.innerHTML = '';

    citasDelDia.forEach((cita, index) => {
        const li = document.createElement('li');
        
        // Banner de la cita que se muestra inicialmente
        const banner = document.createElement('div');
        banner.className = 'cita-banner';
        banner.innerHTML = `
            <span>
                Hora: ${cita.hora}, 
                Tiempo Estimado: ${cita.tiempoEstimado} min, 
                Precio: $${cita.precio}
            </span>
            <button class=eliminar-btn onclick="eliminarCita(${index})"><i class="bi bi-trash-fill"></i></button>
        `;
        banner.addEventListener('click', () => toggleDetalles(index));
        
        // Detalles adicionales que se muestran al hacer clic
        const detalles = document.createElement('div');
        detalles.className = 'cita-detalles';
        detalles.id = `detalles-${index}`;
        detalles.innerHTML = `
            Nombre: ${cita.nombre}<br>
            Fecha: ${cita.fecha}<br>
            Corte de Cabello: ${cita.corteCabello ? 'Sí' : 'No'}<br>
            Barba: ${cita.barba ? 'Sí' : 'No'}<br>
            Cuidado Facial: ${cita.cuidadoFacial ? 'Sí' : 'No'}<br>
        `;
        
        li.appendChild(banner);
        li.appendChild(detalles);
        listaCitas.appendChild(li);
    });
}

// Función para alternar la visualización de los detalles de la cita
function toggleDetalles(index) {
    const detalles = document.getElementById(`detalles-${index}`);
    detalles.style.display = detalles.style.display === 'none' ? 'block' : 'none';
}

// Mostrar las citas al cargar la página
document.addEventListener('DOMContentLoaded', mostrarCitas);

// Función para eliminar una cita
function eliminarCita(index) {
    citasDelDia.splice(index, 1);
    mostrarCitas();
}