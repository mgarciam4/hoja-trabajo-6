const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
let usuarios = [];

//lista todos los Datos almacenados
app.get("/listar", function (request, response) {
  response.status(200).json(usuarios);
});

//solicita  DPI,nombre,email y password http://localhost:3000/1235678/migue/migue@test.com/migue123
app.get("/:dpi/:name/:email/:password", function (request, response) {
  response.status(200).json(usuarios);
  let dpi = request.params.dpi;
  let name = request.params.name;
  let email = request.params.email;
  let password = request.params.password;
  usuarios.push({ dpi: dpi, name: name, email: email, password: password });
});

app.listen(3000, () => {
  console.log("Servidor escuchando por el puerto 3000");
});
