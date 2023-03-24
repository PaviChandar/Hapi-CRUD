class UserRepository {
    public createUserRepository = async (user: any): Promise<String> => {
        const dbResult = await user.save()
        return dbResult
        // return "User saved Successfully"
    }

    public getUsersRepository = async (User: any): Promise<Object> => {
        const dbResult = await User.find()
        return dbResult
    }

    public getUserRepository = async (User: any, userId: any): Promise<Object> => {
        const dbResult = await User.findById(userId)
        return dbResult
    }

    public updateUserRepository = async (User: any, userPayload: any, userId: any): Promise<Object> => {
        const dbResult = await User.findByIdUpdate(userId, userPayload)
        return dbResult
    }

    public deleteUserRepository = async (User: any, userId: any): Promise<Object> => {
        const dbResult = await User.findByIdAndDelete(userId)
        return dbResult
    }

}

export default UserRepository