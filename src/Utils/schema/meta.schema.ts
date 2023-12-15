import {Schema} from "mongoose";
import {TMetadata} from "@/Utils/types/customSchema.type";

export const MetaDataSchema = new Schema<TMetadata>({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
}, {
    _id: false,
    versionKey: false
})