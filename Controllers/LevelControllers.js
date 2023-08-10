import LevelServices from "../Services/Level.js";
import { sendErrorResponse, handleResponse } from "../Helpers/Send.js";

const getLevel = async (req, res) => {
  try {
    const { hasta, desde } = req.query;
    const allLevels = await LevelServices.getLevels(desde, hasta);
    const { count, data } = allLevels;
    res.status(200).json({ count, data });
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const createNewLevel = async (req, res) => {
  try {
    const newLevel = await LevelServices.createdNewLevel(req.body);
    handleResponse(res, newLevel);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const updateOneLevel = async (req, res) => {
  try {
    const { idLevel } = req.params;
    const updateLevel = await LevelServices.updatedOneLevel(idLevel, req.body);
    handleResponse(res, updateLevel);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const deleteOneLevel = async (req, res) => {
  try {
    const { idLevel } = req.params;
    const deleteLevel = await LevelServices.deletedOneLevel(idLevel);
    handleResponse(res, deleteLevel);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export default {
  getLevel,
  createNewLevel,
  updateOneLevel,
  deleteOneLevel,
};
