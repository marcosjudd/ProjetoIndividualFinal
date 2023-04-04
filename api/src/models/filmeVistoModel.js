import { Sequelize } from "sequelize";
import db from '../db.js'
import userModel from "./userModel.js";
import filmeModel from "./filmeModel.js";

const FilmeVisto = db.define("filmevisto", {
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
  filme_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: filmeModel,
      key: 'id',
    }
  }
}, {
  freezeTableName: true,
  tableName: 'filmeVisto',
  timestamps: false
});

export default FilmeVisto;