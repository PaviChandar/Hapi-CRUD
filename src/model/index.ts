import { Document, model, Schema } from "mongoose"

export interface IUser extends Document {
    firstname: string,
    lastname: string,
    gender: string,
    age: number
}

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
})

export default model<IUser>('User', userSchema)