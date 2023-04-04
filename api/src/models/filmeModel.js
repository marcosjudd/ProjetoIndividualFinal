import { Sequelize } from 'sequelize';
import db from '../db.js';

const jogo = db.define('jogo', {
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
        msg: 'O campo nome não pode ser vazio',
      },
      len: {
        args: [3, 50],
        msg: 'O campo nome deve ter mais de dois caracteres',
      },
    },
  },
  sinopse: {
    type: Sequelize.STRING,
    validate: {
      max: {
        args: 150,
        msg: 'A sinopse só pode ter 150 caracteres.',
      },
    },
  },
  cartaz: {
    type: Sequelize.STRING,
    validate: {
      isUrl: {
        args: {
          protocols: ['http', 'https'],
          require_protocol: true,
          require_tld: true,
        },
        msg: 'Foi fornecida uma url inválida!',
      },
    },
  },
}, {
  freezeTableName: true,
  tableName: 'jogo',
  timestamps: false,
});

export default jogo;