import {Router} from "express";
import {AuthController} from "@/App/modules/Auth/auth.controller";
import {AuthMiddleware} from "@/App/modules/Auth/auth.middlewares";
import {UserMiddlewares} from "@/App/modules/User/user.middlewares";
import AccessLimit from "@/Middlewares/AccessLimit";
import {ERole} from "@/App/modules/Auth/auth.types";

const AuthRoutes = Router()

AuthRoutes
    .post('/register', AuthController.singUp)
    .post(
        '/create-account',
        AccessLimit([ERole.admin]),
        AuthController.createAccountByAdmin
    )
    .post('/login',
        AuthMiddleware.userExists,
        AuthController.login
    )
    .post('/admin-login',
        AuthMiddleware.userExists,
        AuthController.adminLogin
    )
    .post('/resend-confirmation-mail', AuthController.resendConfirmationMail)
    // .post('/logout', AuthMiddleware)
    .post('/forget-password', AuthController.forgetPassword)
    .patch('/reset-password', AuthController.resetPassword)
    .post('/confirm-account', AuthController.confirmAccount)
    .patch(
        '/change-password',
        UserMiddlewares.validateAccess,
        AuthController.changePassword
    )

export default AuthRoutes