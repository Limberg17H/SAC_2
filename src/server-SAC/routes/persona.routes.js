import  routesx  from "express-promise-router";
import personasController from "../controllers/personas.controller";

const router=routesx();

router.post("./guardar",personasController.addpersonas);

export default router;