import { Router } from 'express';
import rootRouter from '.';
const configRoutes = Router()

configRoutes
    .use('/api/v1',rootRouter)

export default configRoutes