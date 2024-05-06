import type { ErrorRequestHandler } from "express";

const DEFAULT_ERROR_MESSAGE = "Error ❌";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const message = err instanceof Error ? err.message : DEFAULT_ERROR_MESSAGE;

  res.status(500).send(message);
};

export default errorHandler;
