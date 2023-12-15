import catchAsync from "@/Utils/helper/catchAsync";
import {NextFunction, Request, Response} from "express";
import {pickFunction} from "@/Utils/helper/pickFunction";
import {IContactUsPayload} from "@/App/modules/Mail/mail.types";
import {z} from "zod";
import {sendAMail} from "@/Utils/helper/mailer";
import {sendResponse} from "@/Utils/helper/sendResponse";

const contactUs = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const payload = pickFunction<IContactUsPayload, keyof IContactUsPayload>(req.body, ['customerEmail', 'customerName', 'subject', 'message', 'phone'])
    const validation = z.object({
        customerEmail: z.string(),
        customerName: z.string(),
        subject: z.string(),
        phone: z.string().optional(),
        message: z.string()
    }).parse(payload)

    const html: string = `
    <h4>A copy of User submission from Contact us:</h4>
    <p>Name : ${validation.customerName} </p>
    <p>Email : ${validation.customerEmail}</p>
    <p>Message : ${validation.message}</p>
    `

    const response = await sendAMail({
        receiverEmail: 'admin@dreamfurniturebd.com',
        subject: validation.subject,
        category: 'contact-us',
        html
    })

    sendResponse.success(res, {
        statusCode: 200,
        message: 'Thank you. We will reach you soon.'
    })

});

export const MailController = {
    contactUs
}