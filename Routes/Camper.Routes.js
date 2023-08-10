import { Router } from "express";
import CampersControllers from "../Controllers/CamperControllers.js";

const CAMPER = Router();

export default CAMPER.get("/", CampersControllers.getCampers)
  .post("/", CampersControllers.createNewCamper)
  .put("/:camperId", CampersControllers.updateOneCamper)
  .delete("/:camperId", CampersControllers.deleteOneCamper);
