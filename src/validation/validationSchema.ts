import Joi from "joi"

export const userValidationSchema = (input: Object) => {
    const userSchema = Joi.object(
        {
            firstname: Joi.string()
                .min(5)
                .required(),
            lastname: Joi.string()
                .min(5)
                .required(),
            gender: Joi.string()
                .required(),
            age: Joi.number()
                .precision(2)
                .required()
        }
    )
    return userSchema.validate(input)
}