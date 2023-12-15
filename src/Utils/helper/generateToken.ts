import jwt from "jsonwebtoken"
import config from "@/Config";

const accessToken = <T extends object>(data: T): string => {
    const token = jwt.sign({...data}, String(config.jwt.accessToken.secret), {
        expiresIn: config.jwt.accessToken.exp
    })
    return token
}

const refreshToken = <T extends object>(data: T): string => {
    const token = jwt.sign({...data}, String(config.jwt.refreshToken.secret), {
        expiresIn: config.jwt.refreshToken.exp
    })
    return token
}

export const generateToken = {
    accessToken,
    refreshToken
}