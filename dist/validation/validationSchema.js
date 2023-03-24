"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidationSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const userValidationSchema = (input) => {
    const userSchema = joi_1.default.object({
        firstname: joi_1.default.string()
            .min(5)
            .required(),
        lastname: joi_1.default.string()
            .min(5)
            .required(),
        gender: joi_1.default.string()
            .required(),
        age: joi_1.default.number()
            .precision(2)
            .required()
    });
    return userSchema.validate(input);
};
exports.userValidationSchema = userValidationSchema;
