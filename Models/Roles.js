import { Schema, model } from "mongoose";

const RolesSchema = new Schema(
  {
    rol: {
      type: String,
      required: [true, "El rol Es Requerido"],
      enum: ["camperRol", "trainerRol", "gerenteRol"],
    },
  },
  { timestamps: true }
);

export default model("role", RolesSchema);
