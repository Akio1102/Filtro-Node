import RolServices from "../Services/Role.js";
import { sendErrorResponse, handleResponse } from "../Helpers/Send.js";

const getRoles = async (req, res) => {
  try {
    const { hasta, desde } = req.query;
    const allRoles = await RolServices.getRoles(desde, hasta);
    const { count, data } = allRoles;
    res.status(200).json({ count, data });
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const createNewRol = async (req, res) => {
  try {
    const newRol = await RolServices.createdNewRol(req.body);
    handleResponse(res, newRol);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const updateOneRol = async (req, res) => {
  try {
    const { rutaID } = req.params;
    const updateRol = await RolServices.updatedOneRol(rutaID, req.body);
    handleResponse(res, updateRol);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const deleteOneRol = async (req, res) => {
  try {
    const { rutaID } = req.params;
    const deleteRol = await RolServices.deletedOneRol(rutaID);
    handleResponse(res, deleteRol);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export default {
  getRoles,
  createNewRol,
  updateOneRol,
  deleteOneRol,
};
