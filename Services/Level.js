import Levels from "../Models/Levels.js";

const getLevels = async (desde, hasta) => {
  try {
    const [total, levels] = await Promise.all([
      Levels.countDocuments(),
      Levels.find().skip(Number(desde)).limit(Number(hasta)),
    ]);
    /* const allLevels = await Levels.find(); */
    if (total <= 0) {
      return { status: 404, msg: "No hay Level" };
    }
    return { msg: "Centros Encontrados", count: total, data: levels };
  } catch (error) {
    throw new Error({ status: 500, msg: "Error en el Servidor" });
  }
};

const createdNewLevel = async (level) => {
  try {
    const newLevel = await Levels.create(level);

    if (newLevel) {
      return {
        status: 201,
        msg: "Level Creado",
        data: newLevel,
      };
    } else {
      return {
        status: 400,
        msg: "Faltan Datos para crear Level",
      };
    }
  } catch (error) {
    throw new Error({ status: 500, msg: "Error en el Servidor" });
  }
};

const updatedOneLevel = async (levelID, levelData) => {
  try {
    if (!levelID || !levelData) {
      return { status: 404, msg: "Ingrese Valores Validos" };
    }
    const foundLevel = await Levels.findById(levelID);

    if (!foundLevel) {
      return { status: 404, msg: "No Existe ese Level" };
    }
    const updatedLevel = await Levels.findByIdAndUpdate(levelID, levelData, {
      new: true,
    });
    return {
      status: 201,
      msg: "Level Actualizado Existosamente",
      data: updatedLevel,
    };
  } catch (error) {
    throw new Error({ status: 500, msg: "Error en el Servidor" });
  }
};

const deletedOneLevel = async (levelID) => {
  try {
    const deleteLevel = await Levels.findByIdAndDelete(levelID);

    if (!deleteLevel) {
      return {
        status: 404,
        msg: "El Level no Existe",
      };
    }
    return { msg: "Level Eliminado" };
  } catch (error) {
    throw new Error({ status: 500, msg: "Error en el Servidor" });
  }
};

export default {
  getLevels,
  createdNewLevel,
  updatedOneLevel,
  deletedOneLevel,
};
