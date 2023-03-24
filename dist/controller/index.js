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
const service_1 = __importDefault(require("../service"));
const userService = new service_1.default();
class UserController {
    constructor() {
        this.createUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const userSaved = yield userService.createUserService(req.payload);
                console.log("in user controller : ", userSaved);
                return res.response({ message: userSaved, userSaved });
            }
            catch (error) {
                return res.response({ error: error }).code(500);
            }
        });
        this.getUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield userService.getUsersService();
                return res.response({ message: "successfully retrieved users", users }).code(200);
            }
            catch (error) {
                return res.response({ error: error }).code(500);
            }
        });
        this.getUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield userService.getUserService(req.params.id);
                console.log("in get user : ", user);
                return res.response({ user }).code(200);
            }
            catch (error) {
                return res.response({ error: error }).code(500);
            }
        });
        this.updateUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const updateUser = yield userService.updateUserService(req.payload, req.params.id);
                console.log("updated user : ", updateUser);
                console.log("user id in update : ", req.params.id);
                return res.response({ updateUser }).code(200);
            }
            catch (error) {
                return res.response({ error: error }).code(500);
            }
        });
        this.deleteUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const deleteUser = yield userService.deleteUserService(req.params.id);
                console.log("user id in delete : ", req.params.id);
                return res.response({ deleteUser }).code(200);
            }
            catch (error) {
                return res.response({ error: error }).code(500);
            }
        });
    }
}
exports.default = UserController;
