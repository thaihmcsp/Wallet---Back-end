const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./connectDb');

const Category = sequelize.define( 'Category', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    categoryName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    thumb: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv6s4SCIVOgCZ--nOzt4HdgdrN4JohCfh5GQ&usqp=CAU'
    }
}, {
    tableName: 'Categories',
    timestamps: true,
})

module.exports = Category