import mongoose from "mongoose";

export default async function (mongoURL) {
  try {
    const connectionDB = await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Conexion`);
    return connectionDB;
  } catch (error) {
    console.log(error.message);
  }
}
