import { ErrorRequestHandler } from "express";

const errorhandler: ErrorRequestHandler = (error, req, res, next) => {
  console.log(`PATH: ${req.path}`, error);
  res.status(500).send("Internal Server error");
};

export default errorhandler;
