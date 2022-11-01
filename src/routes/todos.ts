import { Router } from "express";
import {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} from "../controllers/todo";

const router = Router();

/*
 * Todoを1件登録する
 */
router.post("/", createTodo);

/*
 * Todoを複数件登録する
 */
router.get("/", getTodos);

/*
 * 条件に合致するTodoを更新する
 */
router.patch("/:id", updateTodo);

/*
 * 条件に合致するTodoを削除する
 */
router.delete("/:id", deleteTodo);

export default router;
