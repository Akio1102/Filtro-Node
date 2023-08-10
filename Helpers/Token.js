import { SignJWT, jwtVerify } from "jose";
import { Config } from "../../../Server/Config/config.js";

const encoder = new TextEncoder();

export const createToken = async (user) => {
  try {
    const { _id } = user;

    const jwtConstructor = new SignJWT({
      id: _id.toString(),
    });

    const token = await jwtConstructor
      .setProtectedHeader({
        alg: "HS256",
        typ: "JWT",
      })
      .setIssuedAt()
      .setExpirationTime("1h")
      .sign(encoder.encode(Config.JWT_PRIVATE_KEY));

    return token;
  } catch (error) {
    throw new Error(`Error al generar el token ${error.message}`);
  }
};

export const verifyToken = async (token) => {
  try {
    const { payload } = await jwtVerify(
      token,
      encoder.encode(Config.JWT_PRIVATE_KEY)
    );
    return payload;
  } catch (error) {
    throw new Error(`Token invalido ${error.message}`);
  }
};
