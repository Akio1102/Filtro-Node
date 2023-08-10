import Centros from "../Models/Centros.js";

const getCentros = async () => {
    try {
        const allCentros = await Centros.find();
        if (allCentros < 0) {
            return { msg: "No hay Centros" }
        }
        return { msg: "Centros Encontrados", data: allCentros }
    } catch (error) {
        throw new Error({ status: 500, msg: "Error en el Servidor" })
    }
}

const createdNewCentro = async (centro) => {
    try {
        if (!centro) {
            return { msg: "Ingrese Valores Validos" }
        }
        const newCentro = await Centros.create(centro)
        return { msg: "Centro Creado", data: newCentro }
    } catch (error) {
        throw new Error({ status: 500, msg: "Error en el Servidor" })
    }
}

const updatedOneCentro = async (centroID, centroData) => {
    try {
        if (!centroID || !centroData) {
            return { msg: "Ingrese Valores Validos" }
        }

        const foundCentro = await Centros.findById(centroID);

        if (!foundCentro) {
            return { msg: "No Existe ese Centro" }
        }

        const updatedCentro = await Centros.findByIdAndUpdate(centroID, centroData)
        return { msg: "Centro Actualizado", updatedCentro }
    } catch (error) {
        throw new Error({ status: 500, msg: "Error en el Servidor" })
    }
}

const deletedOneCentro = async (centroID) => {
    try {
        if (!centroID) {
            return { msg: "Ingrese Valores Validos" }
        }

        const foundCentro = await Centros.findById(centroID);

        if (!foundCentro) {
            return { msg: "No Existe ese Centro" }
        }

        const deleteCentro = await Centros.findByIdAndDelete(centroID)
        return { msg: "Centro Eliminado", deleteCentro }
    } catch (error) {
        throw new Error({ status: 500, msg: "Error en el Servidor" })
    }
}

export default {
    getCentros,
    createdNewCentro,
    updatedOneCentro,
    deletedOneCentro,
}