"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
// ダミーデータ
const TODOS = [];
/*
 * Todoを1件登録する
 */
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: "TODOを作成しました", createTodo: newTodo });
};
exports.createTodo = createTodo;
/*
 * Todoを複数件登録する
 */
const getTodos = (req, res, next) => {
    res.json({ todos: TODOS });
};
exports.getTodos = getTodos;
/*
 * Todoを複数件登録する
 */
const updateTodo = (req, res, next) => {
    const todoId = req.params.id;
    const updateText = req.body.text;
    const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error("対象のTODOが見つかりません。");
    }
    TODOS[todoIndex] = new todo_1.Todo(todoId, updateText);
    res.json({ message: "TODOを更新しました", updateTodo: TODOS[todoIndex] });
};
exports.updateTodo = updateTodo;
/*
 * 条件に合致するTodoを削除する
 */
const deleteTodo = (req, res, next) => {
    const todoId = req.params.id;
    const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error("対象のTODOが見つかりません。");
    }
    TODOS.splice(todoIndex, 1);
    res.json({ message: "TODOを削除しました" });
};
exports.deleteTodo = deleteTodo;
