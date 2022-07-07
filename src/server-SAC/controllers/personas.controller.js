import personas from "../models/personas.model";
import models from "./models";

export default{
    addpersonas:async(req,res,next)=>(
        try{
            const{
                clave,
                nombre,
                apellidos,
                telefono,
                email
            }=req.body;

            const persona=new models.personas({
                clave,
                nombre,
                apellidos,
                telefono,
                email
            })

            const guardar=await persona.save();
            res.status(200).json(guardar);            
        }catch(error){
            res.status(500).send({
                massage:"ocurrio un error al guardar en el server de BD"
            });
            next(e);
        }
    )
}