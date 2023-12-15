import { Types } from "mongoose";
import { DocsModel } from "./docs.model";
import { IDocs } from "./docs.types";

const create = async (payload: IDocs) => {
    const data = await DocsModel.create(payload);
    return data
}

const getAll = async () => {
    const data = await DocsModel.find().lean()
    return data
}

const getSpecificDoc = async (id: string | Types.ObjectId) => {
    const data = await DocsModel.findOne({
        _id: id
    }).lean()
    return data
}

const updateSpecificDoc = async (id: string | Types.ObjectId, payload: Partial<IDocs>) => {
    const data = await DocsModel.findOneAndUpdate({
        _id: id
    }, {
        $set: {
            ...payload
        }
    }, {
        new: true
    }).lean()
    return data
}

const deleteSpecificDoc = async (id: string | Types.ObjectId) => {
    const data = await DocsModel.findOneAndDelete({
        _id: id
    }).lean()
    return data
}


export const DocumentService = {
    getAll,
    getSpecificDoc,
    create,
    updateSpecificDoc,
    deleteSpecificDoc,
}