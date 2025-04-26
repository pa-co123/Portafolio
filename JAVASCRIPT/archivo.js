function sayHello(nombre){
    return `Hola ${nombre}`;
}

function sayHelloWorld(){
    return "Hola mundo";
}

//module.exports.saludo = sayHello;
//module.exports.mundo = sayHelloWorld;

module.exports = {
    sayHello : sayHello,
    sayHelloWorld : sayHelloWorld
};