const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

// create and config server
const server = express();
server.use(cors());
server.use(express.json({ limit: "10mb" }));

// Variable  que guarda la conexion

let connection;

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// conexión BD

mysql
  .createConnection({
    host: "sql.freedb.tech",
    database: "freedb_project-celiamirez",
    user: "freedb_user-celiamirez",
    password: "Pp2Bp?4fMtYKM7e",
  })
  .then((conn) => {
    connection = conn;
    connection
      .connect()
      .then(() => {
        console.log(
          `Conexión establecida con la base de datos (identificador=${connection.threadId})`
        );
      })
      .catch((err) => {
        console.error("Error de conexion: " + err.stack);
      });
  })
  .catch((err) => {
    console.error("Error de configuración: " + err.stack);
  });

// //ESCRIBIMOS EL ENDPOINT

server.get("/products", (req, res) => {
  console.log("Pidiendo a la base de datos información de los productos.");
  let sql = "SELECT * FROM products";
  connection
    .query(sql)
    .then(([results, fields]) => {
      console.log("Información recuperada:");
      results.forEach((result) => {
        console.log(result);
      });
      res.json(results);
    })
    .catch((err) => {
      throw err;
    });
});

const staticServerPathWeb = "./src/public-react";
server.use(express.static(staticServerPathWeb));

const staticServerPathImage = "./src/public-movies-images";
server.use(express.static(staticServerPathImage));
