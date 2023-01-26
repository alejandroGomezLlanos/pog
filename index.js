//var http = require("http");
const express = require("express");
require("dotenv").config();

//agregando mongodb
const { dbConnection } = require("./database/config");

//llamando base de datos
dbConnection();

//crear Express App
const app = express();

app.use(express.static("public"));

//llamando archivos de tipo json
app.use(express.json());

//rutas
app.use("/api/auth", require("./routes/auth"));

//escuchar en puerto 4000
app.listen(8080, () => {
  console.log("servidor corriendo en puerto", 8080);
});

//create a server object:
//http
//  .createServer(function (req, res) {
//    res.write("Hello World!"); //write a response to the client
//    res.end(); //end the response
//  })
//  .listen(8080); //the server object listens on port 8080
