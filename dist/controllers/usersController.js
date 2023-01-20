"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const users_service_1 = require("../services/users.service");
class UsersController {
    static async getUsers(req, res) {
        try {
            const service = new users_service_1.UsersService();
            const users = await service.getUsers();
            return res.send(users);
        }
        catch (error) {
            return res.send(error);
        }
    }
    static async register(req, res) {
        const args = req.body;
        const user = await users_service_1.UsersService.register(args);
        res.send(user);
    }
    static async login(req, res) {
        const args = req.body;
        const user = await users_service_1.UsersService.login(args);
        res.send(user);
    }
    static async updateUser(req, res) {
        try {
            const params = req.body;
            const service = new users_service_1.UsersService();
            const user = await service.updateUser(params);
            return res.send(user);
        }
        catch (error) {
            return res.send(error);
        }
    }
}
exports.UsersController = UsersController;
