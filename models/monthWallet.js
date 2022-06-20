const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./connectDb');

const MonthWallet = sequelize.define( 'MonthWallet', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    walletId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    income: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    expense: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    totalBalance: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    startBalance: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
    }
}, {
    tableName: 'monthWallets',
    timestamps: true,
})

module.exports = MonthWallet