import { Schema, model } from "mongoose";
import { IDocs } from "./docs.types";

const dataSchema = new Schema<IDocs>({
    uid: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
})

export const DocsModel = model('document', dataSchema)