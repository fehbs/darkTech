import dotenv from "dotenv";
dotenv.config();
import connectToDatabase from "./database.js";
import express from "express";

connectToDatabase();
const app = express();

app.use(express.json());
