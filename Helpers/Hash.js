import { hashSync, compareSync } from "bcrypt";

export function encryptPassword(password) {
  try {
    const hashedPassword = hashSync(password, 10);
    return hashedPassword;
  } catch (error) {
    throw new Error({ error: "Error al encriptar la Password" });
  }
}

export function comparePassword(plainPassword, hashedPassword) {
  try {
    const isMatch = compareSync(plainPassword, hashedPassword);
    return isMatch;
  } catch (error) {
    throw new Error("Error al comparas las Password");
  }
}
