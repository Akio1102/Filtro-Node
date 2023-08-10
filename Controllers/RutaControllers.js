import RutaServices from "../Services/Ruta.js";

const getRutas = async (req, res) => {
    try {
        const data = await RutaServices.getRutas();
        console.log(data);
        res.status(200).json(data);
    } catch (error) {
        console.error(error)
    }
}

const createNewRuta = async (req, res) => {
    try {
        const newRuta = await RutaServices.createdNewRuta(req.body)
        console.log(newRuta);
        res.status(200).json(newRuta);
    } catch (error) {
        console.error(error)
    }
}

const updateOneRuta = async (req, res) => {
    try {
        const {rutaID} = req.params;
        const updateRuta = await RutaServices.updatedOneRuta(rutaID,req.body)
        console.log(updateRuta);
        res.status(200).json(updateRuta);
    } catch (error) {
        console.error(error)
    }
}

const deleteOneRuta = async (req, res) => {
    try {
        const {rutaID} = req.params;
        const deleteRuta = await RutaServices.deletedOneRuta(rutaID)
        console.log(deleteRuta);
        res.status(200).json(deleteRuta);
    } catch (error) {
        console.error(error)
    }
}

export default {
    getRutas,
    createNewRuta,
    updateOneRuta,
    deleteOneRuta
}