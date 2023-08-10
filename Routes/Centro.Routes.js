import { Router } from "express";
import CentroControllers from "../Controllers/CentroControllers.js";

const CENTRO = Router()

export default CENTRO.get("/", CentroControllers.getCentros)
    .post("/", CentroControllers.createNewCentro)
    .put("/:idcentro", CentroControllers.updateOneCentro)
    .delete("/:idcentro", CentroControllers.deleteOneCentro);