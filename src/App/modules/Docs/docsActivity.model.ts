import { Schema, model } from "mongoose";
import { IDocsActivity } from "./docs.types";

const dataSchema = new Schema<IDocsActivity>({
    uid: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    docsId: {
        type: Schema.Types.ObjectId,
        ref: 'document',
        required: true
    },
    action: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
})

export const DocsActivityModel = model('docsActivity', dataSchema)