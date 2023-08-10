import { Schema, model } from "mongoose";

const CentrosSchema = new Schema({
    nombre: {
        type: String,
        required: [true, "El Nombre es Requerido"]
    },
    descripcion: {
        type: String,
        required: [true, "La Descripcion es Requerida"]
    },
    ciudad: {
        type: String,
        required: [true, "La Ciudad es Requerida"]
    },
    estado: {
        type: Boolean,
        default: true
    }
}, { timestamps: true })

export default model("centro", CentrosSchema)