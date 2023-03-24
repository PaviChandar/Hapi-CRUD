import { Request, ResponseObject, ResponseToolkit } from "@hapi/hapi"
import UserService from "../service"

const userService = new UserService()

class UserController {
    public createUser = async (req: Request, res: ResponseToolkit) => {
        try {
            const userSaved = await userService.createUserService(req.payload)
            console.log("in user controller : ", userSaved);
            return res.response({ message: userSaved, userSaved })

        } catch (error) {
            return res.response({ error: error }).code(500)
        }
    }

    public getUsers = async (req: Request, res: ResponseToolkit): Promise<ResponseObject> => {
        try {
            const users = await userService.getUsersService()
            return res.response({ message: "successfully retrieved users", users }).code(200)
        }
        catch (error) {
            return res.response({ error: error }).code(500)
        }
    }

    public getUser = async (req: Request, res: ResponseToolkit): Promise<ResponseObject> => {
        try {
            const user = await userService.getUserService(req.params.id)
            console.log("in get user : ", user)
            return res.response({ user }).code(200)
        }
        catch (error) {
            return res.response({ error: error }).code(500)
        }
    }

    public updateUser = async (req: Request, res: ResponseToolkit): Promise<ResponseObject> => {
        try {
            const updateUser = await userService.updateUserService(req.payload, req.params.id)
            console.log("updated user : ", updateUser)
            console.log("user id in update : ", req.params.id)
            return res.response({ updateUser }).code(200)
        }
        catch (error) {
            return res.response({ error: error }).code(500)
        }
    }

    public deleteUser = async (req: Request, res: ResponseToolkit): Promise<ResponseObject> => {
        try {
            const deleteUser = await userService.deleteUserService(req.params.id)
            console.log("user id in delete : ", req.params.id)
            return res.response({ deleteUser }).code(200)
        }
        catch (error) {
            return res.response({ error: error }).code(500)
        }
    }

}

export default UserController