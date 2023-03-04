import dotenv from "dotenv";
import connectToDatabase from "./database.js";
import express from "express";

import productRoutes  from './routes/ProductRoutes.js';

dotenv.config();
connectToDatabase();
const app = express();

app.use(express.json());

const port = process.env.PORT || 9999;

app.use('/api/products', productRoutes);

app.listen(port, () => {
    console.log(`THE SERVER IS RUNNING AT PORT => http://localhost:${port}`)
});
