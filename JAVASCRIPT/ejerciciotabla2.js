const datos = [
    { id: 1, nombre: "Carlos", apellido: "Ramírez", correo: "carlos.ramirez@example.com", telefono: "555-1234", comentario: "Cliente frecuente" },
    { id: 2, nombre: "Ana", apellido: "López", correo: "ana.lopez@example.com", telefono: "555-5678", comentario: "Interesada en promociones" },
    { id: 3, nombre: "Luis", apellido: "García", correo: "luis.garcia@example.com", telefono: "555-9101", comentario: "Prefiere contacto por email" },
    { id: 4, nombre: "Marta", apellido: "Fernández", correo: "marta.fernandez@example.com", telefono: "555-1122", comentario: "Consulta sobre productos" },
    { id: 5, nombre: "José", apellido: "Martínez", correo: "jose.martinez@example.com", telefono: "555-3344", comentario: "Requiere soporte técnico" },
    { id: 6, nombre: "Laura", apellido: "Hernández", correo: "laura.hernandez@example.com", telefono: "555-5566", comentario: "Solicita cotización" },
    { id: 7, nombre: "Andrés", apellido: "Pérez", correo: "andres.perez@example.com", telefono: "555-7788", comentario: "Quiere agendar reunión" },
    { id: 8, nombre: "Sofía", apellido: "Gómez", correo: "sofia.gomez@example.com", telefono: "555-9900", comentario: "Le interesa la membresía" },
    { id: 9, nombre: "Daniel", apellido: "Díaz", correo: "daniel.diaz@example.com", telefono: "555-2233", comentario: "Consulta sobre horarios" },
    { id: 10, nombre: "Elena", apellido: "Torres", correo: "elena.torres@example.com", telefono: "555-4455", comentario: "Recomendada por un amigo" }
];

tabla = document.getElementById('tabla');

function cerraFormulario() {
    document.getElementById('contenedor-formulario').style.display='none';
}

function mostrarModal(){
    document.getElementById('contenedor-formulario').style.display ='flex';
}

function eliminarFila(id) {
    const index = datos.findIndex(dato => dato.id === id);
    if (index !== -1) {
        datos.splice(index, 1); 
        crearTabla(); 
    }
}


function crearTabla(){
    var cadena = "<table><thead>";
    cadena = cadena + "<tr><th>ID</th>";
    cadena = cadena + "<th>Nombre</th>";
    cadena = cadena + "<th>Apellido</th>";
    cadena = cadena + "<th>Correo</th>";
    cadena = cadena + "<th>Telefono</th>";
    cadena = cadena + "<th>Comentarios</th>";
    cadena = cadena + "<th>Acciones</th></tr></thead>"; //columan de eliminar

    cadena = cadena + "<tbody>";

    for(const dato of datos){
        cadena = cadena + "<tr>";
        cadena = cadena + "<td>" + dato.id + "</td>";
        cadena = cadena + "<td>" + dato.nombre + "</td>";
        cadena = cadena + "<td>" + dato.apellido + "</td>";
        cadena = cadena + "<td>" + dato.correo + "</td>";
        cadena = cadena + "<td>" + dato.telefono + "</td>";
        cadena = cadena + "<td>" + dato.comentario + "</td>";
        cadena = cadena + `<td><button class="btn-eliminar" onclick="eliminarFila(${dato.id})"> Eliminar </button></td>`; // Botón de eliminación
        cadena = cadena + "</tr>";
    }
    cadena = cadena + "</tbody>";
    cadena = cadena + "</table>";
    tabla.innerHTML = cadena;

}
crearTabla();

function agregarFila() {
    const id = document.getElementById('id').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const comentario = document.getElementById('comentario').value;

    if (id && nombre && apellido && correo && telefono && comentario) {
        // Convertir ID a número y verificar que no exista
        const idNum = parseInt(id);
        if (datos.some(dato => dato.id === idNum)) {
            alert("El ID ya existe. Introduzca otro.");
            return;
        }

        // Agregar la nueva fila al array datos
        datos.push({
            id: idNum,
            nombre: nombre,
            apellido: apellido,
            correo: correo,
            telefono: telefono,
            comentario: comentario
        });

        // Regenerar la tabla para incluir la nueva fila con su botón de eliminar
        crearTabla();

        // Limpiar el formulario y cerrar el modal
        document.getElementById("formulario").reset();
        cerraFormulario();
    } else {
        alert("Datos incompletos");
    }
}
