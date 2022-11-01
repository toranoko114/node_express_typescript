import { RequestHandler } from "express";
import { Todo } from "../models/todo";

// ダミーデータ
const TODOS: Todo[] = [];

/*
 * Todoを1件登録する
 */
export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);
  TODOS.push(newTodo);
  res.status(201).json({ message: "TODOを作成しました", createTodo: newTodo });
};

/*
 * Todoを複数件登録する
 */
export const getTodos: RequestHandler = (req, res, next) => {
  res.json({ todos: TODOS });
};

/*
 * Todoを複数件登録する
 */
export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;
  const updateText = (req.body as { text: string }).text;
  const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);

  if (todoIndex < 0) {
    throw new Error("対象のTODOが見つかりません。");
  }
  TODOS[todoIndex] = new Todo(todoId, updateText);

  res.json({ message: "TODOを更新しました", updateTodo: TODOS[todoIndex] });
};

/*
 * 条件に合致するTodoを削除する
 */
export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;
  const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);

  if (todoIndex < 0) {
    throw new Error("対象のTODOが見つかりません。");
  }
  TODOS.splice(todoIndex, 1);

  res.json({ message: "TODOを削除しました" });
};
