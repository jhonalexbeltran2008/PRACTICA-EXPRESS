import express from "express";
import{configDotenv} from "dotenv"
configDotenv()

const app = express();
const puerto = process.env.PORT || 3000;

app.get("/",(rep, res)=>{
     res.send("Hola ficha 3407180")
});

app.get("/misaludo", (rep, res)=>{
     res.send(`<h1>Hola, soy Jhon Beltran</h1>
        <p>Soy aprendiz SENA</p>`)
});


app.listen(puerto, () => {
    console.log(`servidor funcional!! en el puerto ${puerto}`);
});
