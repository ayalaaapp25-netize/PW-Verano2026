const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//Peliculas
let peliculas = [
    {
        id: 1,
        titulo : "Interestelar",
        director : "Christopher Nolar",
        año : 2014
    },
    {
        id: 2,
        titulo : "Kimetsu No Yaiba: Infinity Castle",
        director : "Koyoharu Gotouge",
        año : 2025
    }

];


let idActual = peliculas.length + 1;



//Obtener todas las peliculas
app.get("/peliculas", (req,res)=>{
    res.json(peliculas);
});


//Obtener una pelicula por ID
app.get("/peliculas/:id",(req,res)=>{
    const id = Number(req.params.id);
    const pelicula = peliculas.find(
        pelicula => pelicula.id === id
    );
    if(!pelicula){
        return res.status(404).json({
            mensaje: "Pelicula no encontrada"
        });
    }
    res.json(pelicula);
});


//Registrar peliculas
app.post("/peliculas",(req,res)=>{
    const {titulo, director, año } = req.body;
    if(!titulo || !director || !año){
        return res.status(400).json({
            mensaje: "Faltan datos de la pelicula"
        });
    }
    const nuevaPelicula = {
        id: idActual++,
        titulo: titulo,
        director : director,
        año: Number(año)
    };
    peliculas.push(nuevaPelicula);
    res.status(201).json({
        mensaje: "Pelicula registrada correctamente",
        pelicula: nuevaPelicula
    });
    
});


//Actualizar Pelicula
app.put("/peliculas/:id",(req,res)=>{
    const id = Number(req.params.id);
    const {titulo, director, año}= req.body;
    if(!titulo || !director || !año){
        return res.status(400).json({
            mensaje: "Faltan datoss de la ppelicula"
        });
    }
    const indice = peliculas.findIndex(
        pelicula => pelicula.id === id
    );

    if(indice === -1){
        return res.status(404).json({
            mensaje: "Pelicula no encontrada"
        });
    }

    peliculas[indice] = {
        id: id,
        titulo: titulo,
        director: director,
        año : Number(año)
    };

    res.json({
        mensaje: "Pelicula actualizada correctamente",
        pelicula: peliculas[indice]
    });
});


//Eliminar una pelicula
app.delete("/peliculas/:id",(req,res)=>{
    const id = Number(req.params.id);
    const indice = peliculas.findIndex(
        pelicula => pelicula.id ===id
    );
    if(indice === -1){
        return res.status(404).json({
            mensaje: "Pelicula no encontrada"
        });
    }

    const peliculaEliminada = peliculas[indice];

    peliculas.splice(indice, 1);

    res.json({
        mensaje: "Pelicula eliminada correctamente",
        pelicula: peliculaEliminada
    });
});




const port = 3000;

app.get("/", (req,res) => {
    res.send("Bienvenido a mi primer servidor con express");
});

app.get("/pagina", (req,res)=>{
    res.send(`
        <h1>MI pagina</h1>
        <p>creada con express</p>
    `);
});

app.get("/saludo/:nombre",(req,res)=>{
    const nombre = req.params.nombre;
});




//Ejercicio1
app.get("/par/:numero",(req,res)=>{
    const numero = req.params.numero;
    if(numero %2){
        console.log(numero + " es un numero par.")
    }else{
        console.log(numero + " es un numero impar.")
    }
});


//Ejercicio2
app.get("/edad/:edad",(req,res)=>{
    const edad = req.params.edad;
    if(edad >=18){
        console.log("Eres mayor de edad");
    }else{
        console.log("Eres menor de edad");
    }

    res.send(edad);
});


//Ejercicio3
app.get("/calculadora/:operacion/:a/:b",(req,res)=>{
    const operacion = req.params.operacion;
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    let resultado;

    if(operacion == "suma"){
        resultado = a+b;

    }else if(operacion == "resta"){
        resultado = a-b;
    }else if(operacion == "multiplicacion"){
        resultado = a*b;
    }else if(operacion == "division"){
        resultado = a/b;
    }else{
        console.log("SOLO USE LAS OPERACIONES VALIDAS")
    }
    
    console.log("El resultado es: "+ resultado);

    res.send(resultado);
});


//Ejercicio4
app.get("/tabla/:numero",(req,res)=>{
    const numero = req.params.numero;
    let resultado;

    for(let i=1; i<=10; i++){
        resultado = `${numero} x  ${i} = ${numero * 1}<br>`;
    }

    res.send(resultado);

});


//Ejercicio5
app.get("/calificacion/:nota",(req,res)=>{
    const nota = parseInt(req.params.nota);

    if(nota < 70){
        console.log("Reprobado pai");
    }else if(nota >=70){
        console.log("Aprobado pai");
    }else if(nota >=80){
        console.log("Muy bien pai");
    }else if(nota >=90){
        console.log("Excelente pai");
    }

    res.send(nota);
});



app.listen(port,() =>{
    console.log("Servidor iniciado en https://localhost:",+port);
});
