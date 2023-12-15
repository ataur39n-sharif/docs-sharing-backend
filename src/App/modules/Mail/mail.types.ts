import {JwtPayload} from "jsonwebtoken";

export type TForgetPassPayload = {
    userEmail: string,
}

export type TConfirmAccountPayload = {
    name: string,
    userEmail: string,
}

export interface IJWTConfirmAccountPayload extends JwtPayload {
    name: string,
    userEmail: string,
}

export interface IContactUsPayload {
    customerName: string,
    customerEmail: string,
    phone?: string,
    subject: string,
    message: string
}