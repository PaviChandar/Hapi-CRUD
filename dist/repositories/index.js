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
Object.defineProperty(exports, "__esModule", { value: true });
class UserRepository {
    constructor() {
        this.createUserRepository = (user) => __awaiter(this, void 0, void 0, function* () {
            const dbResult = yield user.save();
            return dbResult;
        });
        this.getUsersRepository = (User) => __awaiter(this, void 0, void 0, function* () {
            const dbResult = yield User.find();
            return dbResult;
        });
        this.getUserRepository = (User, userId) => __awaiter(this, void 0, void 0, function* () {
            const dbResult = yield User.findById(userId);
            return dbResult;
        });
        this.updateUserRepository = (User, userPayload, userId) => __awaiter(this, void 0, void 0, function* () {
            const dbResult = yield User.findByIdAndUpdate(userId, userPayload);
            return dbResult;
        });
        this.deleteUserRepository = (User, userId) => __awaiter(this, void 0, void 0, function* () {
            const dbResult = yield User.findByIdAndDelete(userId);
            return dbResult;
        });
    }
}
exports.default = UserRepository;
