import {z, ZodType} from "zod";
import {IUser} from "@/App/modules/User/user.types";

const user: ZodType<IUser> = z.object({
    name: z.object({
        firstName: z.string(),
        lastName: z.string(),
    }),
    email: z.string(),
    password: z.string()
})

export const UserValidation = {}