import LevelServices from "../Services/Level.js";

const getLevel = async (req, res) => {
    try {
        const data = await LevelServices.getLevels();
        console.log(data);
        res.status(200).json(data);
    } catch (error) {
        console.error(error)
    }
}

const createNewLevel = async (req, res) => {
    try {
        const newLevel = await LevelServices.createdNewLevel(req.body)
        console.log(newLevel);
        res.status(200).json(newLevel);
    } catch (error) {
        console.error(error)
    }
}

const updateOneLevel = async (req, res) => {
    try {
        const {idLevel} = req.params;
        const updateLevel = await LevelServices.updatedOneLevel(idLevel,req.body)
        console.log(updateLevel);
        res.status(200).json(updateLevel);
    } catch (error) {
        console.error(error)
    }
}

const deleteOneLevel = async (req, res) => {
    try {
        const {idLevel} = req.params;
        const deleteLevel = await LevelServices.deletedOneLevel(idLevel)
        console.log(deleteLevel);
        res.status(200).json(deleteLevel);
    } catch (error) {
        console.error(error)
    }
}

export default {
    getLevel,
    createNewLevel,
    updateOneLevel,
    deleteOneLevel
}