const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./connectDb');

const Expense = sequelize.define( 'Expense', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    walletId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    monthWalletId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    type: {
        type: DataTypes.ENUM('income', 'expense'),
        defaultValue: 'expense',
        allowNull: false
    },
    money: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    }
},{
    tableName: 'Expenses',
    timestamps: true,
})

module.exports = Expense