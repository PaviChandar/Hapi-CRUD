import { Request, ResponseObject, ResponseToolkit } from "@hapi/hapi"
import UserService from "../service"

const userService = new UserService()

class UserController {
    public createUser = async (req: Request, res: ResponseToolkit) => {
        try {
            const userSaved = await userService.createUserService(req.payload)
            return res.response({ message: "User saved successfully", userSaved })

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
            return res.response({ user }).code(200)
        }
        catch (error) {
            return res.response({ error: error }).code(500)
        }
    }

    public updateUser = async (req: Request, res: ResponseToolkit): Promise<ResponseObject> => {
        try {
            const updateUser = await userService.updateUserService(req.payload, req.params.id)
            return res.response({ message : "User updated successfully", updateUser }).code(200)
        }
        catch (error) {
            return res.response({ error: error }).code(500)
        }
    }

    public deleteUser = async (req: Request, res: ResponseToolkit): Promise<ResponseObject> => {
        try {
            const deleteUser = await userService.deleteUserService(req.params.id)
            return res.response({ message : "User deleted successfully", deleteUser }).code(200)
        }
        catch (error) {
            return res.response({ error: error }).code(500)
        }
    }

}

export default UserController