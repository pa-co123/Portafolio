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

function crearTabla(){
    var cadena = "<table><thead>";
    cadena = cadena + "<tr><th>ID</th>";
    cadena = cadena + "<th>Nombre</th>";
    cadena = cadena + "<th>Apellido</th>";
    cadena = cadena + "<th>Correo</th>";
    cadena = cadena + "<th>Telefono</th>";
    cadena = cadena + "<th>Comentarios</th></tr></thead>";

    cadena = cadena + "<tbody>";

    for(const dato of datos){
        cadena = cadena + "<tr>";
        cadena = cadena + "<td>" + dato.id + "</td>";
        cadena = cadena + "<td>" + dato.nombre + "</td>";
        cadena = cadena + "<td>" + dato.apellido + "</td>";
        cadena = cadena + "<td>" + dato.correo + "</td>";
        cadena = cadena + "<td>" + dato.telefono + "</td>";
        cadena = cadena + "<td>" + dato.comentario + "</td>";
        cadena = cadena + "</tr>";
    }
    cadena = cadena + "</tbody>";
    cadena = cadena + "</table>";
    tabla.innerHTML = cadena;

}
crearTabla();

function agregarFila(){
    const id = document.getElementById('id').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const comentario = document.getElementById('comentario').value;
    
    if(id && nombre && apellido && correo && telefono && comentario){
        let contenedor = document.querySelector('#tabla').getElementsByTagName('tbody')[0];
        const nuevaFila = contenedor.insertRow();

        nuevaFila.innerHTML = `
            <td>${id}</td>
            <td>${nombre}</td>
            <td>${apellido}</td>
            <td>${correo}</td>
            <td>${telefono}</td>
            <td>${comentario}</td>
        `;
        document.getElementById("formulario").reset();
    }
    else{
        alert("Datos incompletos");
    }
}