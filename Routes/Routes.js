import { Router } from "express";
import CentroRoutes from "./Centro.Routes.js";
import RutaRoutes from "./Ruta.Routes.js";
import LevelRoutes from "./Level.Routes.js";
import CamperRoutes from "./Camper.Routes.js";
import RoleRoutes from "./Rol.Routes.js";

const ROUTER = Router();

const PATH = "/api";

export default ROUTER.use(`${PATH}/centros`, CentroRoutes)
  .use(`${PATH}/rutas`, RutaRoutes)
  .use(`${PATH}/levels`, LevelRoutes)
  .use(`${PATH}/campers`, CamperRoutes)
  .use(`${PATH}/roles`, RoleRoutes);
