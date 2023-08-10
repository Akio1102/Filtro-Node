import Campers from "../Models/Campers.js";

const getCampers = async () => {
    try {
        const allCampers = await Campers.find();
        if (allCampers < 0) {
            return { msg: "No hay Campers" }
        }
        return {msg: "Camper Encontrados",data: allCampers}
    } catch (error) {
         throw new Error({ status: 500, msg: "Error en el Servidor" })
    }
}

const createdNewCamper = async(camper) => {
    try {
        if (!camper) {
            return { msg: "Ingrese Valores Validos" }
        }
        const newCamper = await Campers.create(camper)
        return {msg:"Camper Creado",data: newCamper}
    } catch (error) {
         throw new Error({ status: 500, msg: "Error en el Servidor" })
    }
}

const updatedOneCamper = async (camperID,camperData) => {
    try {
        if (!camperID || !camperData) {
            return { msg: "Ingrese Valores Validos" }
        }

        const foundCamper = await Campers.findById(camperID);

        if (!foundCamper) {
            return { msg: "No Existe ese Centro" }
        }

        const updatedCamper = await Campers.findByIdAndUpdate(camperID,camperData)
        return {msg:"Camper Actualizado",data: updatedCamper}
    } catch (error) {
         throw new Error({ status: 500, msg: "Error en el Servidor" })
    }
}

const deletedOneCamper = async (camperID) => {
    try {
        if (!camperID) {
            return { msg: "Ingrese Valores Validos" }
        }

        const foundCamper = await Campers.findById(camperID);

        if (!foundCamper) {
            return { msg: "No Existe ese Centro" }
        }

        const deleteCamper = await Campers.findByIdAndDelete(camperID)
        return{msg:"Camper Eliminado",data: deleteCamper}
    } catch (error) {
         throw new Error({ status: 500, msg: "Error en el Servidor" })
    }
}

export default {
    getCampers,
    createdNewCamper,
    updatedOneCamper,
    deletedOneCamper,
}