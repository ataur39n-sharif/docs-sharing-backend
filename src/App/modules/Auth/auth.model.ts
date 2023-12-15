import {model, Schema} from "mongoose";
import {HashHelper} from "@/Utils/helper/hashHelper";
import {EAccountStatus, ERole, IAuthModel, IAuthProperty} from "./auth.types";

const dataSchema = new Schema<IAuthProperty, IAuthModel>({
    email: {
        type: String,
        required: true,
        validate: {
            validator: async (value: string): Promise<boolean> => {
                const result = await AuthModel.countDocuments({email: value})
                return result === 0
            },
            message: "Email must be unique.",
        }
    },
    phone: {
        type: String,
        required: true,
        validate: {
            validator: async (value: string): Promise<boolean> => {
                const result = await AuthModel.countDocuments({phone: value})
                return result === 0
            },
            message: "Phone number must be unique.",
        }
    },
    password: {
        type: String,
        required: true
    },
    uid: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    role: {
        type: String,
        enum: Object.values(ERole),
        required: true
    },
    status: {
        type: String,
        enum: Object.values(EAccountStatus),
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
})

dataSchema.pre('save', async function (next) {
    const hash = await HashHelper.generateHashPassword(this.password)
    this.password = hash
    next()
})

dataSchema.static("isUserExist", async function (
    key: keyof IAuthProperty,
    value: string | number | boolean
): Promise<boolean> {
    const user: IAuthProperty | null = await AuthModel.findOne({[key]: value})
    return !!user
})

export const AuthModel = model<IAuthProperty, IAuthModel>('auth', dataSchema)