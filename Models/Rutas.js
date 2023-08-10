import { Schema, model } from "mongoose";

const rutasSchema = new Schema(
  {
    nombre: {
      type: String,
      required: [true, "El Nombre es Requerido"],
    },
    centro: {
      type: Schema.Types.ObjectId,
      ref: "centro",
      required: [true, "El Centro es Requerido"],
    },
  },
  { timestamps: true }
);

export default model("ruta", rutasSchema)