const { error } = require("console");
const express = require("express")
const app = express();

//Configuracion de body-parse
app.use(express.json())
const sistemaArchivos = require("fs")
const ruta = require("path")
const PORT = process.env.PORT || 3000;

// Ruta archivo .json

const rutaArchivoJson = ruta.join(__dirname, "aprendices.json")
app.get("/", (req, res) => {
     res.send(`<h1>Api Aprendices</h1>`);
});

// List crear endpoint 

app.get("/api/aprendices", (req, res) => {
    sistemaArchivos.readFile(rutaArchivoJson, "utf-8", (error, datos) =>
    {
       if(error){
          return res.status(500).json({Error: "Error conexion db."})
       }
       const listaAprendices = JSON.parse(datos)
       res.json(listaAprendices)
    })
})

//Endpoint para adicionar 

app.post("/api/aprendices", (req,res)=>{
  const datosAprendiz = req.body
  sistemaArchivos.readFile(rutaArchivoJson, "utf-8", (error, datos)=>{
    if (error){
      return res.json({Error: "Error de conexion"})
    }
    
    const listaAprendiz = JSON.parse(datos)
    listaAprendiz.push(datosAprendiz)
    sistemaArchivos.writeFile(rutaArchivoJson, JSON.stringify(listaAprendiz,null,2), (error)=>{
      if (error){
        res.status(500).json({Error: "No se puede registrar."})
      }
      res.status(201).json(datosAprendiz)
    })
  })
})

app.listen(PORT, () => { 
    console.log(`Servidor: http://localhost:${PORT}`);
});

