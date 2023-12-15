/* 
    express application root file
*/

import express, {Application} from 'express'
import cors from 'cors'
import {v2 as cloudinary} from 'cloudinary';
import globalErrorHandler from "@/Middlewares/Errors/globalErrorHandler";
import notFoundHandler from "@/Middlewares/Errors/notFoundHandler";
import configRoutes from './Routes/config';
import config from "@/Config";

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
