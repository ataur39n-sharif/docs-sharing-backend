import jwt from "jsonwebtoken";
import config from "@/Config";
import {sendAMail} from "@/Utils/helper/mailer";
import {TConfirmAccountPayload, TForgetPassPayload} from "@/App/modules/Mail/mail.types";

const callbackUrl = config.node_env === 'prod' ? config.login : 'http://localhost:9000/api/v1/auth/confirm-account'
const confirmAccount = async ({name, userEmail}: TConfirmAccountPayload) => {
    try {

        //create a token
        const token = jwt.sign({userEmail, name}, String(config.jwt.common), {
            expiresIn: "5m"
        })

        //create verify url
        const link = `${callbackUrl}?token=${token}`
        const html = `
        <div>
            <h3>Confirmation Mail</h3>
            <p>Here is the last step - <b>Verify your email</b> .</p>
            <p>To verify your email click this confirm link - <a target="_blank" href=${link}>Confirm</a></p>
            <p>Note : This email is only valid for 5min.</p>
        </div>
        `

        const res = await sendAMail({
            receiverEmail: userEmail,
            subject: "Verify your email",
            html,
            category: 'verify-email'
        })
        // if (res.messageId) {
        //     return true
        // } else {
        //     throw new CustomError('Please contact to support', 500)
        // }

    } catch (e) {
        console.log((e as Error).message)
        throw Error()
    }
}

const forgetPassword = async ({userEmail}: TForgetPassPayload) => {

    //create a token
    const token = jwt.sign({userEmail}, String(config.jwt.common), {
        expiresIn: "5m"
    })

    //create verify url
    const link = `${callbackUrl}?token=${token}`

    const html = `
        <div>
            <h5>Thank's for your request .</h5>
            <p>Follow this mail instruction for - <b> recover your account</b> .</p>
            <p>To recover your account click this link - <a target="_blank" href=${link}>Go next</a></p>
            <strong>Note : This email is only valid for 5min.</strong>
        </div>
        `

    const res = await sendAMail({
        receiverEmail: userEmail,
        subject: "Account recovery request",
        html,
        category: 'account-recovery'
    })
}


export const MailService = {
    confirmAccount,
    forgetPassword
}