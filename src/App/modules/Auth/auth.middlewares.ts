import catchAsync from "@/Utils/helper/catchAsync";
import {NextFunction, Request, Response} from "express";
import {pickFunction} from "@/Utils/helper/pickFunction";
import CustomError from "@/Utils/errors/customError.class";
import {AuthModel} from "./auth.model";

const userExists = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const {email, phone} = pickFunction(req.body, ['email', 'phone'])
    let user = null
    if (email) {
        user = await AuthModel.isUserExist('email', email)
    } else if (phone) {
        user = await AuthModel.isUserExist('phone', phone)
    }

    if (!user) throw new CustomError('Invalid user', 404)
    next()
})

export const AuthMiddleware = {
    userExists
}