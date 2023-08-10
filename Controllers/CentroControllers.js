import CentroServices from "../Services/Centro.js";
import { sendErrorResponse, handleResponse } from "../Helpers/Send.js";

const getCentros = async (req, res) => {
  try {
    const { hasta, desde } = req.query;
    const allCentros = await CentroServices.getCentros(desde, hasta);
    const { count, data } = allCentros;
    res.status(200).json({ count, data });
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const createNewCentro = async (req, res) => {
  try {
    const newCentro = await CentroServices.createdNewCentro(req.body);
    console.log(newCentro);
    handleResponse(res, newCentro);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const updateOneCentro = async (req, res) => {
  try {
    const { idcentro } = req.params;
    const updateCentro = await CentroServices.updatedOneCentro(
      idcentro,
      req.body
    );
    handleResponse(res, updateCentro);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const deleteOneCentro = async (req, res) => {
  try {
    const { idcentro } = req.params;
    const deleteCentro = await CentroServices.deletedOneCentro(idcentro);
    handleResponse(res, deleteCentro);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export default {
  getCentros,
  createNewCentro,
  updateOneCentro,
  deleteOneCentro,
};
