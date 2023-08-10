import { Schema, model } from "mongoose";

const RolesSchema = new Schema({
    nombre: {
        type: String,
        required: [true, "El Nombre es Requerido"]
    },
    rol:{
        type:String,
        required:[true,"El rol Es Requerido"]
    }
}, { timestamps: true })

export default model("role",RolesSchema)