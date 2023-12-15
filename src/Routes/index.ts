import AuthRoutes from "@/App/modules/Auth/auth.routes";
import { Router } from "express";
const rootRouter = Router()

rootRouter
    .use('/auth', AuthRoutes)


export default rootRouter