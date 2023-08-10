import { Router } from "express";
import RutaControllers from "../Controllers/RutaControllers.js";

const RUTA = Router()

export default RUTA
    .get("/", RutaControllers.getRutas)
    .post("/", RutaControllers.createNewRuta)
    .put("/:rutaID", RutaControllers.updateOneRuta)
    .delete("/:rutaID", RutaControllers.deleteOneRuta);