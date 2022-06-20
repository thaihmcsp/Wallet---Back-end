const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./connectDb');

const CategoriesInWallet = sequelize.define( 'CategoriesInWallet', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    walletId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    test: {
        type: DataTypes.STRING
    }
},{
    timestamps: true,
    tableName: 'CategoriesInWallet'
})

module.exports = CategoriesInWallet