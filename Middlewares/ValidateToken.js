import { verifyToken } from "../Helpers/Token.js";

export const authRequired = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res
        .status(401)
        .json({ message: "No token, autorizacion denegada" });
    }

    const compared = await verifyToken(token);
    if (!compared) {
      return res
        .status(401)
        .json({ message: "No token, autorizacion denegada" });
    }
    req.user = compared;
    next();
  } catch (error) {
    return res.status(500).json({ message: "Error en el servidor" });
  }
};