"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const controller_1 = __importDefault(require("../controller"));
const joi_1 = __importDefault(require("joi"));
const userController = new controller_1.default();
const routes = (server) => {
    server.route({
        method: 'POST',
        path: '/user',
        handler: userController.createUser
    });
    server.route({
        method: 'GET',
        path: '/users',
        handler: userController.getUsers
    });
    server.route({
        method: 'GET',
        path: '/user/{id}',
        handler: userController.getUser,
        options: {
            validate: {
                params: joi_1.default.object({
                    id: joi_1.default.string().length(24)
                })
            }
        }
    });
    server.route({
        method: 'PUT',
        path: '/user/{id}',
        handler: userController.updateUser,
        options: {
            validate: {
                params: joi_1.default.object({
                    id: joi_1.default.string().length(24)
                })
            }
        }
    });
    server.route({
        method: 'DELETE',
        path: '/user/{id}',
        handler: userController.deleteUser,
        options: {
            validate: {
                params: joi_1.default.object({
                    id: joi_1.default.string().length(24)
                })
            }
        }
    });
};
exports.routes = routes;
