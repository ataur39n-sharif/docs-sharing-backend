import AuthRoutes from "@/App/modules/Auth/auth.routes";
import { Router } from "express";
import path from "path";
import swaggerUI from "swagger-ui-express";
import YAML from "yamljs";
const rootRouter = Router()
const docs = YAML.load(path.join(process.cwd(), "docs.yml"))

rootRouter
    .use('/auth', AuthRoutes)
    .use('/docs', swaggerUI.serve, swaggerUI.setup(docs))


export default rootRouter