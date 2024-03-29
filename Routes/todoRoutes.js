const express = require("express");
const {
  createTodo,
  getTodos,
  deleteTodo,
  updateTodo,
} = require("../Controllers/todoControllers");

const router = express.Router();

// @ Create Todo
// /api/todos

router.post("/todos", createTodo);

// @ Get Todos
// /api/todos
router.get("/todos", getTodos);

// @ delete Todo
// /api/todos
router.delete("/todos", deleteTodo);

// @ Updated Todo
// /api/todos
router.put("/todos", updateTodo);

module.exports = router;
