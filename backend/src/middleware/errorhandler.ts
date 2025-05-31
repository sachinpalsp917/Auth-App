import { ErrorRequestHandler } from "express";
import { INTERNAL_SERVER_ERROR } from "../constants/http";

const errorhandler: ErrorRequestHandler = (error, req, res, next) => {
  console.log(`PATH: ${req.path}`, error);
  res.status(INTERNAL_SERVER_ERROR).send("Internal Server error");
};

export default errorhandler;
