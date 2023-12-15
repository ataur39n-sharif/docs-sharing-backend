import catchAsync from "@/Utils/helper/catchAsync";
import {NextFunction, Request, Response} from "express";
import jwt from "jsonwebtoken";
import config from "@/Config";
import {z} from "zod";
import {TokenPayload} from "@/App/modules/User/user.types";

const validateAccess = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = z.string({
        required_error: 'Authorization token required'
    }).parse(req.headers.authorization?.split('Bearer ')[1])
    
    const {uid, role, email} = jwt.verify(token, config.jwt.accessToken.secret as string) as TokenPayload

    req.body.uid = uid
    req.body.role = role
    req.body.email = email

    next()
})

export const UserMiddlewares = {
    validateAccess
}