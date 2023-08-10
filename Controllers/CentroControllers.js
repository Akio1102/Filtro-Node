import CentroServices from "../Services/Centro.js";

const getCentros = async (req, res) => {
    try {
        const data = await CentroServices.getCentros();
        console.log(data);
        res.status(200).json(data);
    } catch (error) {
        console.error(error)
    }
}

const createNewCentro = async (req, res) => {
    try {
        const newCentro = await CentroServices.createdNewCentro(req.body)
        console.log(newCentro);
        res.status(200).json(newCentro);
    } catch (error) {
        console.error(error)
    }
}

const updateOneCentro = async (req, res) => {
    try {
        const {idcentro} = req.params;
        const updateCentro = await CentroServices.updatedOneCentro(idcentro,req.body)
        console.log(updateCentro);
        res.status(200).json(updateCentro);
    } catch (error) {
        console.error(error)
    }
}

const deleteOneCentro = async (req, res) => {
    try {
        const {idcentro} = req.params;
        const deleteCentro = await CentroServices.deletedOneCentro(idcentro)
        console.log(deleteCentro);
        res.status(200).json(deleteCentro);
    } catch (error) {
        console.error(error)
    }
}

export default {
    getCentros,
    createNewCentro,
    updateOneCentro,
    deleteOneCentro
}