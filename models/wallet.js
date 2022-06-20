const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./connectDb');

const Wallet = sequelize.define( 'Wallet' ,{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    walletName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    thumb: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv6s4SCIVOgCZ--nOzt4HdgdrN4JohCfh5GQ&usqp=CAU'
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
},{
    tableName: 'Wallets',
    timestamps: true,
})

module.exports = Wallet