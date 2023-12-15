import catchAsync from "@/Utils/helper/catchAsync"
import { sendResponse } from "@/Utils/helper/sendResponse"
import { NextFunction, Request, Response } from "express"
import { Types } from "mongoose"
import { z } from "zod"
import { DocumentService } from "./docs.services"
import { DocsValidation } from "./docs.validation"

const getAllDocs = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const data = await DocumentService.getAll()
    sendResponse.success(res, {
        statusCode: 200,
        message: 'Successfully fetched.',
        data
    })
})
const getSpecificDoc = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const id = z.instanceof(Types.ObjectId).parse(new Types.ObjectId(req.params.id))
    const data = await DocumentService.getSpecificDoc(id)
    sendResponse.success(res, {
        statusCode: 200,
        message: 'Successfully fetched.',
        data
    })
})
const newDocs = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const payload = DocsValidation.docsZodSchema.parse(req.body)
    const data = await DocumentService.create(payload)
    sendResponse.success(res, {
        statusCode: 201,
        message: 'Successfully created.',
        data
    })
})
const updateDocs = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const id = z.instanceof(Types.ObjectId).parse(new Types.ObjectId(req.params.id))
    const payload = DocsValidation.docsZodSchema.partial().parse(req.body)
    const data = await DocumentService.updateSpecificDoc(id, payload)

    sendResponse.success(res, {
        statusCode: 200,
        message: 'Successfully updated.',
        data
    })
})
const deleteDocs = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const id = z.instanceof(Types.ObjectId).parse(new Types.ObjectId(req.params.id))
    const data = await DocumentService.deleteSpecificDoc(id)

    sendResponse.success(res, {
        statusCode: 200,
        message: 'Successfully deleted.',
        data
    })
})


export const DocumentsController = {
    getAllDocs,
    getSpecificDoc,
    newDocs,
    updateDocs,
    deleteDocs
}