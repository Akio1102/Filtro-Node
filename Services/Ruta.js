import Rutas from "../Models/Rutas.js";

const getRutas = async (desde, hasta) => {
  try {
    const [total, rutas] = await Promise.all([
      Rutas.countDocuments(),
      Rutas.find().skip(Number(desde)).limit(Number(hasta)),
    ]);
    const allRutas = await Rutas.find();
    if (allRutas.length < 0) {
      return {
        status: 404,
        msg: "No hay Rutas",
      };
    }
    return { msg: "Rutas Encontrados", count: total, data: rutas };
  } catch (error) {
    throw new Error({ status: 500, msg: "Error en el Servidor" });
  }
};

const createdNewRuta = async (ruta) => {
  try {
    const newRuta = await Rutas.create(ruta);
    if (newRuta) {
      return { status: 201, msg: "Ruta Creada", data: newRuta };
    }
    return {
      status: 400,
      msg: "Ruta Faltan Datos",
    };
  } catch (error) {
    throw new Error({ status: 500, msg: "Error en el Servidor" });
  }
};

const updatedOneRuta = async (rutaID, rutaData) => {
  try {
    if (!rutaID || !rutaData) {
      return { msg: "Ingrese Valores Validos" };
    }

    const foundRuta = await Rutas.findById(rutaID);

    if (!foundRuta) {
      return { msg: "No Existe esa Ruta" };
    }

    const updatedRuta = await Rutas.findByIdAndUpdate(rutaID, rutaData, {
      new: true,
    });
    return { status: 201, msg: "Ruta Actualizada", data: updatedRuta };
  } catch (error) {
    throw new Error({ status: 500, msg: "Error en el Servidor" });
  }
};

const deletedOneRuta = async (rutaID) => {
  try {
    const deleteRuta = await Rutas.findByIdAndDelete(rutaID);
    if (!deleteRuta) {
      return {
        status: 404,
        msg: "La Ruta no Existe",
      };
    }
    return { status: 204, msg: "Ruta Eliminada" };
  } catch (error) {
    throw new Error({ status: 500, msg: "Error en el Servidor" });
  }
};

export default {
  getRutas,
  createdNewRuta,
  updatedOneRuta,
  deletedOneRuta,
};
