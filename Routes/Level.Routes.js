import { Router } from "express";
import LevelControllers from "../Controllers/LevelControllers.js";

const LEVEL = Router()

export default LEVEL
    .get("/", LevelControllers.getLevel)
    .post("/", LevelControllers.createNewLevel)
    .put("/idLevel", LevelControllers.updateOneLevel)
    .delete("/idLevel", LevelControllers.deleteOneLevel);