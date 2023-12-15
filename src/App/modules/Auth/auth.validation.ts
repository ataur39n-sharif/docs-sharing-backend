import {z, ZodType} from "zod";
import {EAccountStatus, ERole, IAuthProperty} from "./auth.types";
import {Types} from "mongoose";

export interface IAuthWithName extends IAuthProperty {
    name: {
        firstName: string
        lastName: string
    }
}

const authPayload = z.object({
    name: z.object({
        firstName: z.string(),
        lastName: z.string(),
    }),
    email: z.string().email(),
    password: z.string(),
    phone: z.string()
})

const createAccount: ZodType<IAuthWithName> = authPayload.extend({
    uid: z.instanceof(Types.ObjectId, {
        message: 'Something is wrong. '
    }),
    role: z.enum([ERole.admin, ERole.customer, ERole.administration, ERole.editor]),
    status: z.enum([EAccountStatus.pending, EAccountStatus.active, EAccountStatus.blocked])
})

const singIn: ZodType<Partial<IAuthProperty>> = z.object({
    email: z.string().email().optional(),
    phone: z.string().optional(),
    password: z.string()
}).refine((data) => {
    return (data.email && !data.phone) || (!data.email && data.phone);
}, {
    message: "Either 'email' or 'phone' field should be provided.",
    path: ["email", "phone"],
})

const changePassword = z.object({
    email: z.string(),
    oldPassword: z.string(),
    newPassword: z.string()
})

export const AuthValidation = {
    authPayload,
    createAccount,
    singIn,
    changePassword
}