import { Router } from 'express';
import rootRouter from '.';
const configRoutes = Router()

configRoutes
    .get('/', (req, res) => {
        res.redirect('/api/v1/docs')
    })
    .use('/api/v1',rootRouter)

export default configRoutes