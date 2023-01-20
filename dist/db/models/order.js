"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
//Please don't check this model - it is still in treatment stage..
const orderSchema = new mongoose_1.default.Schema({
    user: {
        type: String,
        required: false,
    },
    dish: {
        type: String,
        required: false,
    },
    quantity: {
        type: Number,
        required: false,
    },
    side: {
        type: String,
        required: false,
    },
    changes: {
        type: String,
        required: false,
    },
}, { timestamps: true });
const Order = mongoose_1.default.model("Order", orderSchema);
exports.default = Order;
