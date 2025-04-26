const express = require('express');
const cors=require('cors');
const app=express();
const port=3000;

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//traernos la cadena de conexion de mongo DB
const{MongoClient, ServerApiVersion} = require('mongodb');
const uri = 'mongodb+srv://202260263:H6ZB5R@cluster0.7rsu2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

//creamos la conexion
const cliente = new MongoClient(uri,{
    serverApi:{
        version:ServerApiVersion.v1,
        strict:true,
        deprecationErrors:true,
    }
});

async function run(){
    try{
        await cliente.connect();
        await cliente.db("admin").command({ping:1});
        console.log("Conexion exitosa");
    }finally{
        await cliente.close();
    }
}

/*
app.get('/', async(req,res)=>{
    await cliente.connect();
    const db=cliente.db("sample_mflix");
    const collection = db.collection("movies");
    const resultado= await collection.find({poster:{$ne:null}},{plot:1}).toArray();
    res.json(resultado)
});
*-/

/*
app.listen(port, async () => {
    console.log(`Server attending at ${port}`);
    await run();
});
*/

//CRUD=CREATE,INSERT,UPDATE Y DELETE
app.post('/insertar', async (req,res) => {
    try{
        const {id,marca,modelo,placa,color,año} = req.body;
        await cliente.connect();
        const db=cliente.db('MiBaseDatosCarros');
        const collection=db.collection("Carros");
        const resultado= await collection.insertOne({id:id,marca:marca,modelo:modelo,placa:placa,color:color,año:año});
        res.send(`
            <script>
                alert("Documento Guardado Exitosamente");
                window.location.href="http://localhost:3000/home";
            </script>
        `);
    }finally{
        await cliente.close();
    }
});

app.get('/home', (req,res)=>{
    res.sendFile(__dirname + '/home.html');
});

app.post('/consultar',async (req,res) => {

    try{
        const {id} = req.body;
        await cliente.connect();
        const db=cliente.db('MiBaseDatosCarros');
        const collection=db.collection("Carros");
        const resultado= await collection.find({id:id}).toArray();
        console.log(resultado);
        res.json(resultado);
    }finally{
        await cliente.close();
    }

});

app.post('/actualizar', async (req, res) => {
    try {
        const { id, marca, modelo, placa, color, año } = req.body;
        await cliente.connect();
        const db = cliente.db('MiBaseDatosCarros');
        const collection = db.collection("Carros");

        // Solo incluir los campos que el usuario mandó
        const datosActualizar = {};
        if (marca) datosActualizar.marca = marca;
        if (modelo) datosActualizar.modelo = modelo;
        if (placa) datosActualizar.placa = placa;
        if (color) datosActualizar.color = color;
        if (año) datosActualizar.año = año;

        const resultado = await collection.updateOne(
            { id: id },            // Documento que quieres actualizar
            { $set: datosActualizar }  // Solo los campos enviados
        );

        res.send(`
            <script>
                alert("Documento Actualizado Exitosamente");
                window.location.href="http://localhost:3000/home";
            </script>
        `);
    } finally {
        await cliente.close();
    }
});



app.post('/eliminar', async (req, res) => {
    try {
        const { id } = req.body;
        await cliente.connect();
        const db = cliente.db('MiBaseDatosCarros');
        const collection = db.collection("Carros");
        
        const resultado = await collection.deleteOne({ id: id });

        res.send(`
            <script>
                alert("Documento Eliminado Exitosamente");
                window.location.href="http://localhost:3000/home";
            </script>
        `);
    } finally {
        await cliente.close();
    }
});


app.listen(port, () => {
    console.log(`Server attending at ${port}`);
});