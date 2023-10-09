const express = require("express");
const app = express();
//const connectionFn = require("./conectionDB/connection");
const handlebars = require("express-handlebars");
const ioFn = require("./io/io");
// const cookieParser = require("cookie-parser"); // Requerimos cookie-parse
// const MongoStore = require("connect-mongo");
// const passport = require("passport");
// const initializePassport = require("./config/passportConfig.js");
// const flash = require("connect-flash");
const { Command } = require("commander");
const dotenv = require("dotenv");
const configFn = require("./config.env/configFn");
const factoryFn = require("./DAO/factory.js")

//Obtengo los argumentos, las variables de entorno y se lo paso al archibo config de mongo.
const program = new Command();
program.option("--mode <mode>", "Modo de trabajo", "dev"); // Por default ejecutamos en modo dev
program.parse(); // Termino la configuracion de las opciones de argumentos
const options = program.opts(); // Guardo en variable las opciones que se pasaron
dotenv.config({ // Al metodo config de dotenv se le puede pasar el metodo path que es donde vamos a buscar nuestras variables de entorno.
  path: `.env.${options.mode}` // Aca le paso en modo en que se ejecuto el programa para que lea las variables de entorno segun el modo en el cual lo ejecutamos.
});
console.log(`Sistema ejecutado en modo: ${options.mode}`);

const config = configFn();
factoryFn(config) // Llamamos al factory del DAO y en le pasamos la config que obtenemos program.opts() y ahi le indicamos el tipo de persistencia.


// Handlebars
app.engine("handlebars", handlebars.engine());
app.set("views", "./views");
app.set("view engine", "handlebars");

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const PORT = 8080;
const httpServer = app.listen(PORT, () =>
  console.log(`Servidor express corriendo en el puerto ${PORT}`)
); // Al server de express lo guardamos en una variable para luego ejecutar el io.

// Server io
const io = ioFn(httpServer);


// Requiero las rutas
const productsRoutersFn = require("./routers/productsRouters")
const productsRouters = productsRoutersFn(io)


app.use("/",productsRouters)
app.use("/api",productsRouters)

//Ruta incorrecta
app.use((req, res) => {
    res.status(404).send({ Error: "La ruta deseada no existe" });
  });