import Rutas from "../Models/Rutas.js";

const getRutas = async () => {
    try {
        const allRutas = await Rutas.find();
        return {msg: "Rutas Encontrados",data: allRutas}
    } catch (error) {
        throw new Error({ status: 500, msg: "Error en el Servidor" })
    }
}

const createdNewRuta = async(ruta) => {
    try {
        if (!ruta) {
            return { msg: "Ingrese Valores Validos" }
        }
        const newRuta = await Rutas.create(ruta)
        return {msg:"Ruta Creada",data:newRuta}
    } catch (error) {
        throw new Error({ status: 500, msg: "Error en el Servidor" })
    }
}

const updatedOneRuta = async (rutaID,rutaData) => {
    try {
        if (!rutaID || !rutaData) {
            return { msg: "Ingrese Valores Validos" }
        }

        const foundRuta = await Rutas.findById(rutaID);

        if (!foundRuta) {
            return { msg: "No Existe esa Ruta" }
        }

        const updatedRuta = await Rutas.findByIdAndUpdate(rutaID,rutaData)
        return {msg:"Ruta Actualizada",data:updatedRuta}
    } catch (error) {
        throw new Error({ status: 500, msg: "Error en el Servidor" })
    }
}

const deletedOneRuta = async (rutaID) => {
    try {
        if (!rutaID) {
            return { msg: "Ingrese Valores Validos" }
        }

        const foundRuta = await Rutas.findById(rutaID);

        if (!foundRuta) {
            return { msg: "No Existe esa Ruta" }
        }

        const deleteRuta = await Rutas.findByIdAndDelete(rutaID)
        return{msg:"Ruta Eliminada",deleteRuta}
    } catch (error) {
        throw new Error({ status: 500, msg: "Error en el Servidor" })
    }
}

export default {
    getRutas,
    createdNewRuta,
    updatedOneRuta,
    deletedOneRuta
}