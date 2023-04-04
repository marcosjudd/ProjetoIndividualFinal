import { Sequelize } from "sequelize";
import db from '../db.js'
import userModel from "./userModel.js";
import jogoModel from "./jogoModel.js";

const jogoVisto = db.define("jogovisto", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: userModel,
      key: 'id',
    }
  },
  jogo_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: jogoModel,
      key: 'id',
    }
  }
}, {
  freezeTableName: true,
  tableName: 'jogoVisto',
  timestamps: false
});

export default jogoVisto;