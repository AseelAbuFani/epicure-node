"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersDal = void 0;
const users_1 = __importDefault(require("../db/models/users"));
class UsersDal {
    static async createUser(user) {
        user = new users_1.default({
            firstName: user.firstName,
            lastName: user.lastName,
            password: user.password,
            email: user.email,
        });
        user.save(function (err, results) {
            if (err) {
                throw err;
            }
            return results;
        });
    }
    async updateUser(user) {
        const data = await users_1.default.findOne({
            _id: user._id,
        }).updateOne({ $set: { firstName: user.firstName, lastName: user.lastName, email: user.email } });
        return data;
    }
    static async getUserPassword(user) {
        const data = await users_1.default.findOne({
            email: user.email,
        });
        return data?.password;
    }
    static async getUserType(user) {
        const data = await users_1.default.findOne({
            email: user.email,
        });
        return data?.isAdmin;
    }
    findAll(query = null) {
        return users_1.default.find(query);
    }
    static async compareEmails(user) {
        const data = await users_1.default.findOne({
            email: user.email,
        });
        if (data?.email === user.email) {
            return true;
        }
        return false;
    }
}
exports.UsersDal = UsersDal;
