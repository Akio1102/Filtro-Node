import RutaServices from "../Services/Ruta.js";
import { sendErrorResponse, handleResponse } from "../Helpers/Send.js";

const getRutas = async (req, res) => {
  try {
    const { hasta, desde } = req.query;
    const allRutas = await RutaServices.getRutas(desde, hasta);
    const { count, data } = allRutas;
    res.status(200).json({ count, data });
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const createNewRuta = async (req, res) => {
  try {
    const newRuta = await RutaServices.createdNewRuta(req.body);
    handleResponse(res, newRuta);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const updateOneRuta = async (req, res) => {
  try {
    const { rutaID } = req.params;
    const updateRuta = await RutaServices.updatedOneRuta(rutaID, req.body);
    handleResponse(res, updateRuta);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const deleteOneRuta = async (req, res) => {
  try {
    const { rutaID } = req.params;
    const deleteRuta = await RutaServices.deletedOneRuta(rutaID);
    handleResponse(res, deleteRuta);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export default {
  getRutas,
  createNewRuta,
  updateOneRuta,
  deleteOneRuta,
};
