import Campers from "../Models/Campers.js";
import { encryptPassword } from "../Helpers/Hash.js";

const getCampers = async (desde, hasta) => {
  try {
    const query = { estado: true };
    const [total, campers] = await Promise.all([
      Campers.countDocuments(query),
      Campers.find(query)
        .skip(Number(desde))
        .limit(Number(hasta))
        .populate("level", ["nombre"]),
    ]);
    if (total <= 0) {
      return { status: 404, msg: "No hay Campers" };
    }
    return { msg: "Camper Encontrados", count: total, data: campers };
  } catch (error) {
    throw new Error({ status: 500, msg: "Error en el Servidor" });
  }
};

const createdNewCamper = async (camperData) => {
  try {
    const { password, email } = camperData;
    const foundCamper = await Campers.findOne({ email });

    if (foundCamper) {
      return {
        status: 409,
        msg: `El Usuario ya existe`,
      };
    }

    const hashedPassword = encryptPassword(password);
    camperData.password = hashedPassword;

    console.log(camperData);
    const newCamper = await Campers.create(camperData);
    return {
      status: 201,
      msg: "Camper Creado Existosamente",
      data: newCamper,
    };
  } catch (error) {
    throw new Error({ status: 500, msg: "Error en el Servidor" });
  }
};

const updatedOneCamper = async (camperID, camperData) => {
  try {
    const { password } = camperData;

    const foundCamper = await Campers.findById(camperID);

    if (!foundCamper) {
      return { status: 404, msg: "No Existe ese Camper" };
    }

    const hashedPassword = encryptPassword(password);
    camperData.password = hashedPassword;

    const updatedCamper = await Campers.findByIdAndUpdate(
      camperID,
      camperData,
      { new: true }
    );
    return { status: 202, msg: "Camper Actualizado", data: updatedCamper };
  } catch (error) {
    throw new Error({ status: 500, msg: "Error en el Servidor" });
  }
};

const deletedOneCamper = async (camperID) => {
  try {
    const deleteCamper = await Campers.findByIdAndUpdate(camperID, {
      estado: false,
    });

    if (!deleteCamper) {
      return {
        status: 404,
        msg: `El Camper no Existe`,
      };
    }
    return { status: 200, msg: "Camper Eliminado" };
  } catch (error) {
    throw new Error({ status: 500, msg: "Error en el Servidor" });
  }
};

export default {
  getCampers,
  createdNewCamper,
  updatedOneCamper,
  deletedOneCamper,
};
