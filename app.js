import express from "express";
import{configDotenv} from "dotenv"
configDotenv()

const app = express();
const puerto = process.env.PORT || 3000;

app.get("/saludo/:ficha", (req, res) => {
    const ficha = req.params.ficha;
     res.send(`<h1>Jhon Alex Beltran</h1>
        <p>Soy de la ficha: ${ficha}</p>`);
});



app.get("/misaludo", (rep, res)=>{
     res.send(`<h1>Hola, soy Jhon Beltran</h1>
        <p>Soy aprendiz SENA</p>`)
});

app.get("/clientes/:id", (rep, res) => {
     const id = req.params.id;
     res.send(`<h1>Clientes</h1>
        <p>Soy el cliente con ID ${id}</p>`);
});



app.listen(puerto, () => {
    console.log(`SERVIDOR http://localhoost:${puerto}
        http:127.0.0.1:${puerto}`)
});
