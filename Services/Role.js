import Roles from "../Models/Roles.js";

const getRoles = async (desde, hasta) => {
  try {
    const [total, roles] = await Promise.all([
      Roles.countDocuments(),
      Roles.find().skip(Number(desde)).limit(Number(hasta)),
    ]);

    /* const allRoles = await Roles.find(); */
    if (roles <= 0) {
      return { msg: "No hay Roles", status: 404 };
    }
    return { msg: "Roles Encontrados", count: total, data: roles };
  } catch (error) {
    throw new Error({ status: 500, msg: "Error en el Servidor" });
  }
};

const createdNewRol = async (rol) => {
  try {
    const newRol = await Roles.create(rol);
    if (newRol) {
      return { status: 201, msg: "Rol Creado", data: newRol };
    }
    return {
      status: 400,
      msg: "Rol Faltan Datos",
    };
  } catch (error) {
    throw new Error({ status: 500, msg: "Error en el Servidor" });
  }
};

const updatedOneRol = async (rolID, rolData) => {
  try {
    if (!rolID || !rolData) {
      return { msg: "Ingrese Valores Validos" };
    }

    const foundRol = await Roles.findById(rolID);

    if (!foundRol) {
      return { msg: "No Existe ese Rol" };
    }

    const updatedRol = await Roles.findByIdAndUpdate(rolID, rolData, {
      new: true,
    });
    return { status: 201, msg: "Rol Actualizado", data: updatedRol };
  } catch (error) {
    throw new Error({ status: 500, msg: "Error en el Servidor" });
  }
};

const deletedOneRol = async (rolID) => {
  try {
    const deleteRol = await Roles.findByIdAndDelete(rolID);
    if (!deleteRol) {
      return {
        status: 404,
        msg: "El Rol no Existe",
      };
    }
    return { status: 204, msg: "Rol Eliminado" };
  } catch (error) {
    throw new Error({ status: 500, msg: "Error en el Servidor" });
  }
};

export default {
  getRoles,
  createdNewRol,
  updatedOneRol,
  deletedOneRol,
};
