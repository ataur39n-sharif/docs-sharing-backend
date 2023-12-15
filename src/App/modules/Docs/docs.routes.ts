import { Router } from "express";
import { DocumentsController } from "./docs.controller";

const DocumentRoutes = Router()

DocumentRoutes
    .get('/', DocumentsController.getAllDocs)
    .get('/:id', DocumentsController.getSpecificDoc)
    .post('/', DocumentsController.newDocs)
    .patch('/:id', DocumentsController.updateDocs)
    .delete('/:id', DocumentsController.deleteDocs)


export default DocumentRoutes