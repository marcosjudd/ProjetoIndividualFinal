import { Sequelize } from "sequelize";
import db from '../db.js'

const User = db.define("user", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nome: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: {
        msg: "O campo nome não pode ser vazio"
      },
      len:{
        args: [3,50],
        msg: "O campo nome deve ter mais de dois caracteres"
      } 
    }
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: {
        msg: "O campo Email não pode ser vazio"
      },
      isEmail: {
        msg: "Você deve passar um email válido!"
      }
    }
  },
  senha: {
    type: Sequelize.STRING,
    validate: {
      len: [8, 20],
      is: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/,
      msg: 'A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial (!@#$%^&*()_+-=[]{};:\'",.<>/?).'
    }
  }
}, {
  freezeTableName: true,
  tableName: 'user',
  timestamps: false
});

export default User;