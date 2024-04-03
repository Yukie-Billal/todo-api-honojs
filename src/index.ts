import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import TodoRouter from './todos/todos.router.js'

const app = new Hono()

app.get('/', (c) =>  c.text('Hello Hono!'))
app.route('/todos', TodoRouter)

const port = parseInt(process.env.PORT || "3000")
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
