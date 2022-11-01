"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_1 = require("../controllers/todo");
const router = (0, express_1.Router)();
/*
 * Todoを1件登録する
 */
router.post("/", todo_1.createTodo);
/*
 * Todoを複数件登録する
 */
router.get("/", todo_1.getTodos);
/*
 * 条件に合致するTodoを更新する
 */
router.patch("/:id", todo_1.updateTodo);
/*
 * 条件に合致するTodoを削除する
 */
router.delete("/:id", todo_1.deleteTodo);
exports.default = router;
