import CamperServices from "../Services/Camper.js";
import { sendErrorResponse, handleResponse } from "../Helpers/Send.js";

const getCampers = async (req, res) => {
  try {
    const { hasta, desde } = req.query;
    const allCampers = await CamperServices.getCampers(desde, hasta);
    const { count, data } = allCampers;
    res.status(200).json({ count, data });
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const createNewCamper = async (req, res) => {
  try {
    const newCamper = await CamperServices.createdNewCamper(req.body);
    res.handleResponse(res, newCamper);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const updateOneCamper = async (req, res) => {
  try {
    const { camperId } = req.params;
    const updateCamper = await CamperServices.updatedOneCamper(
      camperId,
      req.body
    );
    handleResponse(res, updateCamper);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const deleteOneCamper = async (req, res) => {
  try {
    const { camperId } = req.params;
    const deleteCamper = await CamperServices.deletedOneCamper(camperId);
    handleResponse(res, deleteCamper);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export default {
  getCampers,
  createNewCamper,
  updateOneCamper,
  deleteOneCamper,
};
