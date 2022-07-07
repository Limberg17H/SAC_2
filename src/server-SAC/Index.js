import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import mongoose from "mongoose";
import router from "./router";


mongoose.Promise=global.Promise;
const dbURL="mongodb://localhost:27017/movil";
mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(mongoose=>console.log ("conectado a la BD en el puerto 27017"))
.catch(err=>console.log())

const app=express();
app.set("port", process.env.PORT || 4000);

app.use(morgan("dev"));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirmane,"public")));

app.use("./api", router);

app.listen(app.get("port"),()=>{
    console.log("servidor ejecutado en el puerto:"+app.get("port"));
})