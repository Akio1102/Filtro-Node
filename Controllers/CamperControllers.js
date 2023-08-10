import CamperServices from "../Services/Camper.js";

const getCampers = async (req, res) => {
    try {
        const data = await CamperServices.getCampers();
        console.log(data);
        res.status(200).json(data);
    } catch (error) {
        console.error(error)
    }
}

const createNewCamper = async (req, res) => {
    try {
        const newCamper = await CamperServices.createdNewCamper(req.body)
        console.log(newCamper);
        res.status(200).json(newCamper);
    } catch (error) {
        console.error(error)
    }
}

const updateOneCamper = async (req, res) => {
    try {
        const {camperId} = req.params;
        const updateCamper = await CamperServices.updatedOneCamper(camperId,req.body)
        console.log(updateCamper);
        res.status(200).json(updateCamper);
    } catch (error) {
        console.error(error)
    }
}

const deleteOneCamper = async (req, res) => {
    try {
        const {camperId} = req.params;
        const deleteCamper = await CamperServices.deletedOneCamper(camperId)
        console.log(deleteCamper);
        res.status(200).json(deleteCamper);
    } catch (error) {
        console.error(error)
    }
}

export default {
    getCampers,
    createNewCamper,
    updateOneCamper,
    deleteOneCamper
}