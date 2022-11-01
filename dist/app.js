"use strict";
/*
 * const express = require('express');
 * requireはcommonJSでのインポートの仕方
 * typescriptでnode.jsの関数を利用できるように下記コマンドを実行
 * npm i --save-dev @types/node
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_1 = __importDefault(require("./routes/todos"));
const body_parser_1 = require("body-parser");
/*
 * typescriptでnode.jsの型を認識するために下記コマンドを実行
 * npm i --save-dev @types/express
 */
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use("/todos", todos_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.listen(3000);
