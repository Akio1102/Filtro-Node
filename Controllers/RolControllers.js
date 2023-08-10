import RolServices from "../Services/Role.js";

const getRoles = async (req, res) => {
    try {
        const data = await RolServices.getRoles();
        console.log(data);
        res.status(200).json(data);
    } catch (error) {
        console.error(error)
    }
}

const createNewRol = async (req, res) => {
    try {
        const newRol = await RolServices.createdNewRol(req.body)
        console.log(newRol);
        res.status(200).json(newRol);
    } catch (error) {
        console.error(error)
    }
}

const updateOneRol = async (req, res) => {
    try {
        const {rutaID} = req.params;
        const updateRol = await RolServices.updatedOneRol(rutaID,req.body)
        console.log(updateRol);
        res.status(200).json(updateRol);
    } catch (error) {
        console.error(error)
    }
}

const deleteOneRol = async (req, res) => {
    try {
        const {rutaID} = req.params;
        const deleteRol = await RolServices.deletedOneRol(rutaID)
        console.log(deleteRol);
        res.status(200).json(deleteRol);
    } catch (error) {
        console.error(error)
    }
}

export default {
    getRoles,
    createNewRol,
    updateOneRol,
    deleteOneRol
}