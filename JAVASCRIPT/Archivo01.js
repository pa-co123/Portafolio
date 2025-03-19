function mostrarMensaje(){
    alert("Hola, como estas?");
}

function leerValor(){
    const input = document.getElementById("unInput");
    const valor = input.value;
    alert("El valor es " + valor);
}

function SumaValor(){
    
    const valor = document.getElementById("num1");
    const valor2 = document.getElementById("num2");

    const num1 = parseFloat(valor.value);
    const num2 = parseFloat(valor2.value);

    const suma = num1 + num2;
    alert(suma);
}
