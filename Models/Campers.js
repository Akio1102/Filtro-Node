import { Schema, model } from "mongoose";

const campersSchema = new Schema(
  {
    nombre: {
      type: String,
      required: [true, "El Nombre es Requerido"],
      trim: true,
    },
    tipoId: {
      type: String,
      required: [true, "El Tipo Identificador es Requerido"],
      enum: ["T.I", "C.C"],
    },
    nroId: {
      type: Number,
      required: [true, "El Numero Identificador es Requerido"],
      minlength: [10, "El nombre de usuario debe tener al menos 10 caracteres"],
      maxlength: [
        10,
        "El nombre de usuario no puede superar los 10 caracteres",
      ],
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: [true, "El Email es Requerido"],
      unique: true,
      validate: {
        validator: (email) => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(email);
        },
        message: "Formato de correo Email no válido",
      },
    },
    password: {
      type: String,
      required: [true, "El Password es Requerido"],
      minlength: [8, "La Password debe tener al menos 8 caracteres"],
    },
    level: {
      type: Schema.Types.ObjectId,
      ref: "level",
      required: [true, "El Level es Requerido"],
    },
    levelState: {
      type: Boolean,
      required: [true, "El LevelState es Requerido"],
    },
    estado: {
      type: Boolean,
      required: [true, "El Estado es Requerido"],
    },
    imagen: {
      type: String,
    },
    rol: {
      type: Schema.Types.ObjectId,
      ref: "role",
      required: [true, "El Rol es Requerido"],
    },
    promedio: {
      type: Number,
      required: [true, "El Promedio es Requerido"],
    },
  },
  { timestamps: true }
);

export default model("camper", campersSchema)