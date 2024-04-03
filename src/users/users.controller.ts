import { Context } from "hono";
import UsersModel from './users.model.js'

const getUsers = async (c: Context) => {
   return c.json({users: await UsersModel.findAll()})
}

const createUser = async (c: Context) => {
   try {
      const body = await c.req.json()
      const {username, password, name, email, contact_number} = body

      const user = await UsersModel.create({
         username: username,
         password: password,
         contact_number: contact_number,
         email: email,
         name: name
      })

      return c.json(user)
   } catch (e: any) {
      return c.json({
         message: e.message
      }, 500)
   }
}

const updateUser = async (c: Context) => {
   try {
      const body = await c.req.json()
      const {id, username, email, contact_number, name} = body
      const user = await UsersModel.findByPk(id)
      if (!user) return c.json({
         message: "User tidak ditemukan" 
      }, 404)
      await user.update({
         name, email, contact_number, username
      })

      return c.json(user)
   } catch (e: any) {
      return c.json({
         message: e.message
      }, 500)
   }
}

const deleteUser = async (c: Context) => {
   try {
      const body = await c.req.json()
      const {id} = body
      const user = await UsersModel.findByPk(id)
      if (!user) return c.json({
         message: "User tidak ditemukan" 
      }, 404)
      await user.destroy()

      return c.json(user)
   } catch (e: any) {
      return c.json({
         message: e.message
      }, 500)
   }
}

export {
   getUsers, createUser, updateUser, deleteUser
}