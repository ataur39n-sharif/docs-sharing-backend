/* 
    express application root file
*/

import config from "@/Config";
import globalErrorHandler from "@/Middlewares/Errors/globalErrorHandler";
import notFoundHandler from "@/Middlewares/Errors/notFoundHandler";
import { v2 as cloudinary } from 'cloudinary';
import cors from 'cors';
import express, { Application } from 'express';
import configRoutes from './Routes/config';

const app: Application = express()
app.use(express.json())
app.use(cors())
app.use('/', configRoutes)
app.use(globalErrorHandler)
app.use(notFoundHandler)

const {
    api_key, cloud_name, api_secret
} = config

cloudinary.config({
    cloud_name,
    api_key,
    api_secret
});

export default app
