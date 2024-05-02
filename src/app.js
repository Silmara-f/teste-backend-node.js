const express = require( "express");
const cors = require("cors");
const app = express();


app.use (cors());

app.use(express.json());

// Db connnection
const conn =require("./db/conn");

conn();

//Routes
const routes =require("./routes/router");


app.use("/api", router);


app.listem(3000,function() {
   console.log("Servidor Online !")
}) 

