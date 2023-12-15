import {Router} from "express";
import {MailController} from "@/App/modules/Mail/mail.controller";

const MailRoutes = Router()

MailRoutes
    .post('/contact-us', MailController.contactUs)
export default MailRoutes