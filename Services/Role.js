import Roles from "../Models/Roles.js";

const getRoles = async () => {
    try {
        const allRoles = await Roles.find();
        if (allRoles < 0) {
            return { msg: "No hay Roles" }
        }
        return {msg: "Roles Encontrados",data: allRoles}
    } catch (error) {
         throw new Error({ status: 500, msg: "Error en el Servidor" })
    }
}

const createdNewRol = async(rol) => {
    try {
        if (!rol) {
            return { msg: "Ingrese Valores Validos" }
        }
        const newRol = await Roles.create(rol)
        return {msg:"Rol Creado",data: newRol}
    } catch (error) {
         throw new Error({ status: 500, msg: "Error en el Servidor" })
    }
}

const updatedOneRol = async (rolID,rolData) => {
    try {
        if (!rolID || !rolData) {
            return { msg: "Ingrese Valores Validos" }
        }

        const foundRol = await Roles.findById(rolID);

        if (!foundRol) {
            return { msg: "No Existe ese Rol" }
        }

        const updatedRol = await Roles.findByIdAndUpdate(rolID,rolData)
        return {msg:"Rol Actualizado",data: updatedRol}
    } catch (error) {
         throw new Error({ status: 500, msg: "Error en el Servidor" })
    }
}

const deletedOneRol = async (rolID) => {
    try {
        if (!rolID) {
            return { msg: "Ingrese Valores Validos" }
        }

        const foundRol = await Roles.findById(rolID);

        if (!foundRol) {
            return { msg: "No Existe ese Rol" }
        }

        const deleteRol = await Roles.findByIdAndDelete(camperID)
        return{msg:"Rol Eliminado",data: deleteRol}
    } catch (error) {
         throw new Error({ status: 500, msg: "Error en el Servidor" })
    }
}

export default {
    getRoles,
    createdNewRol,
    updatedOneRol,
    deletedOneRol,
}