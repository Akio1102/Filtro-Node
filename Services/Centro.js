import Centros from "../Models/Centros.js";

const getCentros = async (desde, hasta) => {
  try {
    const query = { estado: true };
    const [total, centros] = await Promise.all([
      Centros.countDocuments(query),
      Centros.find(query).skip(Number(desde)).limit(Number(hasta)),
    ]);
    if (total <= 0) {
      return { msg: "No hay Centros", status: 404 };
    }
    return { msg: "Centros Encontrados", count: total, data: centros };
  } catch (error) {
    throw new Error({ status: 500, msg: "Error en el Servidor" });
  }
};

const createdNewCentro = async (centro) => {
  try {
    const newCentro = await Centros.create(centro);
    if (newCentro) {
      return { status: 201, msg: "Centro Creado", data: newCentro };
    }
    return {
      status: 400,
      msg: "Centros Faltan Datos",
    };
  } catch (error) {
    throw new Error(`Error el Servidor: ${error.message}`);
  }
};

const updatedOneCentro = async (centroID, centroData) => {
  try {
    if (!centroID || !centroData) {
      return { status: 404, msg: "Ingrese Valores Validos" };
    }

    const foundCentro = await Centros.findById(centroID);

    if (!foundCentro) {
      return { status: 404, msg: "No Existe ese Centro" };
    }

    const updatedCentro = await Centros.findByIdAndUpdate(
      centroID,
      centroData,
      {
        new: true,
      }
    );
    return {
      status: 201,
      msg: "Centro Actualizado Exitosamente",
      data: updatedCentro,
    };
  } catch (error) {
    throw new Error({ status: 500, msg: "Error en el Servidor" });
  }
};

const deletedOneCentro = async (centroID) => {
  try {
    const deleteCentro = await Centros.findByIdAndUpdate(centroID, {
      estado: false,
    });

    if (!deleteCentro) {
      return {
        status: 404,
        msg: `El Centro No existe`,
      };
    }
    return { status: 204, msg: "Centro Eliminado" };
  } catch (error) {
    throw new Error({ status: 500, msg: "Error en el Servidor" });
  }
};

export default {
  getCentros,
  createdNewCentro,
  updatedOneCentro,
  deletedOneCentro,
};
