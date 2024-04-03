import { Hono } from "hono"
import { createTodo, deleteTodo, getTodos, updateTodo } from "./todos.controller.js";

const app = new Hono()

app.get('/', getTodos)
app.post('/', createTodo)
app.put('/', updateTodo)
app.delete('/', deleteTodo)

export default app;