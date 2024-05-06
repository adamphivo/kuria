import express from "express";
import cors from "cors";
import morgan from "morgan";
import { errorHandler } from "@/middlewares";
import Routes from "./routes";

const app = express();

// CORS
app.use(cors());

// JSON
app.use(express.json());

// Logger
app.use(morgan("dev"));

// Routes
app.use("/", Routes);

// Error Handler
app.use(errorHandler);

export { app };
