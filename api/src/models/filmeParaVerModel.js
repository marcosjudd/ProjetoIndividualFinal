import { Sequelize } from "sequelize";
import db from '../db.js'
import userModel from "./userModel.js";
import jogoModel from "./jogoModel.js";

const jogoParaVer = db.define("jogoparaver", {
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
  tableName: 'jogoParaVer',
  timestamps: false
});

export default jogoParaVer;