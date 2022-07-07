import mongoose,{schema} from "mongoose"

const persona=new schema({
    clave:{type:String},
    nombre:String,
    apellidos:String,
    telefono:{type:number},
    email:String,
    createAct:{type:Date, default:Date.now} 
})

const personas=mongoose.model("persona",personal)
export default personas;