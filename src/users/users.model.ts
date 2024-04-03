import { DataTypes, Model, Sequelize, UUIDV4, type Optional } from "sequelize"
import db from "../config/database.js"

interface UsersModelAttributes {
   id: string
   username: string
   password: number
   name: number
   email: number
   contact_number: number
   created_by?: string
   created_time?: Date | string
}

interface UsersModelInput extends Optional<UsersModelAttributes, 'id'> {}
interface UsersModelOutput extends Required<UsersModelAttributes> {}


class UsersModel extends Model<UsersModelAttributes, UsersModelInput> implements UsersModelAttributes {
   declare username: string
   declare password: number
   declare name: number
   declare email: number
   declare contact_number: number
   declare id: string
   declare description: string
   declare status: number
   declare created_by: string
   declare created_time: Date | string
}

UsersModel.init({
   id: {
      primaryKey: true,
      defaultValue: UUIDV4,
      type: DataTypes.STRING
   },
   username: DataTypes.STRING,
   password: DataTypes.STRING,
   name: DataTypes.STRING,
   email: DataTypes.STRING,
   contact_number: DataTypes.STRING,
   created_by: DataTypes.STRING,
   created_time: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
   },
}, {
   tableName: 'users',
   sequelize: db,
   timestamps: false
})

export default UsersModel;