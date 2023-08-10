import Levels from "../Models/Levels.js";

const getLevels = async () => {
    try {
        const allLevels = await Levels.find();
        if (allLevels < 0) {
            return { msg: "No hay Level" }
        }
        return { msg: "Centros Encontrados", data: allLevels }
    } catch (error) {
        throw new Error({ status: 500, msg: "Error en el Servidor" })
    }
}

const createdNewLevel = async (level) => {
    try {
        if (!level) {
            return { msg: "Ingrese Valores Validos" }
        }
        const newLevel = await Levels.create(centro)
        return { msg: "Level Creado", data: newLevel }
    } catch (error) {
        throw new Error({ status: 500, msg: "Error en el Servidor" })
    }
}

const updatedOneLevel = async (levelID, levelData) => {
    try {
        if (!levelID || !levelData) {
            return { msg: "Ingrese Valores Validos" }
        }
        const foundLevel = await Levels.findById(levelID);

        if (!foundLevel) {
            return { msg: "No Existe ese Centro" }
        }
        const updatedLevel = await Levels.findByIdAndUpdate(levelID, levelData)
        return { msg: "Centro Actualizado", data: updatedLevel }
    } catch (error) {
        throw new Error({ status: 500, msg: "Error en el Servidor" })
    }
}

const deletedOneLevel = async (levelID) => {
    try {
        if (!levelID) {
            return { msg: "Ingrese Valores Validos" }
        }
        const foundLevel = await Levels.findById(levelID);

        if (!foundLevel) {
            return { msg: "No Existe ese Centro" }
        }
        const deleteLevel = await Levels.findByIdAndDelete(levelID)
        return { msg: "Centro Eliminado",data: deleteLevel }
    } catch (error) {
        throw new Error({ status: 500, msg: "Error en el Servidor" })
    }
}

export default {
    getLevels,
    createdNewLevel,
    updatedOneLevel,
    deletedOneLevel
}