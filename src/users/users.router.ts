import { Hono } from "hono";
import { createUser, deleteUser, getUsers, updateUser } from "./users.controller.js"

const app = new Hono()

app.get('/', getUsers)
app.post('/', createUser)
app.put('/', updateUser)
app.delete('/', deleteUser)

export default app;