"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orderController_1 = require("../controllers/orderController");
const router = (0, express_1.Router)();
router.get("/getOrder", orderController_1.OrderController.getOrder);
router.post("/createOrder", orderController_1.OrderController.createOrder);
exports.default = router;
