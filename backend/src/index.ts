import "dotenv/config";
import express from "express";
import connectToDatabase from "./config/db";
import { APP_ORIGIN, NODE_ENV, PORT } from "./constants/env";
import cors from "cors";
import cookieParser from "cookie-parser";
import errorhandler from "./middleware/errorhandler";
import catchError from "./utils/catchErrors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: APP_ORIGIN,
    credentials: true,
  })
);
app.use(cookieParser());

app.get(
  "/",
  catchError(async (req, res, next) => {
    throw new Error("This is a test error");
    return res.status(200).json({
      status: "healthy",
    });
  })
);

app.use(errorhandler);
app.listen(3000, async () => {
  console.log(`Server running on port: ${PORT} in ${NODE_ENV} enviourment`);
  await connectToDatabase();
});
