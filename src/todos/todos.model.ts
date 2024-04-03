import { DataTypes, Model, Sequelize, UUIDV4, type Optional } from "sequelize";
import db from "../config/database.js";

interface TodosModelAttributes {
   id: string
   description: string
   status: number
   created_by?: string
   created_time: Date | string
}

interface TodosModelInput extends Optional<TodosModelAttributes, 'id'> { }
interface TodosModelOutput extends Required<TodosModelAttributes> { }


class TodosModel extends Model<TodosModelAttributes, TodosModelInput> implements TodosModelAttributes {
   declare id: string
   declare description: string
   declare status: number
   declare created_by: string
   declare created_time: Date | string
}

TodosModel.init({
   id: {
      primaryKey: true,
      defaultValue: UUIDV4,
      type: DataTypes.STRING
   },
   description: DataTypes.STRING,
   status: DataTypes.INTEGER,
   created_by: DataTypes.STRING,
   created_time: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
   }
}, {
   tableName: 'todos',
   sequelize: db,
   timestamps: false
})

export default TodosModel;