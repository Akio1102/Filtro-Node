export function sendSuccessResponse(res, data, message, statusCode = 200) {
  res.status(statusCode).json({ message, data });
}

export function sendErrorResponse(res, err, statusCode = 500) {
  console.log(err);
  res.status(statusCode).send({ error: "Error en el Server", message: err });
}

export const handleResponse = (res, obj) => {
  if (obj.status === 404) {
    return sendErrorResponse(res, obj.msg, obj.status);
  }
  sendSuccessResponse(res, obj.data, obj.msg);
};
