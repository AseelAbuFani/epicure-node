"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChefsDal = void 0;
const chefs_1 = __importDefault(require("../db/models/chefs"));
class ChefsDal {
    createChef(chef) {
        chef = new chefs_1.default({
            name: chef.name,
            discription: chef.discription,
            chefImage: chef.chefImage,
        });
        chef.save(function (err, results) {
            if (err) {
                throw err;
            }
            return results;
        });
    }
    async updateChef(chef) {
        const data = await chefs_1.default.findOne({
            _id: chef._id,
        }).updateOne({ $set: { name: chef.name } });
        return data;
    }
    findAll(query = null) {
        return chefs_1.default.find(query);
    }
    async getChef(param) {
        const data = await chefs_1.default.aggregate([
            { $match: { name: `${param.name}` } },
            {
                $lookup: {
                    localField: 'restaurants',
                    foreignField: '_id',
                    from: 'restaurants',
                    as: 'restaurants',
                },
            },
        ]);
        return data;
    }
}
exports.ChefsDal = ChefsDal;
