import { Types } from "mongoose";
import { z } from "zod";

const docsZodSchema = z.object({
    uid: z.instanceof(Types.ObjectId),
    title: z.string(),
    body: z.string(),
})

const docsActivityZodSchema = z.object({
    uid: z.instanceof(Types.ObjectId),
    docsId: z.instanceof(Types.ObjectId),
    action: z.string(),
})




export const DocsValidation = {
    docsZodSchema,
    docsActivityZodSchema
}