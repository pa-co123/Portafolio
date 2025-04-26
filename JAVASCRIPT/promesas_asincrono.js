//promise

const datos = [
    {id:1, title:'Avengers', year:2012},
    {id:2, title:'Spidermam', year:2004},
    {id:3, title:'The batman', year:2012},
];

/*
const getDatos = () => {
    console.log(datos);
}

getDatos();
*/

/*
const getDatos = () =>{
    setTimeout(()=>{ return datos},3000);
}
*/
/*
const datos = [
    
];
*/
const getDatos = () =>{
   return new Promise(
    (resolve,reject) => {
        if(datos.length===0){
            reject(new Error("El arreglo esta vacio"))
        }
        else{
            setTimeout(()=>{ resolve(datos)},3000);
        }
    }
    );
}

/*
getDatos().then((resultado)=>{
    console.log(resultado);
}).catch((error) => {console.log(error.message)});
*/

//const resultado = await getDatos();

async function obtieneDatos(){
    try{
        const resultado = await getDatos();
        console.log(resultado);
    }catch(error){
        console.log(error.message);
    }
    
}

obtieneDatos();
console.log("Mensaje despues del resultado");

