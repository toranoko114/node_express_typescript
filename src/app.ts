/*
 * const express = require('express');
 * requireはcommonJSでのインポートの仕方
 * typescriptでnode.jsの関数を利用できるように下記コマンドを実行
 * npm i --save-dev @types/node
 */

import express, { Request, Response, NextFunction } from "express";
import todoRoutes from "./routes/todos";
import { json } from "body-parser"

/*
 * typescriptでnode.jsの型を認識するために下記コマンドを実行
 * npm i --save-dev @types/express
 */
const app = express();
app.use(json());
app.use("/todos", todoRoutes);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});
app.listen(3000);
