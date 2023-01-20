"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const users_dal_1 = require("../dal/users.dal");
const bcrypt_1 = __importDefault(require("bcrypt"));
class UsersService {
    async getUsers() {
        const dal = new users_dal_1.UsersDal();
        const res = await dal.findAll();
        return res;
    }
    static async register(user) {
        const saltRounds = 10;
        const isUserExist = await users_dal_1.UsersDal.compareEmails(user);
        if (isUserExist) {
            return { status: "failure", message: "User already exist" };
        }
        bcrypt_1.default.hash(user.password, saltRounds, async function (err, hash) {
            user["password"] = hash;
            const res = await users_dal_1.UsersDal.createUser(user);
            return res;
        });
    }
    static async login(args) {
        const hashedPasswordFromDB = await users_dal_1.UsersDal.getUserPassword(args);
        const userType = await users_dal_1.UsersDal.getUserType(args);
        if (!hashedPasswordFromDB) {
            return { status: "failure", message: "Incorrect userName or password" };
        }
        const response = await bcrypt_1.default.compare(args.password, hashedPasswordFromDB);
        if (response) {
            if (userType) {
                return { status: "success", message: "Welcome!", admin: true };
            }
            return { status: "success", message: "Welcome!", admin: false };
        }
        return { status: "failure", message: "Incorrect userName or password" };
    }
    async updateUser(user) {
        const dal = new users_dal_1.UsersDal();
        const res = await dal.updateUser(user);
        return res;
    }
}
exports.UsersService = UsersService;
