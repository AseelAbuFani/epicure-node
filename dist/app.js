"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./routes/index"));
const index_2 = require("./db/index");
const body_parser_1 = __importDefault(require("body-parser"));
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use(body_parser_1.default.urlencoded());
app.use(index_1.default);
(0, index_2.connectDb)().then(async () => {
    app.listen(3001, () => console.log("Listening on http://localhost:3001"));
});
exports.default = app;
