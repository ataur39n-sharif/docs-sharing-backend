import {model, Schema} from "mongoose";
import {IUser, IUserModel} from "@/App/modules/User/user.types";
import {NameSchema} from "@/Utils/schema/name.schema";
import {AddressSchema} from "@/Utils/schema/address.schema";

const dataSchema = new Schema<IUser, IUserModel>({
    name: {
        type: NameSchema,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    address: {
        type: AddressSchema,
    }
}, {
    timestamps: true,
    versionKey: false
})


export const UserModel = model<IUser, IUserModel>('user', dataSchema)