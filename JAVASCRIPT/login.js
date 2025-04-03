// Datos de usuario y contraseña predefinidos
const USERNAME = "admin";
const PASSWORD = "1234";

function validateLogin(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    const inputUser = document.getElementById("username").value;
    const inputPass = document.getElementById("password").value;

    if (inputUser === USERNAME && inputPass === PASSWORD) {
        window.location.href = "barraprogreso.html"; // Redirige a la barra de progreso
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}
