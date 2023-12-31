import { Schema, model } from "mongoose";

const levelSchema = new Schema(
  {
    nombre: {
      type: String,
      required: [true, "El Nombre es Requerido"],
    },
    ruta: {
      type: Schema.Types.ObjectId,
      ref: "ruta",
      required: [true, "La Ruta es Requerido"],
    },
    duracion: {
      type: String,
      required: [true, "La Duracion es Requerida"],
    },
    estado: {
      type: String,
      required: [true, "El Estado es Requerido"],
      enum: ["finalizado", "pendiente"],
    },
  },
  { timestamps: true }
);

export default model("level", levelSchema);
