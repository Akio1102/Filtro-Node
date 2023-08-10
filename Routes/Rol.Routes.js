import { Router } from "express";
import RolControllers from "../Controllers/RolControllers.js";

const ROL = Router()

export default ROL
    .get("/", RolControllers.getRoles)
    .post("/", RolControllers.createNewRol)
    .put("/:idRole", RolControllers.updateOneRol)
    .delete("/:idRole", RolControllers.deleteOneRol);