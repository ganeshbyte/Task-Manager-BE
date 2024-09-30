import { CustomAPIError } from "../errors/custom.error.js";

export const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res
      .status(err.statusCode)
      .json({ err: err.message, statusCode: err.statusCode });
  }
  res.status(500).json({ error: err });
};
