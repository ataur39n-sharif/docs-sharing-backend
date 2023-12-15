import AuthRoutes from "@/App/modules/Auth/auth.routes";
import DocumentRoutes from "@/App/modules/Docs/docs.routes";
import { Router } from "express";
const rootRouter = Router()

rootRouter
    .use('/auth', AuthRoutes)
    .use('/documents', DocumentRoutes)


export default rootRouter