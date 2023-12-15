import catchAsync from "@/Utils/helper/catchAsync";
import {NextFunction, Request, Response} from "express";
import {pickFunction} from "@/Utils/helper/pickFunction";
import {z} from "zod";
import {UserService} from "@/App/modules/User/user.services";
import {Types} from "mongoose";
import {MongoHelper} from "@/Utils/helper/mongoHelper";
import {sendResponse} from "@/Utils/helper/sendResponse";

const getUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const payload = pickFunction(req.body, ['uid'])
    const id = z.instanceof(Types.ObjectId).parse(MongoHelper.convertToObjectId(payload.uid))
    const data = await UserService.userInfo(id)

    sendResponse.success(res, {
        statusCode: 200,
        message: 'Successfully retrieved user information.',
        data
    })
})

const changePassword = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const data = pickFunction(req.body, ['password', 'email'])
    const validate = z.object({
        email: z.string(),
        password: z.string()
    }).parse(data)

    console.log(validate)
})
export const UserController = {
    getUser,
    changePassword
}