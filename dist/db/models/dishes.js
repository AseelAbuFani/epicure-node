"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dishesSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    restaurant: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    image: {
        type: String,
        required: false,
    },
    signature: {
        type: String,
        required: false,
    },
    price: {
        type: Number,
        required: false,
    },
    dishType: {
        type: String,
        required: false,
    },
}, { timestamps: true });
const Dishes = mongoose_1.default.model("Dishes", dishesSchema);
exports.default = Dishes;
