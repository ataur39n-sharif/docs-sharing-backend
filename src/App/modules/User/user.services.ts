import {UserModel} from "@/App/modules/User/user.model";
import {Types} from "mongoose";

const userInfo = async (uid: string | Types.ObjectId) => {
    return UserModel.findOne({
        _id: uid,
    }).lean()
}


export const UserService = {
    userInfo
}