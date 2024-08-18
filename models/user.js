// arquivo: models/user.js

const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/config.js'); // Ajuste o caminho conforme necessário

class User extends Model {
  // Método para verificar a senha do usuário
  static async checkPassword(loginPassword, hashedPassword) {
    return bcrypt.compare(loginPassword, hashedPassword);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Garante que o e-mail seja único
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      // Antes de criar o usuário, o hash da senha será gerado
    },
  },
  {
    sequelize,
    timestamps: true,
    modelName: 'User',
    hooks: {
      beforeCreate: async (user) => {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
      },
      beforeUpdate: async (user) => {
        if (user.changed('password')) {
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(user.password, salt);
        }
      },
    },
  }
);

module.exports = User;
