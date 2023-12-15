/*
* routes
* GET - /users => SEARCH + FILTER
* GET - /users/:id => headers-authorization
* PATCH - /users/:id => headers-authorization
* PATCH - /change-password => headers-authorization
* * DELETE - /users/:id => headers-authorization
* */

import {Router} from "express";
import {UserController} from "@/App/modules/User/user.controller";

const UserRoutes = Router()


UserRoutes
    .get('/users', UserController.getUser)

export default UserRoutes