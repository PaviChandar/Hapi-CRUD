"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const repositories_1 = __importDefault(require("../repositories"));
const validationSchema_1 = require("../validation/validationSchema");
const index_1 = __importDefault(require("../model/index"));
const userRepository = new repositories_1.default();
class UserService {
    constructor() {
        this.createUserService = (userPayload) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const validation = (0, validationSchema_1.userValidationSchema)(userPayload);
            if ((_a = validation.error) === null || _a === void 0 ? void 0 : _a.isJoi) {
                const errors = [];
                validation.error.details.forEach((detail) => {
                    console.log(detail.path.toString());
                    let error = {
                        [detail.path.toString()]: detail.message
                    };
                    errors.push(error);
                });
                return errors;
            }
            const user = new index_1.default(userPayload);
            const userSaved = yield userRepository.createUserRepository(user);
            return userSaved;
        });
        this.getUsersService = () => __awaiter(this, void 0, void 0, function* () {
            const users = yield userRepository.getUsersRepository(index_1.default);
            return users;
        });
        this.getUserService = (userId) => __awaiter(this, void 0, void 0, function* () {
            const user = yield userRepository.getUserRepository(index_1.default, userId);
            return user;
        });
        this.updateUserService = (userPayload, userId) => __awaiter(this, void 0, void 0, function* () {
            var _b;
            const validation = (0, validationSchema_1.userValidationSchema)(userPayload);
            if ((_b = validation.error) === null || _b === void 0 ? void 0 : _b.isJoi) {
                const errors = [];
                validation.error.details.forEach((detail) => {
                    console.log(detail.path.toString());
                    let error = {
                        [detail.path.toString()]: detail.message
                    };
                    errors.push(error);
                });
                return errors;
            }
            const updateUser = yield userRepository.updateUserRepository(index_1.default, userPayload, userId);
            return updateUser;
        });
        this.deleteUserService = (userId) => __awaiter(this, void 0, void 0, function* () {
            const deleteUser = yield userRepository.deleteUserRepository(index_1.default, userId);
            return deleteUser;
        });
    }
}
exports.default = UserService;
